import React from "react"

export default function Info() {
    return (
        <div className="info-card card">
            <img src="../Images/my-pic.jpg"  className="info-img"/>
            <div className="card--container">
                <h1 className="info--name">Ajewole Seyi</h1>
                <h3 className="info--title">Frontend Developer</h3>
                <a className="info--site" href="#">Seyitofunmi.website</a>
                <div className="info--btn-section">
                    <button className="info--btn-email">
                        <img className="info--btn-email-img" src="../Images/Mail.svg" />Email
                    </button>
                    
                </div>
            </div>
            
            
            
        </div>
        

            
    )
}