import React from 'react'
import '../css/ContactInfo.css';

const ContactInfo = () => {
  return (
      <div>
    <div className='goalWrapper'>
      <item className='goal'>
    비움그리고채움은 과정과 결과에서 고객으로부터 신뢰받는 행정사가 되겠습니다&nbsp;&nbsp;&nbsp;
      <button>CONTACT US &#128193;</button>
      </item>
    </div>
    <div className='contactInfo'>
    <item>COMPANY INFO
        <div>
            상호명 : 선한지도자학교 | 대표 : 장경훈 | 개인정보책임자 : 장경훈
            <br></br>
            책임자 : 장경훈<br></br>
            사업자번호 : 000-00-00000<br></br>
            경기도 수원시 영통구 대학로12, 4층(이의동, 비손프라자)<br></br>
            고객지원 : 문의게시판 또는 Tel : 031-8067-5770 / Fax : 070-8620-5770<br></br>
        </div>
    </item>
    <item>CONTACT US<br></br>
    <br></br>
    <span>kimck@biumco.or.kr<br></br>
    031. 8067. 5770</span>
    </item>
    <item>SOCIAL<br></br><br></br>
    <img height='40px' width='40px' src='https://cdn-icons-png.flaticon.com/512/1936/1936319.png'></img>&nbsp;&nbsp;
    <img height='40px' width='40px' src='https://cdn.icon-icons.com/icons2/622/PNG/512/youtube-logo_icon-icons.com_57043.png'></img>
    </item>
    
    </div>

    </div>
  )
}

export default ContactInfo
