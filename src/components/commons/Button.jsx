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

const Button = ({ color, hoverColor, rounded, children, ...props }) => {
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

export default Button;
