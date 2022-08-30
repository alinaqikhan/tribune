import Link from 'next/link';

const BreakingNews = ({ newsList }) => {
  if (!newsList) {
    return;
  }

  return (
    <div className="ticker-wrapper-h my-4">
      <div className="heading">Latest</div>
      <ul className="news-ticker-h">
        {newsList.map(news => (
          <li key={news.id}>
            <Link href={`${news.link}`}>
              <a href="">{news.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreakingNews;
