import AuthForm from '../components/features/auth/AuthForm';
import { EMAIL, PASSWORD } from '../constants/formFields';
import { SIGNUP } from '../constants/pagePaths';
import useSignInForm from '../lib/hooks/useSignInForm';

const SignInPage = () => {
  const { handleSignInChange, handleSignInSubmit, errorMessage } = useSignInForm();
  const signInFormList = [
    {
      labelName: '이메일',
      name: EMAIL,
      type: EMAIL,
      placeholder: '이메일을 입력해주세요',
      onChange: handleSignInChange
    },
    {
      labelName: '비밀번호',
      name: PASSWORD,
      type: PASSWORD,
      placeholder: '비밀번호를 입력해주세요',
      onChange: handleSignInChange
    }
  ];
  return (
    <>
      <AuthForm
        authFormList={signInFormList}
        onSubmit={handleSignInSubmit}
        buttonName="로그인"
        errorMessage={errorMessage}
        placeholder="아직 회원이 아니신가요?"
        link={SIGNUP}
      />
    </>
  );
};

export default SignInPage;
