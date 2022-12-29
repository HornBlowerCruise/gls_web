import React from 'react';
import '../../css/Home.css';
import movie from '../../video/wave.mp4'
import Summary from './Summary.js'
import Cases from './Cases.js'
import HomeNotice from './HomeNotice'
import HomeNotice2 from './HomeNotice2'
import ContactInfo from '../ContactInfo';

const Home = () => {
  return (
      <div>
          <div className="bg">
            <video 
            muted ={true}
            autoPlay ={true}
            loop ={true}
            playsInline ={true}>
             <source src={movie} type="video/mp4" />
            </video>
    
            <div class="text">
              <div className="firstLine" >환영합니다</div>
              <div className="secondLine" >선한지도자학교</div>
              <div className="thirdLine" >좋은 지도자를 양성하는 학교입니다</div>
              <div className='goIntroButtonWrapper'>
                <button className="goIntroButton">학교소개</button>
              </div>
          </div>
  </div>
  <Summary/>
  <Cases/>
  <HomeNotice/>
  <HomeNotice2/>
  <ContactInfo/>
    </div>
  )
}

export default Home