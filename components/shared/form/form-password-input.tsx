'use client';

import {
  createContext,
  forwardRef,
  useContext,
  useImperativeHandle,
  useMemo,
  useState
} from 'react';
import { useController } from 'react-hook-form';

import { FormControl, useFormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Toggle } from '@/components/ui/toggle';
import { useFormDefaultValue } from '@/hooks/use-form-default-value';
import { Eye, EyeOff } from 'lucide-react';

import { cn } from '@/lib/utils';

type FormPasswordInputContext = {
  pressed: boolean;
  setPressed: (value: boolean) => void;
};

const formPasswordInputContext = createContext<FormPasswordInputContext>(
  {} as FormPasswordInputContext
);

const FormPasswordInputRoot = ({
  children,
  defaultPressed = false
}: {
  children: React.ReactNode;
  defaultPressed?: boolean;
}) => {
  const [pressed, setPressed] = useState(defaultPressed);

  const contextValue = useMemo(() => ({ pressed, setPressed }), [pressed, setPressed]);

  return (
    <formPasswordInputContext.Provider value={contextValue}>
      {children}
    </formPasswordInputContext.Provider>
  );
};

const FormPasswordInputContent = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('relative', className)} {...props} />;
  }
);
FormPasswordInputContent.displayName = 'FormPasswordInputContent';

const FormPasswordInputArea = forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentPropsWithoutRef<typeof Input>
>(({ defaultValue = '', children, ...props }, ref) => {
  const { pressed } = useContext(formPasswordInputContext);
  const { name } = useFormField();
  const {
    field: { ref: fieldRef, ...field }
  } = useController({
    name
  });
  useImperativeHandle(fieldRef, () => ref);
  useFormDefaultValue(defaultValue, field.value, field.onChange);

  return (
    <FormControl>
      <Input
        {...field}
        ref={ref}
        className='pr-10'
        autoComplete='off'
        type={pressed ? 'text' : 'password'}
        value={field.value ?? defaultValue}
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
  const { pressed, setPressed } = useContext(formPasswordInputContext);

  return (
    <Toggle
      ref={ref}
      className={cn(
        'absolute inset-y-0 right-2 my-auto bg-transparent text-current *:size-6 hover:bg-transparent data-[state=on]:bg-transparent data-[state=on]:text-current data-[state=on]:hover:bg-transparent',
        className
      )}
      aria-hidden='true'
      pressed={pressed}
      tabIndex={-1}
      value={value ?? 'toggle-icon'}
      onPressedChange={setPressed}
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
>(({ defaultPressed, contentClassName, toggleClassName, children, ...props }, ref) => {
  return (
    <FormPasswordInputRoot defaultPressed={defaultPressed}>
      <FormPasswordInputContent className={contentClassName}>
        <FormPasswordInputArea ref={ref} {...props} />
        {!children && <FormPasswordInputToggle className={toggleClassName} />}
        {children}
      </FormPasswordInputContent>
    </FormPasswordInputRoot>
  );
});
FormPasswordInput.displayName = 'FormPasswordInput';

export {
  FormPasswordInput,
  FormPasswordInputArea,
  FormPasswordInputContent,
  formPasswordInputContext,
  FormPasswordInputRoot,
  FormPasswordInputToggle
};
