import useSignUpForm from '../lib/hooks/useSignUpForm';
import AuthForm from '../components/features/auth/AuthForm';
import { EMAIL, NICKNAME, PASSWORD } from '../constants/formFields';
import { SIGNIN } from '../constants/pagePaths';
const SignUpPage = () => {
  const { signUpFormData, errorMessage, checkDuplicate, handleSignUpChange, handleSignUpSubmit } = useSignUpForm();
  const signUpFormList = [
    {
      labelName: '이메일',
      name: EMAIL,
      type: EMAIL,
      placeholder: '이메일을 입력해주세요',
      value: signUpFormData.email,
      onChange: handleSignUpChange,
      errorMessage: errorMessage.email,
      button: (
        <button
          type="button"
          onClick={() => checkDuplicate(EMAIL)}
          className="px-3 py-2 text-sm bg-secondary hover:bg-secondaryHover rounded-md"
        >
          중복 확인
        </button>
      )
    },
    {
      labelName: '비밀번호',
      name: PASSWORD,
      type: PASSWORD,
      placeholder: '비밀번호를 입력해주세요',
      value: signUpFormData.password,
      onChange: handleSignUpChange,
      errorMessage: errorMessage.password
    },
    {
      labelName: '비밀번호 확인',
      name: 'confirmPassword',
      type: PASSWORD,
      placeholder: '비밀번호를 다시 입력해주세요',
      value: signUpFormData.confirmPassword,
      onChange: handleSignUpChange,
      errorMessage: errorMessage.confirmPassword
    },
    {
      labelName: '닉네임',
      name: NICKNAME,
      type: 'text',
      placeholder: '닉네임을 입력해주세요',
      value: signUpFormData.nickname,
      onChange: handleSignUpChange,
      errorMessage: errorMessage.nickname,
      button: (
        <button
          type="button"
          onClick={() => checkDuplicate(NICKNAME)}
          className="px-3 py-2 text-sm bg-secondary hover:bg-secondaryHover rounded-md"
        >
          중복 확인
        </button>
      )
    }
  ];
  return (
    <AuthForm
      authFormList={signUpFormList}
      onSubmit={handleSignUpSubmit}
      buttonName="회원가입"
      placeholder="회원이시라면?"
      link={SIGNIN}
    />
  );
};

export default SignUpPage;
