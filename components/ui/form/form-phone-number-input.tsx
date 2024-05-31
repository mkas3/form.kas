'use client';

import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { useController } from 'react-hook-form';
import PhoneInput, { Country, Value } from 'react-phone-number-input';

import { cn } from '@/lib/utils';
import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { FormControl, useFormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type FormPhoneNumberInputContext = {
  phoneNumber?: Value;
  country?: Country;
};

const FormPhoneNumberInputContext = createContext<FormPhoneNumberInputContext>(
  {} as FormPhoneNumberInputContext
);

const FormCountrySelect = forwardRef<
  React.ElementRef<typeof SelectContent>,
  React.ComponentPropsWithoutRef<typeof Select> & {
    name?: string;
    value?: string;
    onChange: (value?: string) => void;
    onFocus: (event: React.FocusEvent<HTMLSelectElement>) => void;
    onBlur: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value?: string; label: string; divider?: boolean }[];
    iconComponent?: React.ElementType;
    disabled?: boolean;
    readOnly?: boolean;
    tabIndex?: number | string;
    withIcon?: boolean;
    unicodeFlags?: boolean;
    contentClassName?: string;
    itemClassName?: string;
    triggerClassName?: string;
    iconWrapperClassName?: string;
  }
>(
  (
    {
      value,
      onChange,
      options,
      disabled,
      readOnly,
      children,
      iconComponent: Icon,
      withIcon = true,
      unicodeFlags,
      contentClassName,
      itemClassName,
      triggerClassName,
      iconWrapperClassName,
      ...props
    },
    ref
  ) => {
    const { country } = useContext(FormPhoneNumberInputContext);

    const OptionsComponents = useMemo(() => {
      return (
        <>
          {options.map(({ value, label, divider }) => (
            <SelectItem
              key={divider ? '|' : value || 'ZZ'}
              value={divider ? '|' : value || 'ZZ'}
              disabled={divider}
              className={cn(
                divider ? 'bg-current text-[1px] text-inherit' : '',
                itemClassName
              )}
            >
              {label}
            </SelectItem>
          ))}
        </>
      );
    }, [itemClassName, options]);

    return (
      <Select value={country} onValueChange={onChange} {...props}>
        <SelectTrigger
          className={cn('h-10 w-20 gap-x-2 px-3 py-1', triggerClassName)}
        >
          <SelectValue asChild={withIcon}>
            {withIcon && (
              <div
                className={cn(
                  'flex size-1/2 items-center justify-center *:flex *:aspect-square *:w-full',
                  iconWrapperClassName
                )}
              >
                {unicodeFlags && value && <>{getUnicodeFlagIcon(value)}</>}
                {!(unicodeFlags && value) && Icon && (
                  <Icon
                    aria-hidden
                    country={value}
                    label={country ?? value ?? 'ZZ'}
                    aspectRatio={unicodeFlags ? 1 : undefined}
                  />
                )}
              </div>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent ref={ref} className={contentClassName} align='center'>
          {OptionsComponents}
        </SelectContent>
      </Select>
    );
  }
);
FormCountrySelect.displayName = 'CountrySelectWithIcon';

const FormPhoneNumberInputArea = forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentPropsWithoutRef<typeof Input> & {
    value: string;
  }
>(({ ...props }, ref) => {
  return <Input ref={ref} {...props} />;
});
FormPhoneNumberInputArea.displayName = 'PhoneNumberInputArea';

const FormPhoneNumberContainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div className={cn('flex gap-x-2', className)} ref={ref} {...props} />;
});
FormPhoneNumberContainer.displayName = 'PhoneNumberContainer';

const FormPhoneNumberInput = forwardRef<
  React.ElementRef<typeof PhoneInput>,
  Omit<React.ComponentPropsWithoutRef<typeof PhoneInput>, 'onChange'> &
    Partial<
      Pick<React.ComponentPropsWithoutRef<typeof PhoneInput>, 'onChange'>
    > & {
      defaultPhoneNumber?: Value | string;
    }
>(
  (
    {
      defaultPhoneNumber = '',
      defaultCountry = 'ZZ',
      onCountryChange,
      onChange,
      children,
      ...props
    },
    ref
  ) => {
    const { name } = useFormField();
    const {
      field: {
        ref: fieldRef,
        value: fieldValue,
        onChange: onFieldChange,
        name: fieldName,
        ...field
      },
    } = useController({
      name,
    });
    useImperativeHandle(fieldRef, () => ref);
    useFormDefaultValue(
      { phoneNumber: defaultPhoneNumber, country: defaultCountry },
      fieldValue,
      onFieldChange
    );

    const [innerPhoneNumber, setInnerPhoneNumber] =
      useState(defaultPhoneNumber);
    const [innerCountry, setInnerCountry] = useState(defaultCountry);

    const innerOnChange = useCallback(
      (value?: Value) => {
        setInnerPhoneNumber(value as string);
        onChange?.(value);
      },
      [onChange]
    );

    const innerOnCountryChange = useCallback(
      (country: Country) => {
        setInnerCountry(country || defaultCountry);
        onCountryChange?.(country || defaultCountry);
      },
      [defaultCountry, onCountryChange]
    );

    useEffect(() => {
      onFieldChange({ phoneNumber: innerPhoneNumber, country: innerCountry });
    }, [innerPhoneNumber, innerCountry, onFieldChange]);

    return (
      <FormPhoneNumberInputContext.Provider
        value={{
          phoneNumber: fieldValue?.phoneNumber,
          country: fieldValue?.country,
        }}
      >
        <FormControl>
          <PhoneInput
            {...field}
            ref={ref}
            value={fieldValue?.phoneNumber}
            onChange={innerOnChange}
            onCountryChange={innerOnCountryChange}
            countrySelectComponent={FormCountrySelect}
            inputComponent={FormPhoneNumberInputArea}
            containerComponent={FormPhoneNumberContainer}
            {...props}
          />
        </FormControl>
      </FormPhoneNumberInputContext.Provider>
    );
  }
);
FormPhoneNumberInput.displayName = PhoneInput.displayName;

export {
  FormCountrySelect,
  FormPhoneNumberInputArea,
  FormPhoneNumberInput,
  FormPhoneNumberInputContext,
};
