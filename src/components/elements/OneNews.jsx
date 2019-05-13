import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Card, Feed } from 'semantic-ui-react';

const OneNews = ({ urlToImage, title, description }) => {
	return (
		<>
			<Segment>
				<Card style={{width:'100%'}}>
					<Card.Content>
						<Feed >
							<Feed.Event>

							</Feed.Event>
						</Feed>
					</Card.Content>
				</Card>
			</Segment>
		</>
	);
};

export default OneNews;


