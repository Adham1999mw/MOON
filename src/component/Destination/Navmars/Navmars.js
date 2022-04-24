
import React, { useState } from "react";
import ap from  './navmars.module.css'
import dta from '../../home/data.json'
import './assets/destination/image-moon.png'
import  './assets/destination/image-mars.png'
import  './assets/destination/image-europa.png'
import  './assets/destination/image-titan.png'







const Navmars = ()=>{
    const [St,setSt] = useState({
        isclicked:"Moon",
        name:"Moon",
        distance: "384,400 km",
        travel: "3 days",
        img:'./assets/destination/image-moon.png',
        images :['./assets/destination/image-moon.png','./assets/destination/image-mars.png','./assets/destination/image-europa.png','./assets/destination/image-titan.png'],
        description:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
    });



    const val =(e)=>{

        dta.destinations.map(ele=>{
            if(e.target.id===ele.name){
                // console.log(ele.name);
                // return(ele.name)
                setSt(()=>{
                    return {
                        name:ele.name,
                        distance: ele.distance,
                        travel: ele.travel,
                        description:ele.description
                        // isclicked:e.target.id

                    }
                })
                
            }

        })

        if(e.target.id===String("Moon")){
            setSt((stat)=>{
                return{
                    ...stat,
                    img:'./assets/destination/image-moon.png'
                }
            })
    
        }
        
        else if(e.target.id===String("Mars")){
            setSt((stat)=>{
                return{
                    ...stat,
                    img:'./assets/destination/image-mars.png'
                }
            })
    
        }
        else if(e.target.id===String("Europa")){
            setSt((stat)=>{
                return{
                    ...stat,
                    img:'./assets/destination/image-europa.png'
                }
            })
    
        }
        else if(e.target.id===String("Titan")){
            setSt((stat)=>{
                return{
                    ...stat,
                    img:'./assets/destination/image-titan.png'
                }
            })
    
        }
        setSt(stat =>{
            return {
                ...stat,
                isclicked:e.target.id
            }
        })
        
    console.log(St)

    }




return (
    <>
<div id={ap.earths} >
    <ul>
        <li id="Moon" className={"Moon"===St.isclicked ?ap.lineplus:ap.line}  onClick={val} >MOON</li>
        <li id="Mars" className={"Mars"===St.isclicked ?ap.lineplus:ap.line}  onClick={val} >MARS</li>   
        <li id="Europa" className={"Europa"===St.isclicked ?ap.lineplus:ap.line}  onClick={val} >EUROPA</li>
        <li id="Titan" className={"Titan"===St.isclicked ?ap.lineplus:ap.line}  onClick={val}>TITAN</li>
    </ul>
</div>


    <div className={ap.phoinfo}>
            <div className={ap.pho}>
            <img src={St.img}   />
            </div>
            <div className={ap.info}>
                <div><h1>{St.name.toUpperCase()}</h1></div>
                <div  className={ap.pp}><p>{St.description}</p></div>
                <div className={ap.dt}>
                    <div>
                        <p>AVG. DISTANCE</p>
                        <p>{St.distance}</p>
                    </div>   
                    <div>
                        <p>EST. TRAVEL TIME</p>
                        <p>{St.travel}</p>
                    </div>  
                </div>  

            </div>
        </div>
</>

)}


export default Navmars