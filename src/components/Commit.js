import * as React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Segment, Grid, Header, Image } from 'semantic-ui-react'


const Commit = ({ data }) => (
  <Segment>
    <Grid
      centered
      columns={2}
      verticalAlign="middle"
    >
      <Grid.Column>
        <Header size="tiny">{data.commit.message}</Header>
        <div>
          <Image src={data.com} avatar />
        </div>
      </Grid.Column>
      <Grid.Column textAlign="right">
        <div>{moment(data.commit.committer.date).format('LL')}</div>
      </Grid.Column>
    </Grid>

  </Segment>
)

Commit.propTypes = {
  data: PropTypes.shape({
    sha: PropTypes.string.isRequired,
    commit: PropTypes.shape({
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      }).isRequired,
      committer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      }).isRequired,
      message: PropTypes.string.isRequired,
      comment_count: PropTypes.number.isRequired,
      verification: PropTypes.shape({
        verified: PropTypes.bool.isRequired
      }).isRequired
    }).isRequired.isRequired,
    html_url: PropTypes.string.isRequired,
    author: PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired
    })
  }).isRequired
}

export default Commit
