import useSignInForm from '../lib/hooks/useSignInForm';

const SignInPage = () => {
  const { handleSignInChange, handleSignInSubmit } = useSignInForm();
  return (
    <div>
      <form onSubmit={handleSignInSubmit}>
        <label>이메일</label>
        <input name="email" type="email" onChange={handleSignInChange} required />
        <label>비밀번호</label>
        <input name="password" type="password" onChange={handleSignInChange} required />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default SignInPage;
