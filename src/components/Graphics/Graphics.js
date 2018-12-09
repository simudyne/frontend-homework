import * as React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { fetchCommitsRequest } from './actions';
import styled from 'styled-components';
import Chart from '../Chart';

const Container = styled.div`
  height: '100vh';
  font-size: '24px';
`;

export class Graphics extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCommits();
  }

  render() {
    const { commits } = this.props;
    const data = {
      children: [
        { id: 1, title: 'oneField', size: 150, g: 80 },
        { id: 2, title: 'Teaser', size: 30, g: 50 },
        { id: 3, title: 'Crazy', size: 70, g: 80 }
      ]
    };

    const commitData =
      commits &&
      Object.entries(commits).map((data, idx) => {
        return (
          <div key={idx} data={idx}>
            {data[0]}
            {data[1]}
          </div>
        );
      });

    return (
      <Container>
        <Grid centered columns={2} verticalAlign="middle">
          <Grid.Column textAlign="center">
            {/* <Chart data={commits} height={400} width={400} /> */}
            <Chart commits={commits} data={data} height={500} width={600} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    commits: state.commits.data,
    dates: []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCommits: () => dispatch(fetchCommitsRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Graphics);
