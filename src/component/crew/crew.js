import styles from './crew.module.css'
import Crewfun from './crewfun'


const Crew =()=>{
    return(
        <div className={styles.all}>
        <div className={styles.text}>
                <p className={styles.sp}> <span >02</span> PICK YOUR DESTINATION</p>
        </div>
        
        <Crewfun />

        </div>
    
    )
}

export default Crew

