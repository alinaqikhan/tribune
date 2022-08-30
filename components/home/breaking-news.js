import Image from 'next/image';
import Link from 'next/link';

const BreakingNews = ({ newsList }) => {
  if (!newsList) {
    return;
  }

  return (
    <div className="ticker-wrapper-h my-4">
      <div className="heading">News</div>
      <ul className="news-ticker-h">
        {newsList.map(news => (
          <li className='flex items-center gap-4' key={news.id}>
            <Image src={"/logo.png"} height={20} width={20} layout={"fixed"} />
            <Link href={`${news.link}`}>
              <a>{news.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreakingNews;
