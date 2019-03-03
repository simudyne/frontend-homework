import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

export const TopMenu = ({ getCommits, ...props }) => {
	return (
		<Menu pointing secondary {...props}>
			<Menu.Menu position='right'>
				<Menu.Item>
					<Button primary onClick={getCommits}>Load Data</Button>
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	)
}


