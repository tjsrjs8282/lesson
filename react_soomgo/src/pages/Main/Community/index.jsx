import React from 'react'
import Title from '../../../components/title/Title'
import $ from './community.module.scss'
import CommunityLeft from './CommunityLeft'
import CommunityRight from './CommunityRight'
import luck from '../../../assets/communityImage/1.webp'
import law from '../../../assets/communityImage/2.webp'
import MoreBtn from '../../../components/button/MoreBtn'

const communityLeftDummy = [
    {
        name:"고수찾아요",
        title:"포르쉐 파나메라 사이드미러 수리여ㅠㅠ",
        content:"파나메라 14년식 사이드미러 수리나 교체 재고있는분 제발 ㅜㅜ 내일 수리가능한 사람 누구없나요.",
        view:935,
        comment: 3,
        link:"/",
    },
    {
        name:"고수찾아요",
        title:"제품 누끼 따주실 외주업에 구합니다.",
        content:"제품 및 연출컷 수정을 위한 누끼 & 패스 작업 진행해주실 외주업체 구합니다.",
        view:654,
        comment: 15,
        link:"/",
    },
    {
        name:"얼마에요",
        title:"다용도실 샷시 유리 교체 비용",
        content:"다용도실로 나가는 슬라이드문 유리가 파손되어 교체를 받아야 하는",
        view:495,
        comment: 4,
        link:"/",
    },
]

const communityRightDummy = [
    {
        name:"스와힐리어 과외",
        title:"숨고가 준비한 오늘의 운세!",
        author:"Soomgo",
        link:"/",
        image:luck,
    },
    {
        name:"종합 법률 상담",
        title:"층간 소음 주거 침입, 대응방안은?",
        author:"캡틴법률사무소",
        link:"/",
        image:law,
    },
]

const Community = () => {
  return (
    <div className={$.communityWrap}>
        <div className={$.communityBox}>
            <Title title="숨고 커뮤니티에 물어보세요"/>
            <MoreBtn title="상품 더보기" link="/" class="communityMoreBtn"/>
            <div className={$.communityCont}>
            <ul>
                {communityLeftDummy.map((data)=>(
                <CommunityLeft name={data.name} title={data.title} content={data.content} view={data.view} comment={data.comment} link={data.link}/>     
                ))}
                </ul>
                <ul>
                {communityRightDummy.map((data)=>(
                    <CommunityRight name={data.name} title={data.title} author={data.author} image={data.image}/>
                ))}
                </ul>
            </div>

            


        </div>

    </div>
  )
}

export default Community