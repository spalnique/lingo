import { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className='w-[1440px] px-16 mx-auto'>{children}</div>;
};

export default Container;
