export function authValidate(name, value, form) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  switch (name) {
    case 'email': {
      return emailRegex.test(value) ? '중복 체크를 해주세요.' : '올바른 이메일 형식을 입력해주세요.';
    }
    case 'password': {
      return passwordRegex.test(value) ? '' : '영문, 숫자, 특수기호를 포함하여 최소 8자이상 작성해주세요';
    }
    case 'confirmPassword': {
      return value === form.password ? '' : '입력하신 비밀번호와 일치하지 않습니다.';
    }
    case 'nickname': {
      return value.length > 8 || value.length <= 1 ? '최소 2자부터 최대 8자까지 가능합니다.' : '중복 체크를 해주세요.';
    }
    case 'answer': {
      return value.length >= 12 ? '최대 12자까지 가능합니다.' : '';
    }
    default:
      return '';
  }
}
