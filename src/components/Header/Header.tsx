import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Header: FC = () => {
  const flagTWStyles = [
    'content-[""]',
    'absolute',
    'top-1/2',
    '-translate-y-1/2',
    '-left-9',
    'block',
    'h-7',
    'w-7',
    'rounded-full',
    'bg-gradient-to-b',
    'from-blue-600',
    'to-50%',
    'from-50%',
    'to-yellow-300',
  ]
    .map((style) => `before:${style}`)
    .join(' ');

  return (
    <header className='bg-white flex justify-center border border-red-300'>
      <NavLink
        to='/'
        className={`${flagTWStyles} relative text-xl text-[#121417] tracking-[-0.02em] leading-6`}>
        LearnLingo
      </NavLink>
      <nav className='flex justify-center gap-7 grow'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/teachers'>Teachers</NavLink>
      </nav>
    </header>
  );
};

export default Header;
