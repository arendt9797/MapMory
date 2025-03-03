/**
 * Text 컴포넌트입니다. 기본 p 태그로 설정
 * @component
 * @example
 * <Text theme='secondary' size='md' className='m-5'>
 *   내용입니다.
 * </Text>
 *
 * @prop {string} [theme] - 기본 테마, 프로젝트 primary 색상 or secondary 색상 선택
 * @prop {string} [size] - 텍스트 크기 ( "xs" | "sm" | "md" | "lg" | "xl" | "2xl" )
 * @prop {string} [className] - 그 외 추가적인 스타일 유틸리티 클래스
 */
const Text = ({ children, theme, size, className = '', ...props }) => {
  const themeStyles = {
    primary: 'text-primary',
    secondary: 'text-secondary'
  };

  const sizeStyles = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  };

  const styles = `${themeStyles[theme]} ${sizeStyles[size]} ${className}`;

  return (
    <p className={styles} {...props}>
      {children}
    </p>
  );
};

export default Text;
