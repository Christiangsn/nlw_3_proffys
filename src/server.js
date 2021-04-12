//servudir

const express = require('express')
const server = express()
const { pageLanding,  pageStudy, pageGiveClasses, saveClasses } = require('./pages') // importar objetos da pagina page.js

const nunjucks = require('nunjucks')    //importar o nunjucks para manipulalo

nunjucks.configure('src/views',
    {
        express: server,
        noCache: true,
    }

)
server

//receber os dados do req.body
.use(express.urlencoded({ extended: true}))  //mudar dados da url, desconder os dados enviados fo formulario
//configuração de arquivo estaticos(css, scripits, imagens, etc)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding) // => é o mesmo function só que curta
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)    //express é função //listen é ouvir