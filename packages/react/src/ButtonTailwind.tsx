import { forwardRef } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    return (
      <button
        className={[
          'canvas-bg-primary-500 hover:canvas-bg-primary-700',
          'active:canvas-bg-primary-800 canvas-text-neutral-white',
          'canvas-py-8 canvas-px-[20px]',
          'canvas-rounded-large',
        ].join(' ')}
        {...rest}
        ref={ref}
        disabled={disabled || loading}
      />
    );
  },
);

Button.displayName = 'ButtonTailwind';

export default Button;
