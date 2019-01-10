import * as React from 'react'
import { connect } from 'react-redux'

import { fetchCommitsRequest } from '../actions'
import { Graphics as GraphicsComponent } from '../components/Graphics'

const mapStateToProps = state => ({
  commits: state.commits,
})

const mapDispatchToProps = dispatch => ({
  getCommits: (repository) => dispatch(fetchCommitsRequest(repository)),
})

export const Graphics = connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphicsComponent)
