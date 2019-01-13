import * as React from 'react';
import {connect} from 'react-redux';
import Form from './components/Form';

import Dashboard from './components/Dashboard'
import Error from './components/Error';
import Loader from './components/Loader';

const App = ({commits}) => {
  return (
    <div className="ui container">
      <div className="ui center aligned container">
        <h1 >Github repository commits App</h1>
        <Form />
      </div>
      <div>
        {commits.error && !commits.fetching ? <Error error={commits.error}/> : null}
        {commits.fetching && <Loader />}
        {commits.data.length > 0 && !commits.fetching && !commits.error ? <Dashboard commits={commits.data}/> : null}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  commits : state.commits,
})

export default connect(mapStateToProps)(App)


// 
