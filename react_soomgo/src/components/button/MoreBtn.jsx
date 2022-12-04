import React from 'react'
import $ from './button.module.scss'
import { Link } from 'react-router-dom'

const MoreBtn = ({link}) => {
  return (
    <Link to={link} className={$.moreBtn}>상품 더보기</Link>
  )
}

export default MoreBtn