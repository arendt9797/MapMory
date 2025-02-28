import { useState } from 'react';
import { supabase } from '../apis/supabaseClient';
import { useNavigate } from 'react-router-dom';

const useSignInForm = () => {
  const [signInFormData, setSignInFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword(signInFormData);

    if (error) {
      return alert('error 발생!');
    }
    alert('로그인 성공!');
    navigate('/');
  };
  return { handleSignInChange, handleSignInSubmit };
};

export default useSignInForm;
