/**
 * 제목 컴포넌트입니다. text-bold 속성이 기본 설정되어있습니다.
 * @component
 * @example
 * <Title fontSize={'xl'} margin={'md'}>나의 여행 계획 리스트</Title>
 *
 * @prop {string} [fontSize] - 글자 크기 ( "xl" | "2xl" | "3xl" )
 * @prop {string} [margin] - margin 크기 ( "sm" | "md" | "lg" )
 */

const Title = ({ fontSize, margin, children }) => {
  const sizeValue = {
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl'
  };

  const marginValue = {
    sm: 'm-2',
    md: 'm-4',
    lg: 'm-6'
  };
  return <h1 className={`${sizeValue[fontSize]} ${marginValue[margin]} text-secondary font-bold`}>{children}</h1>;
};

export default Title;
