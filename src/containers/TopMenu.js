import * as React from 'react'
import { connect } from 'react-redux'

import { TopMenu as TopMenuComponent } from '../components/TopMenu'
import { fetchCommitsRequest } from "../actions";

export default connect(
	null,
	{
	  getCommits: fetchCommitsRequest
	}
)(TopMenuComponent)
