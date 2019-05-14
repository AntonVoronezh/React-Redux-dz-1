import React from 'react';
import { connect } from 'react-redux';
import News from '../../components/pages/News';
import getNews from '../../helpers/axios/axios';
import fetchNews from '../../store/actions/newsActions';





export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewsContainer);
