
//import
const express = require('express')
const multer = require('multer')

//Passar storage
const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+'-'+file.originalname)
    }
})

const app = express()
//const upload = multer({ dest: 'uploads/' }) //Configurar onde vai salvar
const upload = multer({ storage }) //Configurar onde vai salvar

//Fazer o view engine em ejs
app.set('view engine', 'ejs')

//Routas, get
app.get('/', (req, res) => res.render('home'))

//post
app.post('/', upload.single('img'),(req, res) => {

    console.log(req.body, req.file)
    res.send('Ok')
})

//Fazer o link/server
app.listen(3000, () => console.log('Running... ...'))
