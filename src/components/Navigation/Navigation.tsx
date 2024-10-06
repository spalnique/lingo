import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

const Navigation: FC = () => {
  return (
    <nav className='flex justify-center gap-7 grow'>
      <NavLink
        className={({ isActive }) =>
          clsx(
            'relative block w-fit text-[#121417] text-[16px] leading-5 before:w-0 before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:opacity-0 before:transition-all before:ease-in-out before:duration-300',
            {
              ['before:content-[""] before:block before:absolute before:opacity-100 before:w-[105%] before:h-[2px] before:bg-[#9fb7ce] before:rounded-full']:
                isActive,
            }
          )
        }
        to='/'>
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          clsx(
            'relative block w-fit text-[#121417] text-[16px] leading-5 before:w-0 before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:opacity-0 before:transition-all before:ease-in-out before:duration-300',
            {
              ['before:content-[""] before:block before:absolute before:opacity-100 before:w-[105%] before:h-[2px] before:bg-[#9fb7ce] before:rounded-full']:
                isActive,
            }
          )
        }
        to='/teachers'>
        Teachers
      </NavLink>
    </nav>
  );
};

export default Navigation;
