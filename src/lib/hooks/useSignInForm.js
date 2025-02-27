import { useState } from 'react';
import { supabase } from '../apis/supabaseClient';

const useSignInForm = () => {
  const [signInFormData, setSignInFormData] = useState({
    email: '',
    password: ''
  });
  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword(signInFormData);
    console.log(error);
    if (error) return alert('error 발생!');
  };
  return { handleSignInChange, handleSignInSubmit };
};

export default useSignInForm;
