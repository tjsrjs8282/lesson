import React from 'react'
import Menu from './Menu';
import $ from './RightMenu.module.scss'

const menuName = [
  {
    name : "받은요청",
    link : "request",
  },
  {
    name : "바로견적",
    link : "estimate",
  },
  {
    name : "채팅",
    link : "chatting",
  },
  {
    name : "프로필",
    link : "profil",
  },
]
const RightMenu = () => {
  return (
    <div className={$.menuWrap}>
      <ul>
        {menuName.map(list => (
          <Menu name={list.name} link={list.link}/>
        ))}
      </ul> 
    </div>
  )
}

export default RightMenu