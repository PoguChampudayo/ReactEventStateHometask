import React from 'react'
import 'material-icons/iconfont/material-icons.css';
export const IconSwitch = ({icon, onSwitch}) => {
    
  return (
    <button onClick={onSwitch}> <span className="material-icons">{icon}</span></button>
  )
}
