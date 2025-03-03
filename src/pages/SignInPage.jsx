import AuthForm from '../components/features/auth/AuthForm';
import useSignInForm from '../lib/hooks/useSignInForm';

const SignInPage = () => {
  const { handleSignInChange, handleSignInSubmit } = useSignInForm();
  const signInFormList = [
    {
      labelName: '이메일',
      name: 'email',
      type: 'email',
      placeholder: '이메일을 입력해주세요',
      onChange: handleSignInChange
    },
    {
      labelName: '비밀번호',
      name: 'password',
      type: 'password',
      placeholder: '비밀번호를 입력해주세요',
      onChange: handleSignInChange
    }
  ];
  return (
    <>
      <h2>로그인</h2>
      <AuthForm authFormList={signInFormList} onSubmit={handleSignInSubmit} buttonName="로그인" />
    </>
  );
};

export default SignInPage;
