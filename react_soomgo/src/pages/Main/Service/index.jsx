import React from 'react'
import ServiceList from './ServiceList'
import Title from '../../../components/title/Title'
import SubButton from '../../../components/button/SubButton'
import tutoring from '../../../assets/serviceImages/1.webp'
import personal from '../../../assets/serviceImages/2.webp'
import vocal from '../../../assets/serviceImages/3.webp'
import remodeling from '../../../assets/serviceImages/4.webp'
import MoreBtn from '../../../components/button/MoreBtn'
import $ from './service.module.scss'

const serviceSubList = ["축가는누가하지"  ," 성종적인마케팅하기","나의심리상태" ,"잘나가로고디자인"]
const serviceDummy = [
    {
        title:"영어 과외",
        image:tutoring,
        link:"/tutoring",
        num:"1,000",
    },
    {
        title:"퍼스널트레이닝(PT)",
        image:personal,
        link:"/personal",
        num:"3,000",
    },
    {
        title:"보컬 레슨",
        image:vocal,
        link:"/vocal",
        num:"1,000",
    },
    {
        title:"리모델링",
        image:remodeling,
        link:"/remodeling",
        num:"4,500",
    },
]

const Service = () => {
  return (
    <div className={$.serviceWrap}>
        <div className={$.serviceBox}>
            <Title title="숨고 인기 서비스"/>
            <div className={$.subListBox}>
                <div>
                {serviceSubList.map(list => (
                    <SubButton title={list}/>
                    ))}
                </div>
                <MoreBtn title="상품 더보기" link="/"/>
            </div>
            <ul>
                {serviceDummy.map(list => (
                <ServiceList title={list.title} image={list.image} num={list.num}/>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Service