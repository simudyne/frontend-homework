import * as React from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'

const customStyle = {
	height: '70vh',
	fontSize: '24px',
	overflow: 'auto',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}

export const Layout = ({ children, menu, style, ...props }) => (
	<Container {...props} >
		{menu}
		<Grid textAlign='center'>
			<Grid.Column >
				<Segment style={{...style, ...customStyle}}>
					{children}
				</Segment>
			</Grid.Column>
		</Grid>
	</Container>
)
