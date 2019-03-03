import * as React from 'react'
import { Header, Button } from "semantic-ui-react";

const style = {

}

export const SideActionsControls = ({ getCommits, title }) => {
	return (
		<Header>
			<Button primary onClick={getCommits}>{title}</Button>
		</Header>
	)
}
