import * as React from 'react'
import { Grid } from 'semantic-ui-react'
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

  return (
    <Grid
      centered
      columns={1}
      style={style}
      verticalAlign="middle"
    >
      <Grid.Column textAlign='center'>
        {data}
      </Grid.Column>
    </Grid>
  )
}
