import * as React from 'react'
import { connect } from 'react-redux'

import { Graphics as GraphicsComponent } from '../components/Graphics'
import { createErrorMessage } from "../components/Error";

const mapStateToProps = ({ commits: { data, error } }) => ({
  data,
	error
})

export const Graphics = connect(
  mapStateToProps,
	{}
)(createErrorMessage(GraphicsComponent))
