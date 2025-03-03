import { Link } from 'react-router-dom';

/**
 * Button 컴포넌트입니다.
 * @component
 * @example
 * <Button isLink='true' theme='secondary' size='md' className='absolute'>
 *   계획짜러 가기
 * </Button>
 *
 * @prop {boolean} [isLink] - Link 태그로 사용시 true 설정, 디폴트는 false(버튼 태그)
 * @prop {string} [theme] - 기본 테마, 프로젝트 primary 색상 or secondary 색상 선택
 * @prop {string} [size] - 버튼 크기 ( "sm" | "md" | "lg" )
 * @prop {string} [className] - 그 외 추가적인 스타일 유틸리티 클래스
 */
const Button = ({ isLink = false, children, theme, size, className = '', ...props }) => {
  const baseStyles = 'px-4 p-2 rounded-full text-white';

  const themeStyles = {
    primary: 'bg-primary hover:bg-primaryHover',
    secondary: 'bg-secondary hover:bg-secondaryHover'
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-6 py-3 text-lg'
  };

  const styles = `${baseStyles} ${themeStyles[theme]} ${sizeStyles[size]} ${className}`;

  return isLink ? (
    <Link className={styles} {...props}>
      {children}
    </Link>
  ) : (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
