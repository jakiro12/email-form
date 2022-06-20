const {Pool}= require('pg');

const conectValues={
    user:'postgres',
    host:'localhost',
    password:'kakashi12',
    database:'lauta'
}

const dataBaseRequire= new Pool(conectValues)

const prueba=async()=>{
try{{   const res= await dataBaseRequire.query('SELECT * FROM users');
    console.log(res.rows)}
}
catch(e){
    console.log(e)
}}


const putEmails=async()=>{
   try{ const text= 'INSERT INTO users (email,password) VALUES($1,$2)'
    const newSing= ['elias','1234']
    const res=  await dataBaseRequire.query(text,newSing)
    console.log(res.command)}
    catch(e){
        console.log(e)
    }
}
const deleteColumn= async()=>{
    try{
        const deleteOrder= 'DELETE FROM users WHERE email=$1'
        const valueToDelete=['elias@hotmail.com']
        const deleteIt= await dataBaseRequire.query(deleteOrder,valueToDelete)
        console.log(deleteIt) //para verificar que funciona el Delete :D
    }
    catch(e){
        console.log(e)
    }
}

prueba()