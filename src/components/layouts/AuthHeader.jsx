import { Link } from 'react-router-dom';
import { CREATEPLAN, MYPLAN } from '../../constants/pagePaths';

export const AuthHeader = () => {
  return (
    <div className="flex items-center gap-4">
      <Link to={CREATEPLAN} className="text-secondary hover:text-primaryHover">
        새 여행 추가
      </Link>
      <Link to={MYPLAN} className="text-secondary  hover:text-primaryHover">
        내 여행 일정
      </Link>
      <button className="bg-secondary p-2 px-4 rounded-3xl text-white  hover:bg-secondaryHover">로그아웃</button>
    </div>
  );
};
