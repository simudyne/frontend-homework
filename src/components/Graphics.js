import * as React from 'react'
import { Container } from 'semantic-ui-react'
import EmptyState from "../containers/EmptyState"
import Spinner from '../containers/Spinner'

export const Graphics = ({data}) => (
  <Container>
    <Spinner/>
    <EmptyState />
      {!!data.length && data.map((d, index) => (
        <div key={index}>
          <div><span><h3>{index}</h3></span>{d.sha}</div>
        </div>
      ))}
  </Container>
)
