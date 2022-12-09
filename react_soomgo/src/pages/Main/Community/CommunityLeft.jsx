import React from 'react'
import $ from './community.module.scss'
import { SlEye,SlSpeech } from "react-icons/sl";
import { Link } from 'react-router-dom';


const CommunityLeft = ({name,title,content,view,comment,link}) => {
  return (
    <li>
        <Link to={link}>
            <p className={$.topicName}>{name}</p>
            <p className={$.curationTitle}>{title}</p>
            <p className={$.curationContent}>{content}</p>
            <div className={$.curationReactions}>
                <span className={$.viewCount}><SlEye/>{view}</span>
                <span className={$.commentCount}><SlSpeech/>{comment}</span>
            </div>
        </Link>
    </li>
  )
}

export default CommunityLeft