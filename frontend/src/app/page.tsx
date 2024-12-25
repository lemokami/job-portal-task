import CreateJobOpeningModal from '@/components/CreateJobModal';
import JobCard from '@/components/JobCard';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-[#FBFBFF]'>
      <div
        style={{ boxShadow: '0px 0px 14px 0px #C6BFBF40' }}
        className='flex flex-col gap-6 items-center pt-5 bg-white'>
        <nav
          className='rounded-full flex items-center gap-6 py-4 px-6'
          style={{ boxShadow: '0px 0px 20px 0px #7F7F7F26' }}>
          <svg
            width='44'
            height='46'
            viewBox='0 0 44 46'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0_2_109)'>
              <mask
                id='mask0_2_109'
                style={{ maskType: 'luminance' }}
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='44'
                height='46'>
                <path d='M44 0.661621H0V45.3385H44V0.661621Z' fill='white' />
              </mask>
              <g mask='url(#mask0_2_109)'>
                <path
                  d='M26.33 5.41968L26.8852 23.3961L41.6353 13.9324L26.33 5.41968Z'
                  fill='#333333'
                />
                <path
                  d='M41.5308 32.7551V13.8619L20.395 27.4678V45.3387H21.1064'
                  fill='#494949'
                />
                <path
                  d='M3.18878 32.0419L16.7153 23.3629L17.2245 39.8485L3.18878 32.0419Z'
                  fill='url(#paint0_linear_2_109)'
                />
                <path
                  d='M3.18878 32.0419L16.7153 23.3629L17.2245 39.8485L3.18878 32.0419Z'
                  fill='url(#paint1_linear_2_109)'
                />
                <path
                  d='M3.18878 32.0419L16.7153 23.3629L17.2245 39.8485L3.18878 32.0419Z'
                  stroke='url(#paint2_linear_2_109)'
                  strokeWidth='0.846154'
                />
                <path
                  d='M3.18878 32.0419L16.7153 23.3629L17.2245 39.8485L3.18878 32.0419Z'
                  stroke='url(#paint3_linear_2_109)'
                  strokeWidth='0.846154'
                />
                <path
                  d='M2.46906 13.2451V32.1381L23.6051 18.5501V0.661621H22.8936'
                  fill='url(#paint4_linear_2_109)'
                />
                <path
                  d='M2.46906 13.2451V32.1381L23.6051 18.5501V0.661621H22.8936'
                  fill='url(#paint5_linear_2_109)'
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id='paint0_linear_2_109'
                x1='2.36496'
                y1='31.5921'
                x2='17.6704'
                y2='31.5921'
                gradientUnits='userSpaceOnUse'>
                <stop stopColor='#00AAFF' />
                <stop offset='1' stopColor='#8636F8' />
              </linearGradient>
              <linearGradient
                id='paint1_linear_2_109'
                x1='10.0177'
                y1='40.5806'
                x2='10.0177'
                y2='22.6037'
                gradientUnits='userSpaceOnUse'>
                <stop stopColor='white' stopOpacity='0.6' />
                <stop offset='0.1085' stopColor='white' stopOpacity='0.455' />
                <stop offset='0.4332' stopColor='white' stopOpacity='0.216' />
                <stop offset='0.6639' stopColor='white' stopOpacity='0.06' />
                <stop offset='0.775' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint2_linear_2_109'
                x1='2.36496'
                y1='31.5921'
                x2='17.6704'
                y2='31.5921'
                gradientUnits='userSpaceOnUse'>
                <stop stopColor='#00AAFF' />
                <stop offset='1' stopColor='#8636F8' />
              </linearGradient>
              <linearGradient
                id='paint3_linear_2_109'
                x1='10.0177'
                y1='40.5806'
                x2='10.0177'
                y2='22.6037'
                gradientUnits='userSpaceOnUse'>
                <stop stopColor='white' stopOpacity='0.6' />
                <stop offset='0.1085' stopColor='white' stopOpacity='0.455' />
                <stop offset='0.4332' stopColor='white' stopOpacity='0.216' />
                <stop offset='0.6639' stopColor='white' stopOpacity='0.06' />
                <stop offset='0.775' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <linearGradient
                id='paint4_linear_2_109'
                x1='1.5926'
                y1='20.0785'
                x2='24.8932'
                y2='18.3851'
                gradientUnits='userSpaceOnUse'>
                <stop offset='0.0226' stopColor='#8636F8' />
                <stop offset='0.3484' stopColor='#F020B3' />
                <stop offset='0.6742' stopColor='#F8475E' />
                <stop offset='1' stopColor='#FF9421' />
              </linearGradient>
              <linearGradient
                id='paint5_linear_2_109'
                x1='13.0371'
                y1='32.1381'
                x2='13.0371'
                y2='0.661621'
                gradientUnits='userSpaceOnUse'>
                <stop stopColor='white' stopOpacity='0.6' />
                <stop offset='0.0842' stopColor='white' stopOpacity='0.455' />
                <stop offset='0.367' stopColor='white' stopOpacity='0.216' />
                <stop offset='0.568' stopColor='white' stopOpacity='0.06' />
                <stop offset='0.6648' stopColor='white' stopOpacity='0' />
              </linearGradient>
              <clipPath id='clip0_2_109'>
                <rect
                  width='44'
                  height='44.6769'
                  fill='white'
                  transform='translate(0 0.661621)'
                />
              </clipPath>
            </defs>
          </svg>

          <div className='flex items-center'>
            <Link href='/' className='py-2 px-6'>
              Home
            </Link>
            <Link href='/jobs' className='py-2 px-6'>
              Find Jobs
            </Link>
            <Link href='/talents' className='py-2 px-6'>
              Find Talents
            </Link>
            <Link href='/about' className='py-2 px-6'>
              About us
            </Link>
            <Link href='/testimonials' className='py-2 px-6'>
              Testimonials
            </Link>
          </div>

          <button
            className='rounded-full py-2 px-4 text-white'
            style={{
              background:
                'linear-gradient(180deg, #A128FF 0%, #6100AD 113.79%)',
            }}>
            Create Jobs
          </button>
        </nav>
        <span>lkjlkjlkjlk</span>
      </div>

      <div className='px-16 py-14 grid grid-cols-4 gap-4'>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />

        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
}
