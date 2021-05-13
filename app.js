const express = require( 'express' );
const morgan = require("morgan");
const app = express(); 
const port = 3000

app.use("/", (req, res, next) => {
    console.log("Dentro del primer Middleware")
    next()
})  

app.use('/special', (req, res, next) => {
    console.log("Llegaste a un área especial.")
    next()
})  

app.get("/", (req, res, next) => {
    res.send("WEB:\nHolis")
    next()
})  

app.get("/special", (req, res, next) => {
    res.send("WEB:\nLlegaste a un área especial.")
    next()
})  

app.use(morgan('tiny'))

app.listen(port, function(){
    console.log(`Servidor corriendo en el puerto ${port}`)
});