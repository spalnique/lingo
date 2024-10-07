import { FC } from 'react';

import Logo from '../Logo/Logo.tsx';
import Button from '../Button/Button.tsx';
import Navigation from '../Navigation/Navigation.tsx';

import { ButtonAction } from '../../@types/action.enum.ts';

const Header: FC = () => {
  return (
    <header className='bg-white flex justify-center items-center px-16 mb-5'>
      <Logo />
      <Navigation />
      <Button action={ButtonAction.login} />
      <Button action={ButtonAction.register} />
    </header>
  );
};

export default Header;
