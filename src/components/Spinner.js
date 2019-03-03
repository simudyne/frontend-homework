import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

export const Spinner = () => (
	<Dimmer active inverted>
		<Loader inverted content='Loading'/>
	</Dimmer>
)
