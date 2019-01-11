import * as React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Segment, Grid, Header, Button, Icon } from 'semantic-ui-react'
import { Committer } from './Committer'

const Commit = ({ data }) => (
  <Segment>
    <Grid centered columns={2} verticalAlign="middle">
      <Grid.Column mobile={16} computer={6}>
        <Header size="tiny">{data.commit.message}</Header>
        <Committer {...data} />
      </Grid.Column>
      <Grid.Column mobile={16} computer={10} textAlign="right">
        {data.commit.verification.verified &&
          <Button basic color='green'>
            Verified
          </Button>}
        <Button
          content='Comments'
          icon='comment'
          label={{ as: 'span', basic: true, content: data.commit.comment_count }}
          labelPosition='right'
        />
        <Button primary>
          <Icon name='copy' />
          {data.sha.substring(0, 7)}
        </Button>
        <Button style={{minWidth: '190px'}}>
          <Icon name='calendar' />
          {moment(data.commit.committer.date).format('LL')}
        </Button>
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
