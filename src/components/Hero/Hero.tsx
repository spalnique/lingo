import { FC } from 'react';

import image_png from '../../assets/images/png/block@2x.png';
import image_1x_webp from '../../assets/images/webp/block@1x.webp';
import image_2x_webp from '../../assets/images/webp/block@2x.webp';
import image_3x_webp from '../../assets/images/webp/block@3x.webp';

const Hero: FC = () => {
  return (
    <div className='w-full flex gap-6 mb-6'>
      <div className='w-full bg-[#f8f8f8] rounded-[30px] pt-[98px] pb-5 px-16'>
        <h1 className='max-w-[548px] text-[48px] font-roboto-medium leading-[1.16667] tracking-[-0.02em] mb-11'>
          Unlock your potential with the best{' '}
          <span className='inline-block relative z-[1] font-roboto-italic after:content-[""] after:absolute after:-z-[1] after:w-[195px] after:h-10 after:bg-[#bfd6ea] after:bottom-[6px] after:rounded-lg after:left-1/2 after:-translate-x-1/2'>
            language
          </span>{' '}
          tutors
        </h1>
        <p className='max-w-[436px] font-roboto-regular leading-[1.375] tracking-[-0.02em] text-[#121417]'>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
      </div>
      <img
        className='w-[568px] min-w-[375px] h-full flex-shrink-0'
        srcSet={`${image_1x_webp} 1x, ${image_2x_webp} 2x, ${image_3x_webp} 3x`}
        alt='Image with a girl working with an apple laptop'
        src={image_png}
        width={568}
        height={530}
      />
    </div>
  );
};

export default Hero;
