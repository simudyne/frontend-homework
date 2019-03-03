import * as React from 'react'

import { Graphics } from './containers/Graphics'
import { Layout } from './components/Layout'
import TopMenu from './containers/TopMenu'


export const App = () => {
  return (
    <Layout menu={<TopMenu />} >
      <Graphics />
    </Layout>
  )
}
