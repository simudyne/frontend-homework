import * as React from 'react'
import {Image} from 'semantic-ui-react'
import styled from 'styled-components'

const CommitterText = styled.div`
  color: #586069;
  font-size: .8rem;
`

export const Committer = ({author, committer, commit}) => {

  const getAvatar = (prop = author) => (
    <CommitterText>
      <Image src={prop.avatar_url} avatar />
      <a href={prop.html_url} target="_blank">{prop.login}</a>
    </CommitterText>
  )

  if (author)
    return getAvatar()

  if (committer)
    return getAvatar(committer)

  const authored = <a href={`mailto:${commit.author.email}`}>{commit.author.name}</a>
  const committed = <a href={`mailto:${commit.committer.email}`}>{commit.committer.name}</a>
  const avatarUrl = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png'
  return <CommitterText>
    <Image src={avatarUrl} avatar />
    {authored} authored and {committed} committed
  </CommitterText>;
}
