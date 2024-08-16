import React, { useEffect } from 'react'
import '../style/style.css'
import { WiMoonWaningCrescent4,WiMoonAltFull  } from "react-icons/wi";
interface ThemeProps{
  isToggled: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function Theme({isToggled,setToggle}:ThemeProps) {
  const handleToggle = () => {
    setToggle(!isToggled);
  };

  useEffect(()=> {
    document.body.style.backgroundColor = isToggled ? '#282c34' : '#ffffff';
  },[isToggled]);


  return (
    <div className='buttontheme'>
        <button onClick={handleToggle} 
          style={{
          backgroundColor: isToggled ? '#000000' : '#ffffff',
          color: isToggled ? '#ffffff' : '#000000',
          border: `2px solid ${isToggled ? '#ffffff' : '#000000'}`,
          borderRadius: '5px',
          cursor: 'pointer',
        }}>
          <div style={{display:'flex'}}>
          {isToggled ? <p style={{padding:'3px'}}>DARK</p>  : <p style={{padding:'3px'}}>LIGHT</p>}
          {isToggled ? <WiMoonWaningCrescent4 style={{alignItems:'center',height:'100%',marginTop:'30%'}}/> :<WiMoonAltFull style={{alignItems:'center',height:'100%',marginTop:'30%'}}/>}
          </div>
          
        </button>
    </div>
  )
}

export default Theme