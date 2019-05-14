import getNews from '../../helpers/axios/axios';

export const NEWS_REQUEST = 'NEWS_REQUEST';
export const NEWS_SUCCESS = 'NEWS_SUCCESS';
export const NEWS_FAILURE = 'NEWS_FAILURE';



// const fetchNews = () => dispatch => {
// 	dispatch(newsRequestAC());

// 	return getNews()
// 		.then(({ data: { articles } }) => dispatch(newsSuccessAC(articles)))
// 		.catch(err => dispatch(newsFailureAC(err)));
// };



export default fetchNews;
