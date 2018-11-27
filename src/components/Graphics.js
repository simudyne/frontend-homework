import * as React from 'react'
import { Segment, Grid } from 'semantic-ui-react'

const style = {
  height: '100vh',
  fontSize: '24px'
}

export const Graphics = ({ commits }) => {
  return (
    <Grid
      centered
      columns={2}
      style={style}
      verticalAlign="middle"
    >
      <Grid.Column textAlign='center'>
        {commits.data.map(d => (<div>{d.sha}</div>))}
      </Grid.Column>
    </Grid>
  )
}
