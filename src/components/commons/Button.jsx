import clsx from 'clsx';

/**
 * Button 컴포넌트입니다.
 * @component
 * @example
 * <Button color={'secondary'} hoverColor={'secondaryHover'} rounded={'lg'}>
 *   계획짜러 가기
 * </Button>
 *
 * @prop {string} [color] - 색상 클래스명 ex)black, gray-500
 * @prop {string} [hoverColor] - 색상 클래스명 ex)black, gray-500
 * @prop {string} [rounded] - radius 크기 ( "sm" | "md" | "lg" | "xl" )
 */
export const Button = ({ color, hoverColor, rounded, children, ...props }) => {
  const roundedValue = {
    sm: 'rounded-xl',
    md: 'rounded-2xl',
    lg: 'rounded-3xl',
    xl: 'rounded-full'
  };
  return (
    <button {...props} className={`bg-${color} p-2 px-4 ${roundedValue[rounded]} text-white hover:bg-${hoverColor}`}>
      {children}
    </button>
  );
};

export const Button2 = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyles = 'bg-secondary p-2 px-4 rounded-full text-white hover:bg-secondaryHover';

  const variantStyles = {
    primary: 'bg-primary hover:bg-primaryHover',
    secondary: 'bg-secondary hover:bg-secondaryHover'
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-6 py-3 text-lg'
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export const Button3 = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const styles = clsx(
    'p-2 px-4 rounded-full text-white',
    {
      'bg-primary hover:bg-primaryHover': variant === 'primary',
      'bg-secondary hover:bg-secondaryHover': variant === 'secondary'
    },
    {
      'px-2 py-1 text-sm': size === 'sm',
      'px-4 py-2 text-md': size === 'md',
      'px-6 py-3 text-lg': size === 'lg'
    },
    className
  );

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};
