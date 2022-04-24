
import styles from './techfun.module.css'
import dta from '../home/data.json'
import { useState } from 'react'
import '../assets/technology/image-launch-vehicle-portrait.jpg'
import '../assets/technology/image-space-capsule-portrait.jpg'
import '../assets/technology/image-spaceport-portrait.jpg'

const Techfun = ()=>{
    const [state,setstate] = useState({
        img:'../assets/technology/image-launch-vehicle-portrait.jpg',
        name: "Launch vehicle",
        isclicked:'Launch vehicle',
        id:"",
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    })
    const val = (e)=>{

        dta.technology.map(ele=>{
            if(e.target.id===ele.name){
                setstate(()=>{
                return({
                    name: ele.name,
                    description:ele.description,
                    isclicked:e.target.id                    
                })
                    
                })
            }
        })
        if(e.target.id==='Launch vehicle'){
            setstate((state)=>{
                return({
                    ...state,
                    img:'../assets/technology/image-launch-vehicle-portrait.jpg'

                })
            })
        }
        else if(e.target.id==='Spaceport'){
            setstate((state)=>{
                return({
                    ...state,
                    img:'../assets/technology/image-space-capsule-portrait.jpg'
                })
            })
        }
        else if(e.target.id==='Space capsule'){
            setstate((state)=>{
                return({
                    ...state,
                    img:'../assets/technology/image-spaceport-portrait.jpg'
                })
            })
        }
        setstate(state =>{
            return({
                ...state,
            })
        })
        console.log(state)
    
    }




    return(<div className={styles.techfun}>
        <div className={styles.cirinfo}>
            <div className={styles.allcirs}>
                <div id='Launch vehicle' onClick={val} className={'Launch vehicle'=== state.isclicked ? styles.circlesplus :styles.circles}>1</div>
                <div id='Spaceport' onClick={val} className={'Spaceport'=== state.isclicked ? styles.circlesplus :styles.circles}>2</div>
                <div id='Space capsule' onClick={val} className={'Space capsule'=== state.isclicked ? styles.circlesplus :styles.circles}>3</div>
            </div>
            <div className={styles.texttech}>
                <p>THE TERMINOLOGY ...</p>
                <h1>{state.name}</h1>
                <p>{state.description}</p>
            </div>
            <div>
                <img src={state.img} alt="vechile"></img>
            </div>
        </div>
    </div>)
}

export default Techfun