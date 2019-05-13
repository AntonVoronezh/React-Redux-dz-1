import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAILURE } from '../actions/newsActions';

const initialState = {
	isLoading: false,
	news: [],
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {

		default:
			return state;
	}
};
