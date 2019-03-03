import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

export const EmptyState = ({...props}) => (
		<Header as='h2' {...props} icon textAlign='center'>
			<Icon.Group size='large'>
				<Icon name='file excel outline'/>
			</Icon.Group>
			<Header.Content>No results</Header.Content>
		</Header>
)
