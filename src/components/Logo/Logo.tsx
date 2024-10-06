import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink
      to='/'
      className='relative w-[133px] pl-9 text-[#121417] tracking-[-0.02em] leading-6 before:content-[""] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:block before:h-7 before:w-7 before:rounded-full before:bg-gradient-to-b before:from-blue-600 before:to-50% before:from-50% before:to-yellow-300'>
      LearnLingo
    </NavLink>
  );
};

export default Logo;
