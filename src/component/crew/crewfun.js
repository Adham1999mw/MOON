import { useState } from "react";
import dta from '../home/data.json'
import styles from './crewfun.module.css'
import '../assets/crew/image-douglas-hurley.png'
import '../assets/crew/image-anousheh-ansari.png'
import '../assets/crew/image-mark-shuttleworth.png'
import '../assets/crew/image-victor-glover.png'


const Crewfun = ()=>{




    const [state,setstate]  = useState({
        isclicked:"Douglas Hurley",
        name:"Douglas Hurley",
        role: "Commander",
        img:'../assets/crew/image-douglas-hurley.png',
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    })


    const val = (e)=>{
        // console.log(dta)
        dta.crew.map(ele=>{
            if(e.target.id===ele.name){
                setstate((state)=>{
                    return({
                        name:ele.name,
                        role: ele.role,
                        bio:ele.bio,
                        isclicked:e.target.id
                    })
                })
            }
        })

        if(e.target.id==="Douglas Hurley"){
            setstate((state)=>{
                return({
                    ...state,
                    img:'../assets/crew/image-douglas-hurley.png'
                })
            })
        }
        else if(e.target.id==="Mark Shuttleworth"){
            setstate((state)=>{
                return({
                    ...state,
                    img:'../assets/crew/image-mark-shuttleworth.png'
                })
            })
        }
        else if(e.target.id==="Victor Glover"){
            setstate((state)=>{
                return({
                    ...state,
                    img:'../assets/crew/image-anousheh-ansari.png'
                })
            })
        }
        else if(e.target.id==="Anousheh Ansari"){
            setstate((state)=>{
                return({
                    ...state,
                    img:'../assets/crew/image-victor-glover.png'
                })
            })
        }
        
        console.log(state)
    }

    return(
        <div  className={styles.www} >
        <div className={styles.allcrew}>
            <div className={styles.role}>
            <h2>{state.role}</h2>
    
            <h1>{state.name}</h1>
            <p>{state.bio}</p>
            </div>
            <div>
                <img src={state.img} alt="person" ></img>
            </div>
        </div>
        
        <div className={styles.allcir}>
            <div id="Douglas Hurley" className={"Douglas Hurley"===state.isclicked?styles.circleplus:styles.circle} onClick={val}>  </div>
            <div  id="Mark Shuttleworth" className={"Mark Shuttleworth"===state.isclicked?styles.circleplus:styles.circle} onClick={val}></div>
            <div  id="Victor Glover" className={"Victor Glover"===state.isclicked?styles.circleplus:styles.circle} onClick={val}></div>
            <div  id="Anousheh Ansari" className={"Anousheh Ansari"===state.isclicked?styles.circleplus:styles.circle} onClick={val}></div>

        </div>

        </div>
    )
}

export default Crewfun