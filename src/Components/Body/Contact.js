import React from 'react';

const Contact = () => {
    return (
        <div className="page__section">
            <div className="container flex__row align__center">
                <div className="flex__column align__center">
                    <div className="">
                        <p className="font__ibmplexsans font__light textcolor__white">
                            Quer entrar em contato?
                        </p>
                    </div>
                    <div className="contact__icons">
                        <a href="https://facebook.com/vinicius.castelanidossantos.3/" target="_blank" rel="noopener noreferrer" >
                            <img src={require("../../assets/contact_facebook-3-32.png")} alt="Contato - Facebook" />
                        </a>
                        <a href="https://www.linkedin.com/in/vinicius-castelani-dos-santos-06691213a/" target="_blank" rel="noopener noreferrer" >
                            <img src={require("../../assets/contact_linkedin-3-32.png")} alt="Contato - Linked In" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5511984098261" target="_blank" rel="noopener noreferrer" >
                            <img src={require("../../assets/contact_whatsapp-32.png")} alt="Contato - Whats App" />
                        </a>
                        <a href="mailto:visacastelani@gmail.com" target="_blank" rel="noopener noreferrer" >
                            <img src={require("../../assets/contact_email-5-32.png")} alt="Contato - Email" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact