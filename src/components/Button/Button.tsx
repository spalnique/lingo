import { FC, HTMLAttributes } from 'react';
import { ButtonType } from '../../@types/action.enum.ts';

type Props = {
  action: string;
  text: string;
};

const Button: FC<Props> = ({ action, text }) => {
  let styles: HTMLAttributes<HTMLButtonElement>['className'];
  switch (action) {
    case ButtonType.register:
      styles = 'px-[39px] py-3.5 text-base bg-[#121417] text-white rounded-xl';
      break;
    case ButtonType.login:
      styles = 'px-[39px] py-3.5 text-base bg-white text-[#121417] rounded-xl';
      break;
    case ButtonType.button:
      styles = 'px-12 py-4 text-base';
      break;
    default:
      break;
  }
  return (
    <button
      className={'px-12 py-4 bg-[#9fb7ce] font-bold'}
      name={action}
      type='button'
      value={styles}>
      {text}
    </button>
  );
};

export default Button;
