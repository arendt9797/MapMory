import useSignUpForm from '../lib/hooks/useSignUpForm';

const SignUpPage = () => {
  const { handleSignUpChange, handleSignUpSubmit } = useSignUpForm();
  return (
    <div>
      <form onSubmit={handleSignUpSubmit}>
        <label>이메일</label>
        <input name="email" type="email" onChange={handleSignUpChange} required />
        <label>비밀번호</label>
        <input name="password" type="password" onChange={handleSignUpChange} required />
        <label>닉네임</label>
        <input name="nickname" type="text" onChange={handleSignUpChange} required />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUpPage;
