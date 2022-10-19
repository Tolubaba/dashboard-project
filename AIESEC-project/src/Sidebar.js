import React from "react";
import './sidebar.css'

 export const Sidebar = ()=>{
    return (


    

    <section className="sidesection">

        <div className="sidesectiondiv">

       
        <h2>PeepsDB </h2>
        <Sidework img='images\Iconography.png'  word='Dashboard'/>
        <Sidework img='images\Group (1).png' word='Workspaces'/>
        <Sidework img='images\Group (2).png' word='Logs'/>
        <Sidework img='images\Vector (11).png' word='Users'/>
         </div>
    </section>

    )

}


const Sidework =(props)=>{



    return (
        <article className="sidearticle">
            <div className="side">
                <img src={props.img} alt=''/>
                <h3>{props.word}</h3>
            </div>

        </article>
    )
}