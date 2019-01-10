import * as React from 'react'
import { Grid, Container, Header, Form, Message } from 'semantic-ui-react'

import Commit from './Commit'

const style = {
  height: '100vh',
  fontSize: '24px',
  padding: '1rem'
}

export class Graphics extends React.Component {
  constructor(props) {
    super(props)
    this.state = { repository: '' }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  render() {

    const searchForm = (
      <Form onSubmit={this.onSubmit}>
        <Form.Input
          label='Search a repository...'
          type='text'
          name="repository"
          value={this.state.repository}
          onChange={this.onChange}
          loading={this.props.commits.fetching}
          icon='search'
          iconPosition='left'
          placeholder='facebook/react'
          required
        />
      </Form>
    )

    const header = this.props.commits.data && this.props.commits.data.length > 0 &&
      <Header size="medium" textAlign="center">
        Commits on <a href={`https://github.com/${this.props.commits.repository}`}
                      target="_blank">{this.props.commits.repository}</a>
      </Header>

    const data = this.props.commits.error ?
      <Message negative>
        <Message.Header>{this.props.commits.error.message}</Message.Header>
      </Message> :
      this.props.commits.data.map(commit => (
        <Commit key={commit.sha} data={commit} />
      ))

    return (
      <Container>
        <Grid centered columns={1} style={style} verticalAlign="top">
          <Grid.Column>
            {searchForm}
            {header}
            {data}
          </Grid.Column>
        </Grid>
      </Container>
    )
  }

  onChange(event, {name, value}) {
    this.setState({[name]: value})
  }

  onSubmit() {
    console.log(this.state.repository)
    this.props.getCommits(this.state.repository)
  }
}
