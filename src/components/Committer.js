import * as React from 'react'
import {Image} from 'semantic-ui-react'

const style = {
  color: '#586069',
  fontSize: '.8rem'
}

export const Committer = ({author, committer, commit}) => {

  if (author)
    return <div className="author" style={style}>
      <Image src={author.avatar_url} avatar />
      <a href={author.html_url} target="_blank">{author.login}</a>
    </div>

  if (committer)
    return <div className="committer" style={style}>
      <Image src={committer.avatar_url} avatar />
      <a href={committer.html_url} target="_blank">{committer.login}</a>
    </div>

  const authored = <a href={`mailto:${commit.author.email}`}>{commit.author.name}</a>
  const committed = <a href={`mailto:${commit.committer.email}`}>{commit.committer.name}</a>
  const avatarUrl = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png'
  return <div className="commit" style={style}>
    <Image src={avatarUrl} avatar />
    {authored} authored and {committed} committed
  </div>
}
