import {
  FC,
  ButtonHTMLAttributes,
  PropsWithChildren,
  MouseEventHandler,
} from 'react';

import { ButtonAction } from '../../@types/action.enum.ts';
import clsx from 'clsx';

type Props = PropsWithChildren & {
  action: ButtonAction;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<Props> = ({ children, action, onClick, type = 'button' }) => {
  let styles: ButtonHTMLAttributes<HTMLButtonElement>['className'];
  const handleClick =
    onClick ??
    ((e) => {
      console.log(e.currentTarget.value);
    });

  switch (action) {
    case ButtonAction.register:
      styles =
        'flex gap- px-[39px] py-3.5 font-bold bg-[#121417] leading-5 text-white rounded-xl';
      children = 'Registration';
      break;
    case ButtonAction.login:
      styles =
        'flex gap-2 px-[19px] mr-5 py-3.5 font-bold bg-white leading-5 text-[#121417] rounded-xl text-nowrap';
      children = (
        <>
          <svg
            className='size-5 stroke-[#9fb7ce] fill-none'
            width='20px'
            height='20px'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H12.5'
              // stroke='#9FB7CE'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M8.33333 5.83334L12.5 10M12.5 10L8.33333 14.1667M12.5 10L2.5 10'
              // stroke='#9FB7CE'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          Log in
        </>
      );
      break;
    default:
      styles = 'px-12 py-4 text-base bg-red';
      break;
  }
  return (
    <button
      className={clsx(
        styles,
        'hover:scale-[1.01] transition-all ease-in-out duration-300'
      )}
      name={action}
      type={type}
      onClick={handleClick}
      value={action}>
      {children}
    </button>
  );
};

export default Button;
