import React from 'react';

const Projects = () => {
    return (
        <div className="page__section">
            <div className="container flex__column align__center">
                <div className="mgb__32">
                    <p className="font__ibmplexsans textcolor__white">
                        Conheça alguns highlights:
                    </p>
                </div>
                <div className="flex__row">
                    <a href="https://www.ibm.com/events/br/pt/ibm-play/" target="_blank" rel="noopener noreferrer">
                        <div className="proj">
                            <p className="font__ibmplexsans textcolor__white">
                                IBM <b>Play</b>
                            </p>
                            <img src={require("../../assets/arrow-20-48.png")} alt="" className="chevron__right" />
                        </div>
                    </a>
                    <a href="https://www.ibm.com/events/br/pt/changeexperience/" target="_blank" rel="noopener noreferrer">
                        <div className="proj">
                            <p className="font__ibmplexsans textcolor__white">
                                IBM <b>Change Experience</b>
                            </p>
                            <img src={require("../../assets/arrow-20-48.png")} alt="" className="chevron__right" />
                        </div>
                    </a>
                </div>
                <div className="flex__row">
                    <a href="https://openbook.now.sh/" target="_blank" rel="noopener noreferrer">
                        <div className="proj">
                            <p className="font__ibmplexsans textcolor__white">
                                Openbook
                        </p>
                            <img src={require("../../assets/arrow-20-48.png")} alt="" className="chevron__right" />
                        </div>
                    </a>
                    <div className="proj">
                        &nbsp;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;