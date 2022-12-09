import React from 'react'
import { Link } from 'react-router-dom'
import $ from './LeftMenu.module.scss'

const Menu = ({name, link}) => {
  return (
    <li className={$.list}>
      <Link to={link} className={$.link}>
          {name}
      </Link>
    </li>
  )
}

export default Menu