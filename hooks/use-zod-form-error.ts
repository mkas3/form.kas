import type {
  SubmitErrorHandler,
  SubmitHandler,
  UseFormProps,
} from 'react-hook-form';
import type { z, ZodType } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const useZodForm = <T extends ZodType>(
  formSchema: T,
  onSubmit: SubmitHandler<z.infer<T>>,
  onInvalidSubmit?: SubmitErrorHandler<z.infer<T>>,
  options?: UseFormProps<z.infer<T>>
) => {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(formSchema),
    ...options,
  });

  return {
    ...form,
    onSubmit,
    onInvalidSubmit,
  };
};
