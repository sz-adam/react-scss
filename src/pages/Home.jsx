import React from 'react'
import '../styles/Home.scss';
import image1 from '../images/park/image1.jpg'
import image2 from '../images/park/image2.jpg'
import image3 from '../images/park/image3.jpg'
import image4 from '../images/park/image4.jpg'
import image5 from '../images/park/image5.jpg'

import image7 from '../images/park/kondi.jpg'
import { useState } from 'react'
import Modal from '../components/Modal'

function Home() {
  const images = [image1, image2, image3, image4, image5, image7];

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');


  function handleClick(event) {
    setSelectedImage(event.target.src);
    setOpenModal(true);
  }
  return (
    <div className='homeContainer'>
      <Modal
        selectedImage={selectedImage}
        open={openModal}
        onClose={() => {
          setOpenModal(false)
          setSelectedImage('');
        }}
      />

      <div className='home'>

        <div className='homeTextImage'>
          <div className='homeImagesLogo'></div>
          <div className='homeText'>
            <h1>Friss levegő és mozgás ? </h1>
            <h2> A Street Workoutot neked találták ki , hiszen nem csak a teremben lehet fejlődni </h2>
          </div>
        </div>
        <div className='homeText'>
          <p>Ne feled rendes étrend nélkül semmmire se mész !!</p>

          <p>A street workout-tal olyan előnyekre tehetsz szert, amivel semmilyen más edzésmódszer nem versenyezhet! A megfelelő gyakorlatok alkalmazásával, amely "nemtől, kortól, testsúllytól függetlenül" elkezdhető, egy magasabb erőszínt, állóképesség, hajlékonyság, minőségi izomzat érthető el, minimális testzsírszázalék mellett. Ezen fajta edzésmódszerrel érhetünk el legközelebb a fittség fogalmához! Emellett megerősíti az inakat, izületeket. Aki a saját testét uralni tudja, az a legmagasabb testi-lelki összhangot valósítja meg.</p>
          <p className='homeP'>Előnyei: </p>
          <ul className='homeUl'>
            <li >Kombinálhatod más szabadtéri edzéssel is pl.: futás    </li>
            <li>A testünk mindig velünk van  </li>
            <li>Akkor mész amikor akarsz </li>
            <li>Friss levegőn vagy  </li>
            <li>Bárhol csinálhatod </li>
            <li>Mozogsz</li>
            <li>Ingyenes</li>
          </ul>

        </div>
        <h2 className='homeText'>Nézd meg egy pár képünket: </h2>
        <div className='homeImage'>
          {images.map((element, index) => (
            <div key={index} ><img src={element} onClick={handleClick} /> </div>
          ))}

        </div>

      </div>

    </div>

  )
}

export default Home