const {Pool}= require('pg');

const conectValues={
    user:'postgres',
    host:'localhost',
    password:'kakashi12',
    database:'lauta'
}

const dataBaseRequire= new Pool(conectValues)

const allDataMsg=async()=>{
   const response= await dataBaseRequire.query('SELECT * FROM inbox');
    //console.log(res.rows)    
    return response.rows
}



const putEmails=async(email,pass)=>{
   try{ const text= 'INSERT INTO users (email,password) VALUES($1,$2)'
    const newSing= [email,pass]
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
const putMsg=async(adress,subject,bodycontent)=>{
    try{ const text= 'INSERT INTO inbox  VALUES($1,$2,$3)'
     const newSend= [adress,subject,bodycontent]
     const res=  await dataBaseRequire.query(text,newSend) // comando de query luego el valor
     console.log(res.command)
    
    }
     catch(e){
         console.log(e)
     }
 }
allDataMsg()

module.exports={
    putMsg,
    allDataMsg
}