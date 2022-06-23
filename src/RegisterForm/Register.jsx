import styled from "styled-components"

function Register(){
    return(<>
        <Formik>
        <DiveForm>
            <p>Set up Your account</p>
                <input placeholder="Username"></input>
                <input placeholder="Password"></input>
                <button>Proceed</button>
            </DiveForm>
        </Formik>
    </>)
}
export default Register
const Formik= styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`
const DiveForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    background: #000000CC;
    width: 500px;
    height: 300px;
    outline: 2px solid black;
    p{
        margin-left: 30%;
        color: #fff;
        font-family: "Roboto",-apple-system,"Segoe UI","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif!important;
    }
    input{
        width: 200px;
        height: 35px;
        margin-left: 30%; 
        margin-top:30px ;
        outline: none;
        border: 1px solid black;
        border-radius: 12px;
        background-color: #141820;
        color: #c2c2c2;
        margin-bottom: -10px;
    }
    button{
        margin-left: 30%;  
        width: 204px;
        height: 35px;
        margin-top: 7%;
        border: none;
        border-radius: 12px;
        color: white;
        background: linear-gradient(90deg, rgba(255,0,219,1) 25%, rgba(9,30,121,1) 100%);
    }
`