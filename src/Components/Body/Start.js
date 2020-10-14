import React, { useState, useEffect } from "react"

const Start = () => {
    var [name, setEffect] = useState("");
    var [will, setWill] = useState("")

    var index = 0;
    var counter = 0;
    const text = "Vinícius Castelani";
    const typeWriter = () => {
        if (index < text.length) {
            setEffect(name += text.charAt(index))
            index++
            setTimeout(() => { typeWriter() }, 100)
        }
    };

    const handleWills = () => {
        const wills = ["better", "active", "life changing", "happy", "fulfilled", "important", "commited", "trustworthy", "capable", "helpful"]
        if (counter < wills.length) {
            setWill(wills[Math.floor(Math.random() * wills.length)])
            counter++
            setTimeout(() => { handleWills() }, 2000)
        }
    }

    useEffect(typeWriter, [])
    useEffect(handleWills, [])

    return (
        <div className="page__section">
            <div className="container flex__row align__center">
                <div>
                    <p className="font__ibmplexsans font__light textcolor__white text__center size__title">
                        <span className="">{name}</span>
                    </p>
                    <p className="font__ibmplexsans  textcolor__white text__center size__paragraph padd__16">
                        <span>Willing to be</span> {will}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Start