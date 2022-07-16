const express= require('express')
const app= express()
const cors=require('cors')
const {putMsg,allDataMsg,msgNoSendIt,dataNoSend,deleteMsgSend,putEmails,allEmailsData,deleteFromInbox}= require('../consultasSQL') // esto pasa con modules exports :D
//middlewares-- se ejecutan antes de llegar a las rutas :D
app.use(express.json()) //convierte datos para usar en JS
// app.use(express.urlencoded({extended:false})) //para cuando llegan datos de un formulario los convierte a un objeto
//el extended false es para decir que solo aceptare datos simples como texto
app.use(cors())

let datas= []
app.get('/',(req,res)=>{
    res.send('hi')
})
app.post('/data',(req,res)=>{
   
   let values= datas.concat(req.body)
    console.log(values)
    let manageIt=values
    let information= values[0].info
    const noDestination = manageIt.filter(e=> e.info.destination === '')
    if(noDestination[0]){
        msgNoSendIt(information.destination,information.subject,information.bodyText)
    }else{
        putMsg(information.destination,information.subject,information.bodyText)
    }
  //  putMsg(manageIt.destination,manageIt.subject,manageIt.bodyText)
   
})
app.get('/msginbox',async(req,res)=>{
    const values= await allDataMsg()
    res.json(values)
    
})
app.post('/validusers',async(req,res)=>{   
    const emailData=req.body.created
    console.log(emailData)
    putEmails(emailData.newEmail,emailData.newPassword)
})
app.get('/garbage',async(req,res)=>{
    const noSendMsgs= await dataNoSend()
    res.json(noSendMsgs)
})
app.post('/deletedata',async(req,res)=>{   
    const allMsg=req.body.command
    if(allMsg){
        deleteMsgSend(allMsg.addressee)
        msgNoSendIt(allMsg.addressee,allMsg.subject,allMsg.bodycontent)
        console.log(allMsg)}
})
app.get('/emailsvalue',async(req,res)=>{
    const dataEmails= await allEmailsData()
    res.json(dataEmails)
})
app.post('/resenddata',async(req,res)=>{
    const msgReSend= req.body.command
    if(msgReSend){
        deleteFromInbox(msgReSend.addressee)
        putMsg(msgReSend.addressee,msgReSend.subject,msgReSend.bodycontent)
        
    }
    console.log(req.body.command)
})
app.listen(3001)
console.log('server 3001')