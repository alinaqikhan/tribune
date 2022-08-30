import { BreakingNews, Jumbotron } from "../components";

const DUMMY_NEWS_LIST = [
    { id: 1, title: "UET Lahore signs MoU with Total Parco Pakistan Ltd", link:"/events"},
    { id: 2, title: "UET Lahore is Offering 8 Weeks Certificate Courses Session July to September", link:"/events"},
    { id: 3, title: "Diamond Jubilee of Pakistan, tree plantation campaign started at UET, Lahore", link:"/events"},
    { id: 4, title: "UET Lahore Celebrates Diamond Jubilee, Completion of 75 years of Pakistan's Independence, today", link:"/events"}
];

const HomePage = props => {
    return (
        <div>
           <Jumbotron />
           <BreakingNews newsList={DUMMY_NEWS_LIST} />
        </div>
    );
};

export default HomePage;
