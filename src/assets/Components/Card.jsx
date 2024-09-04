// import React from 'react'
import { useState } from "react";
import { GiSharpSmile } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
function Card() {
const [heart, setHeart] = useState(false)
const [count, setCount] =useState(0)

const handleHeart = () => {
    if (!heart) {
        setHeart(true)
        setCount(count +1)
    }

else (
    setHeart(false)
// setCount((c) =>c-1)
)

}

    return (
    <div className="card">
          <span>Patiktukai: </span>

        <div className="card card-header" style={{display:"flex", justifyContent: "center", alignItems: "center", gap: 30}}>
            <GiSharpSmile />
            <p style={{marginTop: 15}}>Please like my dog</p>
        </div>  
        <img src=".\public\Zombatar_1.jpg" alt="" />

        <div className="card-footer">
            {heart ? <FaHeart style={{ fontSize:50, color: "red"}}
             onClick={handleHeart}/> : <FaHeart style={{ fontSize:50}}
            onClick={handleHeart}/>}
        </div>

    
    
    
    
    
    
    
    </div>
   
   


    )
    
}

export default Card;