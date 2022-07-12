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
const msgNoSendIt=async(adress,subject,bodycontent)=>{
    try {
            const sqlCommand= 'INSERT INTO nosend(addressee,subject,bodycontent) VALUES($1,$2,$3)'
            const dataMsg=[adress,subject,bodycontent]
            const res = await dataBaseRequire.query(sqlCommand,dataMsg)
            console.log(res.command)
        } catch (error) {
            console.log(error)
    }
}
const dataNoSend=async()=>{
    try {
        const sqlCommand= 'SELECT * FROM nosend '
        const response= await dataBaseRequire.query(sqlCommand)
        return response.rows
    } catch (error) {
        console.log(error)
    }
}

const deleteMsgSend=async(dataMsg)=>{
    try {
        const bodyMsg=[dataMsg]
        const sqlCommandMove='DELETE FROM inbox WHERE addressee=$1'
        const firstResponse= await dataBaseRequire.query(sqlCommandMove,bodyMsg)
         console.log(firstResponse.command)
        // verifico que elimina la fila
    } catch (error) {
            console.log(error)
    }
}

module.exports={
    putMsg,
    allDataMsg,
    msgNoSendIt,
    dataNoSend,   
    deleteMsgSend
}