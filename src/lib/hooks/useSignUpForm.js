import { useState } from 'react';
import { supabase } from '../apis/supabaseClient';
import { useNavigate } from 'react-router-dom';

const useSignUpForm = () => {
  const [signUpFormData, setSignUpFormData] = useState({
    email: '',
    password: '',
    nickname: ''
  });
  const navigate = useNavigate();

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email: signUpFormData.email,
      password: signUpFormData.password,
      options: {
        data: {
          nickname: signUpFormData.nickname
        }
      }
    });
    if (error) {
      return alert('error 발생! :', error);
    }
    alert('로그인 성공!');
    navigate('/signIn');
  };
  return { handleSignUpChange, handleSignUpSubmit };
};

export default useSignUpForm;
