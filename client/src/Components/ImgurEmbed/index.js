/* eslint-disable react/prop-types */
import React from 'react'
import useScript from '../../utils/useScript'
export default function ImgurEmbed (props) {
  useScript('https://s.imgur.com/min/embed.js')
  return <blockquote className="imgur-embed-pub" lang="en" data-id={props.data_id} ><a href={props.src}>Found a kitten</a></blockquote>
}
