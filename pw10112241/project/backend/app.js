let express = require ('express');
let mysql = require('mysql');
let cors = require ('cors');

let app = express();
app.use(express.json());
app.use(cors());

//rutas de acceso
app.get ("/", function (req, res){
res.send("ruta de inicios");
});

//encender servidor
let puerto = 3000;
app.listen(puerto, function(){
    console.log("servidor escuchando puerto " + puerto);

});