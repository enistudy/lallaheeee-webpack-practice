import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import { pullRight, h1 } from './layout.css';

const Layout = ({ children }) => {
	return (
		<Container>
			<Link to="/">
				<Header as="h1" className={h1}>
					webpack-for-react
				</Header>
			</Link>
			{children}
			<Divider />
			<p className={pullRight}>
				Made with <Icon name="heart" color="red" /> by lallaheeee with
				enistudy
			</p>
		</Container>
	);
};

export default Layout;
