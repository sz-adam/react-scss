import React from 'react'
import '../styles/Exercise.scss'



import Fekvő from '../images/fekvő.jpg'
import Huzockodas from '../images/huzockodás.jpg'
import Tolockodas from '../images/tolockodas.png'
import Evezes from '../images/evezes.jpg'
import Lab from '../images/lab.jpg'
import Guggolas from '../images/guggolás.jpg'



function Exercise() {

  const text =[
    {
      id:1,
      title:'Könnyített fekvőtámasz ',
      text:' Elárulunk egy „„titkot”” ezzel kapcsolatban: minél magasabban van a kéz a lábadhoz képest, annál könnyebb a fekvőtámaszt végrehajtani. Ugyanakkor akármilyen nehézségi szintet választasz, figyelj rá, hogy egyenletes tempóban végezd a karhajlítás-nyújtást (tehát leengedést és a kitolást is), különben elmarad az optimális erőfejlődés.',
      src:Fekvő
    },

    {
      id:2,
      
      title:'Könnyített húzódzkodás',
      text:' Ez főleg akkor tud nagyon hasznos lenni, ha nem tudsz húzódzkodni, ez ugyanis egy tökéletes rávezető, vagyis inkább előkészítő gyakorlat. Törekedj arra, hogy a felugrás után a behajlított karú testhelyzetből minél kontrolláltabban engeded le magad a talajra.',
      src:Huzockodas
    },

    {
      id:3,
      
      title:' Könnyített tolódzkodás',
      text:' Ülj le egy pad szélére, kezeid olyan közel legyenek a törzsedhez, mintha majdnem ráülnél a hüvelykujjaidra. Tehát szorosan melletted vannak a kezeid, az ujjaid előre mutatnak, majd kicsit tedd előrébb a lábaidat, derékszögben, talppal a földre. A leengedést úgy végezd, mintha simogatnád a hátad a paddal - ne előre-hátra lökdösd magad! A könyökök hátrafele, párhuzamosan mutassanak, ne engedd ki oldalra őket, mikor kinyomod magad. Figyelj rá, hogy ne akaszd ki teljesen a könyököd, az maradjon finoman rogyasztva.',
      src:Tolockodas
    },

    {
      id:4,
      
      title:' Invertált evezés',
      text:'  Ezt alsó és felső fogással is csinálhatod, a lényeg, hogy (egyenes törzzsel) húzd fel magad addig, hogy a mellkasod megérintse a rudat, majd engeded vissza magad kontrolláltan.',
      src:Evezes
    },

    {
      id:5,
      
      title:' Lábemelés függésben',
      text:'   Törekedj arra, hogy a felhúzott lábaddal érintsd meg a mellkasod, ha nem megy, akkor próbáld meg addig emelni, hogy a törzsed és a combod derékszöget zárjon be.',
      src:Lab
    },

    {
      id:6,
      
      title:' Az egylábas guggolás',
      text:'  Az egylábas guggolás nem könnyű, hiszen az erő mellett a jó koordinációs képesség is elhanyagolhatatlan hozzá. A korlátot fogva viszont kapsz egy kis segítséget – szó szerint kapaszkodót –, ami jócskán megkönnyíti a dolgod.',
      src:Guggolas
    },


    
  ]


  return (
    <div> 
    {
      text.map((title,id) =>(
        <div className='exerciseContainer'  key={id}>      
        <div className='exerciseTitle' ><h1> {title.title}</h1></div>
          <div className='exerciseContent'>            
            <div className="exerciseText">
             {title.text}
            </div>
            <div className='exerciseImage'>
              <img src={title.src} alt="" />
            </div>
          </div>
          </div>
      ))
    }    
   </div>
  )

}

export default Exercise