import React from 'react'
import '../styles/Footer.scss'
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import 'boxicons'

function Footer() {
  return (
    <div className='footer'> 
    <div className='footerContainer'>
        <span>Itt is megtalálhatsz :</span>
        <ul>
            <li>
              <a href="https://facebook.com/"> <BsFacebook /> </a>
         
            </li>

            <li>
              <a href="https://instagram.com/"><BsInstagram /></a>
            
            </li>

            <li>
              <a href="https://twitter.com/"><BsTwitter /></a>
         
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Footer