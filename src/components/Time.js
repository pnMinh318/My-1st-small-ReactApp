//import { useState } from "react"
import React from 'react'
import Clock from 'react-live-clock'
function Time() { //viet nam o timezone GMT-7
    return (
        <div>
            { <Clock format={'dddd | DD-MM-YYYY | HH:mm:ss'} ticking={true} timezone={'Etc/GMT-7'}/> } 
        </div>
    )
}

export default Time



