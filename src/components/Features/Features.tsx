import { features } from '../../constants/index.ts';

const Features = () => {
  return (
    <ul className='flex items-center justify-center gap-[100px] border-[1.5px] border-dashed rounded-[30px] py-10 px-[122px]'>
      {features.map(({ number, desc }) => (
        <li key={desc} className='flex gap-4 items-center'>
          <p className='font-roboto-medium text-[28px] leading-[1.14286] tracking-[-0.02em] text-[#121417] text-nowrap'>
            {`${number.toLocaleString()} +`}
          </p>
          <span className='inline-block w-[74px] font-roboto-regular text-[14px] leading-[1.28571] tracking-[-0.02em] text-[rgba(18,20,23,0.7)]'>
            {desc}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Features;
