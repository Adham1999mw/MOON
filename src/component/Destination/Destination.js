import React, { Component } from "react";
import styles from './Destination.module.css'
import data from '../home/data.json'
import Navmars from "./Navmars/Navmars";





const Destination= ()=>{



    return(
        <div className={styles.all}>
        <div className={styles.text}>
                <p className={styles.sp}> <span >01</span> PICK YOUR DESTINATION</p>
        </div>


        <Navmars />


        


        </div>
    )
}

export default Destination