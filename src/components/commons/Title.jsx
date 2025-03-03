/**
 * 제목 컴포넌트입니다. text-bold 속성이 기본 설정되어있습니다.
 * @component
 * @example
 * <Title theme='primary' size='4xl' className='border-2'>
 *   내용입니다.
 * </Title>
 *
 * @prop {string} [theme] - 기본 테마, 프로젝트 primary 색상 or secondary 색상 선택, 디폴트는 secondary
 * @prop {string} [size] - 글자 크기 ( "xl" | "2xl" | "3xl" | "4xl" | "5xl" )
 * @prop {string} [margin] - 그 외 추가적인 스타일 유틸리티 클래스
 */
const Title = ({ theme = 'secondary', size, className, children }) => {
  const baseStyles = 'font-bold';

  const themeStyles = {
    primary: 'text-primary',
    secondary: 'text-secondary'
  };

  const sizeStyles = {
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl'
  };

  const styles = `${baseStyles} ${themeStyles[theme]} ${sizeStyles[size]} ${className}`;

  return <h1 className={styles}>{children}</h1>;
};

export default Title;
