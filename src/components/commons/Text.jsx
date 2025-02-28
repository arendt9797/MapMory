/**
 * text 컴포넌트입니다. 기본 p 태그로 설정
 * @component
 * @example
 * <Text fontSize={'md'} textColor={'secondary'} align={'center'}>
 *  내용이 들어가면 됩니다.
 * </Text>
 *
 * @prop {string} [fontSize] - 글자 크기 ( "xs" | "md" | "lg" | "xl" | "2xl" )
 * @prop {string} [textColor] - 색상 클래스명 ex)black, gray-500
 * @prop {string} [align] - 정렬 위치 ( "left" | "center" | "right" )
 */

const Text = ({ fontSize, textColor, align, children }) => {
  const sizeValue = {
    xs: 'text-xs',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  };

  const alignValue = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return <p className={`${sizeValue[fontSize]} text-${textColor} ${alignValue[align]}`}>{children}</p>;
};

export default Text;
