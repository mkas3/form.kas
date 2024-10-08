'use client';

import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState
} from 'react';
import { useController } from 'react-hook-form';
import type { Country, Value } from 'react-phone-number-input';
import PhoneInput from 'react-phone-number-input';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

import { FormControl, useFormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { cn } from '@/lib/utils';

type FormPhoneNumberInputContext = {
  phoneNumber?: Value;
  country?: Country;
};

const formPhoneNumberInputContext = createContext<FormPhoneNumberInputContext>(
  {} as FormPhoneNumberInputContext
);

const useFormPhoneInput = () => {
  return useContext(formPhoneNumberInputContext);
};

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
    const { country } = useFormPhoneInput();

    const OptionsComponents = useMemo(() => {
      return (
        <>
          {options.map(({ value, label, divider }) => (
            <SelectItem
              key={divider ? '|' : value || 'ZZ'}
              className={cn(divider ? 'bg-current text-[1px] text-inherit' : '', itemClassName)}
              disabled={divider}
              value={divider ? '|' : value || 'ZZ'}
            >
              {label}
            </SelectItem>
          ))}
        </>
      );
    }, [itemClassName, options]);

    return (
      <Select value={country} onValueChange={onChange} {...props}>
        <SelectTrigger className={cn('h-10 w-20 gap-x-2 px-3 py-1', triggerClassName)}>
          <SelectValue asChild={withIcon}>
            {withIcon ? (
              <div
                className={cn(
                  'flex size-1/2 items-center justify-center *:flex *:aspect-square *:w-full',
                  iconWrapperClassName
                )}
              >
                {unicodeFlags && value ? <>{getUnicodeFlagIcon(value)}</> : null}
                {!(unicodeFlags && value) && Icon ? (
                  <Icon
                    aspectRatio={unicodeFlags ? 1 : undefined}
                    country={value}
                    label={country ?? value ?? 'ZZ'}
                    aria-hidden
                  />
                ) : null}
              </div>
            ) : null}
          </SelectValue>
        </SelectTrigger>
        <SelectContent ref={ref} align='center' className={contentClassName}>
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

const FormPhoneNumberContainer = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('flex gap-x-2', className)} {...props} />;
  }
);
FormPhoneNumberContainer.displayName = 'PhoneNumberContainer';

const FormPhoneNumberInput = forwardRef<
  React.ElementRef<typeof PhoneInput>,
  Omit<React.ComponentPropsWithoutRef<typeof PhoneInput>, 'onChange'> &
    Partial<Pick<React.ComponentPropsWithoutRef<typeof PhoneInput>, 'onChange'>> & {
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
      }
    } = useController({
      name
    });
    useImperativeHandle(fieldRef, () => ref);
    useFormDefaultValue(
      { phoneNumber: defaultPhoneNumber, country: defaultCountry },
      fieldValue,
      onFieldChange
    );

    const [innerPhoneNumber, setInnerPhoneNumber] = useState(defaultPhoneNumber);
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

    const contextValue = useMemo(
      () => ({
        phoneNumber: fieldValue?.phoneNumber,
        country: fieldValue?.country
      }),
      [fieldValue]
    );

    return (
      <formPhoneNumberInputContext.Provider value={contextValue}>
        <FormControl>
          <PhoneInput
            {...field}
            ref={ref}
            containerComponent={FormPhoneNumberContainer}
            countrySelectComponent={FormCountrySelect}
            inputComponent={FormPhoneNumberInputArea}
            value={fieldValue?.phoneNumber}
            onChange={innerOnChange}
            onCountryChange={innerOnCountryChange}
            {...props}
          />
        </FormControl>
      </formPhoneNumberInputContext.Provider>
    );
  }
);
FormPhoneNumberInput.displayName = PhoneInput.displayName;

export { FormCountrySelect, FormPhoneNumberInput, FormPhoneNumberInputArea, useFormPhoneInput };
