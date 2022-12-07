import React from 'react'
import $ from './button.module.scss'
import { Link } from 'react-router-dom'

const MoreBtn = ({link, title}) => {
  return (
    <Link to={link} className={$.moreBtn}>{title}</Link>
  )
}

export default MoreBtn