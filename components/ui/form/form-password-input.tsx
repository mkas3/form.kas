'use client';

import React, {
  createContext,
  forwardRef,
  useContext,
  useImperativeHandle,
  useState,
} from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useController } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { FormControl, useFormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Toggle } from '@/components/ui/toggle';

type FormPasswordInputContext = {
  pressed: boolean;
  setPressed: (value: boolean) => void;
};

const FormPasswordInputContext = createContext<FormPasswordInputContext>({
  pressed: false,
  setPressed: () => {},
});

const FormPasswordInputRoot = ({
  children,
  defaultPressed = false,
}: {
  children: React.ReactNode;
  defaultPressed?: boolean;
}) => {
  const [pressed, setPressed] = useState(defaultPressed);

  return (
    <FormPasswordInputContext.Provider value={{ pressed, setPressed }}>
      {children}
    </FormPasswordInputContext.Provider>
  );
};

const FormPasswordInputContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('relative', className)} {...props} />;
});
FormPasswordInputContent.displayName = 'FormPasswordInputContent';

const FormPasswordInputArea = forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentPropsWithoutRef<typeof Input>
>(({ defaultValue = '', children, ...props }, ref) => {
  const { pressed } = useContext(FormPasswordInputContext);
  const { name } = useFormField();
  const {
    field: { ref: fieldRef, ...field },
  } = useController({
    name,
  });
  useImperativeHandle(fieldRef, () => ref);
  useFormDefaultValue(defaultValue, field.value, field.onChange);

  return (
    <FormControl>
      <Input
        {...field}
        ref={ref}
        className='pr-10'
        value={field.value ?? defaultValue}
        type={pressed ? 'text' : 'password'}
        autoComplete='off'
        {...props}
      />
    </FormControl>
  );
});
FormPasswordInputArea.displayName = 'FormPasswordInputArea';

const FormPasswordInputToggle = forwardRef<
  React.ElementRef<typeof Toggle>,
  React.ComponentPropsWithoutRef<typeof Toggle>
>(({ value, className, ...props }, ref) => {
  const { pressed, setPressed } = useContext(FormPasswordInputContext);

  return (
    <Toggle
      ref={ref}
      className={cn(
        'absolute inset-y-0 right-0 my-auto bg-transparent text-current *:size-5 hover:bg-transparent data-[state=on]:bg-transparent data-[state=on]:text-current data-[state=on]:hover:text-muted-foreground',
        className
      )}
      value={value ?? 'toggle-icon'}
      pressed={pressed}
      onPressedChange={setPressed}
      aria-hidden='true'
      tabIndex={-1}
      {...props}
    >
      {pressed ? <EyeOff /> : <Eye />}
    </Toggle>
  );
});
FormPasswordInputToggle.displayName = 'FormPasswordInputToggle';

const FormPasswordInput = forwardRef<
  React.ElementRef<typeof FormPasswordInputArea>,
  React.ComponentPropsWithoutRef<typeof FormPasswordInputArea> & {
    defaultPressed?: boolean;
    contentClassName?: string;
    toggleClassName?: string;
  }
>(
  (
    { defaultPressed, contentClassName, toggleClassName, children, ...props },
    ref
  ) => {
    return (
      <FormPasswordInputRoot defaultPressed={defaultPressed}>
        <FormPasswordInputContent className={contentClassName}>
          <FormPasswordInputArea ref={ref} {...props} />
          {!children && <FormPasswordInputToggle className={toggleClassName} />}
          {children}
        </FormPasswordInputContent>
      </FormPasswordInputRoot>
    );
  }
);
FormPasswordInput.displayName = 'FormPasswordInput';

export {
  FormPasswordInput,
  FormPasswordInputRoot,
  FormPasswordInputContent,
  FormPasswordInputArea,
  FormPasswordInputToggle,
  FormPasswordInputContext,
};
