import * as React from 'react'
import { connect } from 'react-redux'

import { Spinner as SpinnerComponent } from '../components/Spinner'
import { hideable } from "../components/hideable";

const mapStateToProps = ({ commits: { fetching }}) => ({
	hidden: !fetching
})

export default connect(
	mapStateToProps,
	{}
)(hideable(SpinnerComponent))
