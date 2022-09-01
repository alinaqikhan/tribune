import { Divider, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Events = props => {
  return (
    <section className="w-full">
      <Divider className="mx-2 mb-2">
        <Typography color={"GrayText"} variant='subtitle2'>Events At UET</Typography>
      </Divider>
      <EventPost />
      <EventPost />
      <EventPost />
    </section>
  );
};

export default Events;


const EventPost = () => {
    return (
      <Link className="my-2 rounded-sm w-full" href={'/'}>
        <a>
          <div className="w-full overflow-hidden">
            <Image
              src={'/event.jpeg'}
              alt="Featured Notification"
              width={350}
              height={200}
              priority
              layout={'responsive'}
              objectFit={'contain'}
            />
          </div>
          <div className="m-2">
            <h2 className="font-semibold text-xl hover:underline">
            UET Lahore Flood Relief Camp
            </h2>
            <p className="text-sm truncate-3 hover:underline">
            Volunteers are required for Fund Raising Camp for Flood Victims at UET Lahore (Main Library). There would be 3 shifts of four hours each to work for. Students can choose day and time slot as per their availability. All the students are encouraged to step forward to participate in this noble cause. 
            </p>
            <p className="tag mt-2 pl-1 text-gray-900">Event</p>
          </div>
        </a>
      </Link>
    );
  };
