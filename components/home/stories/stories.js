import { Divider } from '@mui/material';
import Image from 'next/image';

const Stories = props => {
  return (
    <section className="w-full">
      <h2 className="stories-top-border m-2 font-bold text-gray-900 text-xl pt-1 md:text-center">
        Stories
      </h2>
      <div>
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
      </div>
    </section>
  );
};

export default Stories;

const StoryItem = props => {
  return (
    <>
    <div className="m-2">
      <div className='flex gap-2'>
        <Image src={'/story.jpg'} width={60} height={60} alt={"story"} />
        <p className='truncate-5 text-xs w-3/4 hover:underline'>Artwork by Ghulfam Ali Khan, from Mechatronics and Control Engineering Department, Session 20, UET Lahore (Faisalabad Campus).</p>
      </div>
      <p className="tag mt-2 pl-1 text-gray-900">Campus Art</p>
    </div>
    <Divider className="m-3" />
    </>
  );
};
