import { useState } from 'react';
import { supabase } from '../apis/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../constants/pagePaths';

const useSignInForm = () => {
  const [signInFormData, setSignInFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword(signInFormData);
    if (error) {
      return setErrorMessage('아이디와 비밀번호가 일치하지 않습니다!');
    }
    navigate(HOME);
  };

  return { errorMessage, handleSignInChange, handleSignInSubmit };
};

export default useSignInForm;
