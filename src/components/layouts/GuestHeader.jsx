import { Link } from 'react-router-dom';

const GuestHeader = () => {
  return (
    <div className="flex items-center gap-4">
      <Link to="/signIn" className="bg-secondary  p-2 px-4  rounded-3xl text-white hover:bg-secondaryHover">
        로그인
      </Link>
    </div>
  );
};

export default GuestHeader;
