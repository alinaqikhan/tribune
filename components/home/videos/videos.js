import YouTubeIcon from '@mui/icons-material/YouTube';

const Videos = props => {
  return (
    <section className="w-full p-2">
      <h2 className="videos-top-border font-bold text-gray-900 text-xl pt-1 md:text-center flex items-center gap-2">
        <span> Videos </span>{' '}
        <YouTubeIcon sx={{ width: 30, height: 30 }} color="error" />
      </h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-3">
        <FeaturedVideo />
        <div>
          <VideoItem />
        </div>
      </div>
    </section>
  );
};

export default Videos;

const FeaturedVideo = () => {
  return (
    <div className="md:col-span-2 rounded-sm">
      <div className="w-full overflow-hidden">
        <video
          preload="none"
          loop
          src="/videos/syfy.mp4"
          width={350}
          className={'md:w-full rounded-sm'}
          autoPlay
          muted
          controls
        ></video>
      </div>
      <div className="my-2">
        <h2 className="font-semibold text-xl hover:underline">
          Closing Ceremony - SyFy 2022
        </h2>
        <p className="text-sm truncate-3 hover:underline">
          UET Tribune along with its Advisor and President concludes the
          successful event and pays a token of gratitude to worthy Vice
          Chancellor Prof. Dr. Syed Mansoor Sarwar for encouraging students &apos;
          societies to organize such well appreciated competitions and training
          sessions, Director Students Affairs Prof Dr. Asif Ali Qaiser for
          leading us and Registrar Mr. Muhammad Asif for such consistent support
          and finally Nobel prize nominated Dr. Amjad Saqib for his thought
          provoking speech.
        </p>
        <p className="tag my-2 pl-1 text-gray-900">Event</p>
      </div>
    </div>
  );
};

const VideoItem = () => {
  return (
    <div className="w-full overflow-hidden my-2 lg:mt-0">
      <div className="w-full overflow-hidden mb-2">
        <video
          src="/videos/syfy.mp4"
          className={'rounded-sm'}
          muted
          controls
        ></video>
      </div>
      <h4 className="font-semibold">Postgraduate Admissions 2022</h4>
      <p className="truncate-5 text-xs w-3/4 hover:underline">
        It is informed to all concerned that the test result of the following
        programs has been announced by UET Lahore. Deadline for submitting
        graduate applications has been extended up to Friday, August 12, 2022.
        For more information, visit: https://admission.uet.edu.pk Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Corporis quibusdam
        reiciendis ipsa, suscipit dignissimos laudantium odio ab necessitatibus
        id odit nam illum consectetur ipsam, exercitationem vel voluptatibus
        cupiditate, dolorum fugiat.
      </p>
      <p className="tag mt-3 pl-1 text-gray-900">Notification</p>
    </div>
  );
};
