import React from 'react'
import $ from './title.module.scss'
const Title = ({title}) => {
  return (
    <div className={$.title}>{title}</div>
  )
}

export default Title