import { useState } from 'react';
import { supabase } from '../apis/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { authValidate } from '../utils/authValidate';
import { EMAIL, NICKNAME } from '../../constants/formFields';
import { HOME } from '../../constants/pagePaths';
import Swal from 'sweetalert2';

const useSignUpForm = () => {
  const navigate = useNavigate();

  const [signUpFormData, setSignUpFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: ''
  });

  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: ''
  });

  const [isDuplicateChecked, setIsDuplicateChecked] = useState({
    email: false,
    nickname: false
  });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpFormData((prev) => ({ ...prev, [name]: value }));

    // 유효성 검사
    const errorMsg = authValidate(name, value, signUpFormData);
    setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));

    // 이메일, 닉네임 변경 시 중복 체크 다시
    if (name === EMAIL || name === NICKNAME) {
      setIsDuplicateChecked((prev) => ({ ...prev, [name]: false }));
    }
  };

  const checkDuplicate = async (type) => {
    if (errorMessage[type] !== '중복 체크를 해주세요.') return; // 유효성 검사가 통과하지 않으면 중복 체크 X

    const { data } = await supabase.from('users').select().eq(type, signUpFormData[type]);
    if (data.length > 0) {
      return setErrorMessage((prev) => ({
        ...prev,
        [type]: `이미 사용 중인 ${type === EMAIL ? '이메일' : '닉네임'}입니다.`
      }));
    }

    setIsDuplicateChecked((prev) => ({ ...prev, [type]: true }));
    setErrorMessage((prev) => ({ ...prev, [type]: `사용 가능한 ${type === EMAIL ? '이메일' : '닉네임'}입니다.` }));
  };

  function isValidForm() {
    for (const key in errorMessage) if (!isDuplicateChecked[key] && errorMessage[key]) return false;
    return true;
  }

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    if (!isValidForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: '입력하신 정보가 올바르지 않습니다. 다시 확인해주세요.',
        confirmButtonText: '확인',
        confirmButtonColor: '#2E4769'
      });
      return;
    }

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
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: `회원가입 실패, 입력된 정보를 다시 확인해 주세요!`,
        confirmButtonText: '확인',
        confirmButtonColor: '#2E4769'
      });
    }
    Swal.fire({
      icon: 'success',
      title: '회원가입 성공!',
      text: `회원가입 성공! 자동으로 로그인 됩니다!`,
      confirmButtonText: '확인',
      confirmButtonColor: '#2E4769'
    }).then(() => navigate(HOME));
  };

  return { signUpFormData, errorMessage, isDuplicateChecked, handleSignUpChange, handleSignUpSubmit, checkDuplicate };
};

export default useSignUpForm;
