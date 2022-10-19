import React from "react";
import './hot.css'



export const Hot =()=>{

    return (
        
            <section>
            <h3 className="h3">Whats hot</h3>

            <article className="article2" style={{padding: '3rem', margin: '1rem'}}>
                <div className="activities"> 
                    <h4>
                        Recent ativites
                    </h4>
                    <button className="button"> Today <img src='images\Vector (8).png' alt=""/>  </button>
                    
                </div>
                <div style={{borderLeft: '1px solid #D6D6D6'}}>


                            <Logging min='5 mins ago' log='You just logged into Peeps DB'/>
                        <Logging min='3 hrs ago' log='Rick just completed the onboarding to Peeps DB as a Freelancer'/>
                    <Logging min='4 hrs ago' log='Iben just added a new Work item to Archie on  Ado work space'/>

                </div>
        


            </article>

            




        </section>

        


    )



}

const Logging =(props)=>{

    const styles = {
        marginLeft: '-28px'
    }
    return ( 
        <div >
        <article className="article3" >
            <div className="logo" >
                <img className="image" style={styles} src='images\Ellipse 2713.png' alt=""/>
                <img className="img1" src='images\Vector (6).png' alt="" style={styles}/>

            
            </div>
            <div>
                <p className="min">{props.min} </p>
                <p className="log"> {props.log} </p>

            </div>


        </article>
        </div>

    )

}