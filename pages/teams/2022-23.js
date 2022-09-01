import TeamCard from '../../components/teams/team-card';

const TribuneTeamPage = props => {
  return (
    <>
      <h2 className="px-4 md:px-8 lg:px-12 font-bold text-xl md:text-2xl md:mb-0 pt-14 my-3 md:pb-3 md:my-4 drop-shadow-xl">
        Tribune Hierarchy 2022-2023
      </h2>
      <div>
        <p className="apple-menu-bar p-4 py-3 md:px-8 lg:px-12 sticky top-14 left-0 right-0 z-10 pb-3 font-semibold bg-off-white">
          Core Body
        </p>
        <div className="flex flex-wrap w-full justify-center items-center py-2 md:px-8 md:justify-start">
          <TeamCard
            name={'Hafsa Khan'}
            src={'/avatar.png'}
            post={'Vice President - Editors'}
          />
          <TeamCard
            name={'Hafsa Khan'}
            src={'/avatar.png'}
            post={'Vice President - Editors'}
          />
          <TeamCard
            name={'Hafsa Khan'}
            src={'/avatar.png'}
            post={'Vice President - Editors'}
          />
          <TeamCard
            name={'Hafsa Khan'}
            src={'/avatar.png'}
            post={'Vice President - Editors'}
          />
        </div>
      </div>
      <div>
        <p className="apple-menu-bar p-4 py-3 md:px-8 lg:px-12 sticky top-14 left-0 right-0 z-10 pb-3 font-semibold bg-off-white">
          Directors
        </p>
        <div className="flex flex-wrap w-full justify-center items-center py-2 md:px-8 md:justify-start">
          <TeamCard
            name={'Hafsa Khan'}
            src={'/avatar.png'}
            post={'Vice President - Editors'}
          />
          <TeamCard
            name={'Hafsa Khan'}
            src={'/avatar.png'}
            post={'Vice President - Editors'}
          />
          <TeamCard
            name={'Hafsa Khan'}
            src={'/avatar.png'}
            post={'Vice President - Editors'}
          />
          <TeamCard
            name={'Hafsa Khan'}
            src={'/avatar.png'}
            post={'Vice President - Editors'}
          />
        </div>
      </div>
      <div>
        <p className="apple-menu-bar p-4 py-3 md:px-8 lg:px-12 sticky top-14 left-0 right-0 z-10 pb-3 font-semibold bg-off-white">
          Executives
        </p>
        <div className="flex flex-wrap w-full justify-center items-center py-2 md:px-8 md:justify-start">
          <TeamCard
            name={'Hafsa Khan'}
            src={'/avatar.png'}
            post={'Vice President - Editors'}
          />
          <TeamCard
            name={'Hafsa Khan'}
            src={'/avatar.png'}
            post={'Vice President - Editors'}
          />
          <TeamCard
            name={'Hafsa Khan'}
            src={'/avatar.png'}
            post={'Vice President - Editors'}
          />
          <TeamCard
            name={'Hafsa Khan'}
            src={'/avatar.png'}
            post={'Vice President - Editors'}
          />
        </div>
      </div>
    </>
  );
};

export default TribuneTeamPage;
