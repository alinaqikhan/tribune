import Head from 'next/head';

import TeamCard from '../../components/teams/team-card';
import teamData from '../../database/team2022-23.json';

const TribuneTeamPage = props => {
  return (
    <>
    <Head>
      <title>Tribune Hierarchy 2022-23</title>
      <meta name='description' content="UET Tribune's Hierarchy 2022-2023 including Core Body, Directors & Editors and Executive Members"/>
      <link rel='icon' href='/favicon.ico' />
    </Head>
      <h2 className="px-4 md:px-8 lg:px-12 font-bold text-xl md:text-2xl md:mb-0 pt-14 my-3 md:pb-3 md:my-4 drop-shadow-xl">
        Tribune Hierarchy 2022-2023
      </h2>
      <div>
        <p className="apple-menu-bar p-4 py-3 md:px-8 lg:px-12 sticky top-14 left-0 right-0 z-10 pb-3 font-semibold bg-off-white">
          Core Body
        </p>
        <div className="flex flex-wrap w-full justify-center items-center py-5 md:px-8 md:justify-start">
          {teamData.core.map(member => (
            <TeamCard
              key={member.id}
              name={member.name}
              src={member.photo_url}
              post={member.post}
              priority={member.priority}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="apple-menu-bar p-4 py-3 md:px-8 lg:px-12 sticky top-14 left-0 right-0 z-10 pb-3 font-semibold bg-off-white">
          Directors &amp; Editors
        </p>
        <div className="flex flex-wrap w-full justify-center items-center py-5 md:px-8 md:justify-start">
          {teamData.directorsAndEditors.map(member => (
            <TeamCard
              key={member.id}
              name={member.name}
              src={member.photo_url}
              post={member.post}
              priority={member.priority}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="apple-menu-bar p-4 py-3 md:px-8 lg:px-12 sticky top-14 left-0 right-0 z-10 pb-3 font-semibold bg-off-white">
          Executives
        </p>
        <div className="flex flex-wrap w-full justify-center items-center py-5 md:px-8 md:justify-start">
          {teamData.executives.map(member => (
            <TeamCard
              key={member.id}
              name={member.name}
              src={member.photo_url}
              post={member.post}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TribuneTeamPage;
