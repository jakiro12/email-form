const express= require('express')
const app= express()
const cors=require('cors')

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

   
})

app.listen(3001)
console.log('server 3001')