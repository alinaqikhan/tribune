import { Divider } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Notifications = props => {
  return (
    <section className="w-full bg-blue-400">
      <FeaturedPost />
      <Divider className="m-3" />
      <Post />
      <Divider className="m-3" />
      <Post />
      <Divider className="m-3" />
      <Post />
      <Divider className="m-3" />
      <Post />
      <Divider className="m-3" />
      <Post />
      <Divider className="m-3" />
    </section>
  );
};

export default Notifications;

// 300 x 200

const FeaturedPost = () => {
  return (
    <Link className="my-2 rounded-sm w-full" href={'/'}>
      <a>
        <div className="w-full overflow-hidden">
          <Image
            src={'/news.jpg'}
            alt="Featured Notification"
            width={350}
            height={200}
            layout={'responsive'}
            objectFit={'contain'}
          />
        </div>
        <div className="m-2">
          <h2 className="font-semibold hover:underline">
            Undergraduate Admission Process Schedule 2022
          </h2>
          <p className="text-sm truncate-3 hover:underline">
            It is informed to all concerned that Undergraduate Admission Process
            Schedule 2022 has been announced by UET Lahore. All the dates about
            admissions are given below.{' '}
          </p>
          <p className="tag mt-2 pl-1 text-gray-900">Notification</p>
        </div>
      </a>
    </Link>
  );
};

const Post = () => {
  return (
    <Link className="my-2 rounded-sm" href={'/'}>
      <a>
        <div className="w-full overflow-hidden m-2">
          <h4 className="font-semibold">Postgraduate Admissions 2022</h4>
          <div className="m-2 flex gap-2">
            <div className='w-1/4 overflow-hidden'>
              <Image src={'/news-2.jpg'} width={100} height={75} layout={'responsive'} />
            </div>
            <p className="truncate-5 text-xs w-3/4 hover:underline">
              It is informed to all concerned that the test result of the
              following programs has been announced by UET Lahore. Deadline for
              submitting graduate applications has been extended up to Friday,
              August 12, 2022. For more information, visit:
              https://admission.uet.edu.pk
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam reiciendis ipsa, suscipit dignissimos laudantium odio ab necessitatibus id odit nam illum consectetur ipsam, exercitationem vel voluptatibus cupiditate, dolorum fugiat.
            </p>
          </div>
          <p className="tag mt-2 pl-1 text-gray-900">Notification</p>
        </div>
      </a>
    </Link>
  );
};
