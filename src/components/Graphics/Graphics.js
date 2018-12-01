import * as React from 'react';
import { connect } from 'react-redux';
import { Segment, Grid } from 'semantic-ui-react';
import { fetchCommitsRequest } from './actions';
import styled from 'styled-components';

const Container = styled.div`
  height: '100vh',
  fontSize: '24px'
  border: 1px solid green;
`;

export class Graphics extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCommits();
  }

  render() {
    return (
      <Container>
        <Grid centered columns={2} verticalAlign="middle">
          <Grid.Column textAlign="center">
            {this.props.commits.data.map((d, i) => (
              <div key={i}>{d.sha}</div>
            ))}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  commits: state.commits
});

const mapDispatchToProps = dispatch => ({
  getCommits: () => dispatch(fetchCommitsRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Graphics);
