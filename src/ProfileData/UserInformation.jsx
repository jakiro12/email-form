import styled from "styled-components";



const UserInformation = () => {
 


 
 return (<Container>
  <div className="info" >Formulario para cambiar la informacion personal

  </div>
 
  <FormNewData>
    <div>
    <input type="text" placeholder="nombre" />
    <input type="text" placeholder="telefono"/>
    <input type="text" placeholder="cargo"/>
    <input type="text"  placeholder="ubicacion"/>
   <button type="submit" className="btn">Cambiar</button>
    </div>
  </FormNewData>
  
</Container>
 )
}
export default UserInformation

const FormNewData= styled.form`
   
   margin-top: 15px;
   div{
    width: 400px;
   }
   input{
    display: grid;
    margin-top: 5px;
    width: 50%;
    background: white;
    outline: 2px solid black;
    margin-left: 25%;
   }
   .btn{
    cursor: pointer;
    background: none;
    border: 2px solid blue;
    height: 25px;
    width: 92px;
    outline: 2px solid blue;
    outline-offset: -2px;
    transition: outline-offset 210ms ease;
   }
   .btn:hover{
    outline-offset: -5px;
   }
`
const Container= styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  margin-top: 10%;
  height: 50vh;
  border: none;
  box-shadow: 1px 1px 0px #999,
                2px 2px 0px #999,
                3px 3px 0px #999,
                4px 4px 0px #999,
                5px 5px 0px #999,
                6px 6px 0px #999;
  width: 500px;
  margin-left: 30%;
  .info{
    margin-top: 10px;
  }
`
