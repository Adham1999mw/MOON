import React from "react";
import styles from './Home.module.css'


const Home = ()=>{
    return(
        <div className={styles.homeall}>
        <div className={styles.hometext}>
            <p>
            SO, YOU WANT TO TRAVEL TO
            <span>SPACE</span> 
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
        </div>
        <div className={styles.exp}>
            <h3>Explore</h3>
        </div>
    </div>
    )
}

export default Home