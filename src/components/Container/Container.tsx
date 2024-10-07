import { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='max-w-[1440px] min-w-[375px] px-16 py-5 mx-auto flex flex-col'>
      {children}
    </div>
  );
};

export default Container;
