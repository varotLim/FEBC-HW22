import { useState } from 'react'
import Drinking from './componance/Drinking'
import Theme from './componance/Theme'
function App() {

  const [isToggled,setToggle] = useState(false);

  return (
    <div style={{height:'100%', display:'flex' , flexDirection:'column', justifyContent:'space-between'}}>
      <Drinking isToggled={isToggled} ></Drinking>
      <Theme isToggled={isToggled} setToggle={setToggle}></Theme>

    </div>
  )
}

export default App
