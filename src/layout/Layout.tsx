import { FC, PropsWithChildren } from 'react';

import Header from '../components/Header/Header.tsx';
import Container from '../components/Container/Container.tsx';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
