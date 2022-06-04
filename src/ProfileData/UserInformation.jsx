
import {useState} from 'react';
import ReactHowler from 'react-howler';

const UserInformation = () => {
  const[play,setPlay]=useState(false)
  const[color,setColor]=useState('red')

  function playCoin(){
    setPlay(true)
    setColor('blue')
  }
  function pauseCoin(){
    setPlay(false)
    setColor('red')
  }
 return (<>
  <ReactHowler
  src='http://www.sonidosmp3gratis.com/sounds/mario-coin.mp3'
  playing={play}
  loop={false}
  
/>
<button onClick={playCoin}>Play</button>
<button onClick={pauseCoin}>Pause</button>
<div style={{background:color}}>hola</div>
</>
 )
}
export default UserInformation

