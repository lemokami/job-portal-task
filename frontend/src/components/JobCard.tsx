import { Button } from '@mantine/core';
import ExperienceIcon from './icons/ExperienceIcon';
import OnsiteIcon from './icons/OnsiteIcon';
import PackageIcon from './icons/PackageIcon';

const JobCard = () => {
  return (
    <div
      className='p-4 rounded-2xl flex flex-col gap-5 bg-white'
      style={{ boxShadow: '0px 0px 14px 0px #D3D3D326' }}>
      <div className='flex justify-between'>
        <div
          className='border p-2 rounded-lg'
          style={{
            background: 'linear-gradient(180deg, #FEFEFD 0%, #F1F1F1 100%)',
            boxShadow: '0px 0px 10.25px 0px #94949440',
          }}>
          <img src='/amazon.png' alt='' />
        </div>

        <div className='px-2.5 py-2 bg-[#B0D9FF] h-fit rounded-[10px] text-sm font-medium'>
          24h Ago
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <span className='font-bold text-xl'>Full Stack Developer</span>
        <div className='flex items-center gap-4 text-[#5A5A5A]'>
          <div className='flex items-center gap-1'>
            <ExperienceIcon />
            <span className='font-medium'>1-3 yr Exp</span>
          </div>

          <div className='flex items-center gap-1'>
            <OnsiteIcon />
            <span className='font-medium'>Onsite</span>
          </div>

          <div className='flex items-center gap-1'>
            <PackageIcon />
            <span className='font-medium'>12 LPA</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-5'>
        <p className='font-medium text-sm leading-4 text-[#555555]'>
          - A user-friendly interface lets you browse stunning photos and videos
          - Filter destinations based on interests and travel style, and create
          personalized
        </p>
        <Button radius='md' size='md'>
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
