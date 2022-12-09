import React from 'react'
import $ from './community.module.scss'
import { Link } from 'react-router-dom';
const CommunityRight = ({name,title,author,link,image}) => {
  return (
    <li className={$.rightList}>
        <Link to={link}>
            <img src={image} alt={image} />
            <div className={$.cardTxtBox}>
                <p className={$.cardTxtName}>{name}</p>
                <p className={$.cardTxtTit}>{title}</p>
                <p className={$.cardTxtAtr}>{author}</p>
            </div>
        </Link>
    </li>
  )
}

export default CommunityRight