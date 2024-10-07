import { FC } from 'react';
import Hero from '../components/Hero/Hero.tsx';
import Features from '../components/Features/Features.tsx';

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
};

export default HomePage;
