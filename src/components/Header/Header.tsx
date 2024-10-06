import { FC } from 'react';
import Logo from '../Logo/Logo.tsx';
import Button from '../Button/Button.tsx';
import { ButtonAction } from '../../@types/action.enum.ts';
import Navigation from '../Navigation/Navigation.tsx';

const Header: FC = () => {
  return (
    <header className='bg-white flex justify-center items-center pt-5 mb-5'>
      <Logo />
      <Navigation />
      <Button action={ButtonAction.login} />
      <Button action={ButtonAction.register} />
    </header>
  );
};

export default Header;
