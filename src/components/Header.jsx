import '../styles/Header.scss'

import { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"


export default function Header({menu}){ 
    const [Mobile, setMobile] = useState(false) 

    return (
        <div className="navbars">
            <div className="navbar-left"><span className='Street'>Street</span> <span className='Workaut'> Workout</span></div>
            <div className={Mobile ? "navbar-right-mobile" : "navbar-right"} onClick={() => setMobile(false) }> 
                {menu.filter(e => e.menubar === true).map(element => <Link key={element.path} to={element.path}>{element.name}</Link>)}
            </div>
            <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross  className='ImCross'/> : <FaBars className='ImCross' /> }
          </button>
        </div>
    )
}




