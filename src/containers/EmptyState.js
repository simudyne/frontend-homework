import * as React from 'react'
import { connect } from 'react-redux'

import { EmptyState as EmptyStateComponent } from '../components/EmptyState'
import { hideable } from "../components/hideable";

const mapStateToProps = ({ commits: { data }}) => ({
	hidden: !!data.length
})

export default connect(
	mapStateToProps,
	{}
)(hideable(EmptyStateComponent))
