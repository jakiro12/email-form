import {useNavigate} from 'react-router-dom';
import '../App.css'
import styled from 'styled-components'

function WrongData(){
   const navigate =useNavigate()
    return(<div className='wrong'>
        Invalid Values
        <Button onClick={()=>navigate(-1)}>
        Back
        </Button>
    </div>)
}
export default WrongData

const Button = styled.button`
width: 60px;
margin-left: 50%;
border: 1px solid blue;
border-radius: 2px;
`