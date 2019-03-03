import * as React from 'react'
import { Message } from 'semantic-ui-react'

export const FetchingErrorMessage = ({ error }) => (
	<Message negative>
		<Message.Header>{error}</Message.Header>
		<Message.Content>Try reloading your data</Message.Content>
	</Message>
)

export const createErrorMessage = (Component) => ({ error, reload, ...props }) => (
	error ? <FetchingErrorMessage error={error} /> : <Component {...props} />
)
