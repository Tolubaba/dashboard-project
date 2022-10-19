import React from "react";
import ReactDOM from "react-dom";
import './welcome.css'

export const Welcome =()=>{


    return (

    <div className="welcome">
        <h3>
            Welcome Iben,
        </h3>
        <p>You can now see all onboarding information of your organization.</p>

        <div className="account">
            <Accounts img='images\Vector@2x.png' img1='images\Ellipse 2713.png' number='1,015' accounts='Total accounts'/>
            <Accounts img='images\Vector (1).png' img1='images\Ellipse 2713.png' number='72.5k' accounts='Onboarded accounts'/>
            <Accounts img='images\Vector (3).png' img1='images\Ellipse 2713.png' number='650' accounts='Suspended accounts'/>


        </div>

    </div>
        
        
    )
}

const Accounts =(props)=>{
return (
    <article className="article">
        <div className="divimage">
            <img className="img1" src={props.img} alt=""/>
            <img className="image" src={props.img1} alt=''/>
        

        </div>
            
        <div className="numbers">
        <h4>{props.number} </h4>
        <p> {props.accounts}</p>
        </div>

    </article>
)

}