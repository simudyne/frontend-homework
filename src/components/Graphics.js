import * as React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { Loader } from './Loader'

import Commit from './Commit'

const style = {
  height: '100vh',
  fontSize: '24px',
  padding: '1rem'
}

export const Graphics = ({ commits }) => {

  if (commits.fetching) {
    return <Loader />
  }

  const data = commits.error ?
    commits.error.message :
    commits.data.map(commit => (
      <Commit key={commit.sha} data={commit} />
    ))

  const repoLink = <a href="https://github.com/juallom/frontend-homework"
    target="_blank">juallom/frontend-homework</a>

  return (
    <Grid
      centered
      columns={1}
      style={style}
      verticalAlign="top"
    >
      <Grid.Column textAlign='left'>
        <Header size="medium" textAlign="center">
          Commits on {repoLink}
        </Header>
        {data}
      </Grid.Column>
    </Grid>
  )
}
