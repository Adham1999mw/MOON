import React, { useState } from "react";
import styles from './Nav.module.css'
import { NavLink } from "react-router-dom";


const Nav = ()=>{
    const [stat , setstat] = useState({isclicked:"home"})

    const val = (e)=>{
        setstat(stat =>{
            return({
                ...stat,
                isclicked:e.target.id
            })
        })
    }

    return(
        <div className={styles.container} >
            <div className={styles.logo}>
            </div>
            <div className={styles.navparent}>
                <ul>
                    <NavLink exact to="/" ><li onClick={(e)=>val(e)} id="home"  className={"home"===stat.isclicked?styles.lineplus:styles.line} >00 Home</li></NavLink>
                    <NavLink to="/destination"><li  onClick={(e)=>val(e)} id="dest" className={"dest"===stat.isclicked?styles.lineplus:styles.line}>01 Destination</li></NavLink>
                    <NavLink  to="/Crew"><li onClick={(e)=>val(e)} id="crew" className={"crew"===stat.isclicked?styles.lineplus:styles.line}>02 Crew</li></NavLink>
                    <NavLink  to="/Technology"><li onClick={(e)=>val(e)} id="tech" className={"tech"===stat.isclicked?styles.lineplus:styles.line}>03 Technology</li></NavLink>
                </ul>
            </div>
        </div>
    )
}


export default Nav