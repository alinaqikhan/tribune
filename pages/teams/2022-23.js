import TeamCard from '../../components/teams/team-card';

const TribuneTeamPage = props => {
  return (
    <>
    <h2 className='px-4 md:px-8 lg:px-12 font-bold text-xl md:text-2xl md:mb-0 pt-14 my-2 md:my-5'>Tribune Hierarchy 2022-2023</h2>
    <div>
      <p className='apple-menu-bar p-4 py-3 md:px-8 lg:px-12 sticky top-14 left-0 right-0 z-10 pb-3 font-semibold bg-off-white'>Core Body</p>
      <div>
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
      <p className='apple-menu-bar p-4 md:px-8 lg:px-12 sticky top-14 left-0 right-0 z-10 pb-3 font-semibold'>Directors</p>
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
      <TeamCard
        name={'Hafsa Khan'}
        src={'/avatar.png'}
        post={'Vice President - Editors'}
      />
      <p className='apple-menu-bar p-4 md:px-8 lg:px-12 sticky top-14 left-0 right-0 z-10 pb-3 font-semibold'>Executives</p>
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
