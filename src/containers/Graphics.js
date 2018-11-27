import * as React from 'react'
import { connect } from 'react-redux'

import { fetchCommitsRequest } from '../actions'
import { Graphics as GraphicsComponent } from '../components/Graphics'

class GraphicsContainer extends React.Component {
  componentDidMount() {
    this.props.getCommits()
	}

  render() {
    return (
    	<GraphicsComponent {...this.props} />
   	)
  }
}

const mapStateToProps = state => ({
  commits: state.commits,
})

const mapDispatchToProps = dispatch => ({
  getCommits: () => dispatch(fetchCommitsRequest()),
})

export const Graphics = connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphicsContainer)
