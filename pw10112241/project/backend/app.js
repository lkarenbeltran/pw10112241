let express = require ('express');
let mysql = require('mysql');
let cors = require ('cors');

let app = express();
app.use(express.json());
app.use(cors());

//coneccion a MySQL
    let conexion = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password:'',
        database: 'pwdata',
        port: '3306'
    });

//nos conectamos a  MySQL
conexion.connect(function(error){
if(error){
    throw error;
}
console.log("conectado a la base de datos");
});

//rutas de acceso
app.get ("/", function (req, res){
res.send("ruta de inicio");
});

//Seleccionamos todos los clients
app.get('/api/clientes', (req,res) =>{ 
    conexion.query('SELECT * FROM clientes',(error, tuplas)=>{
    if(error){
        throw error;
    } else{
        res.send(tuplas);
    }
})
});

//encender servidor
let puerto = 3000;
app.listen(puerto, function(){
    console.log("servidor escuchando puerto " + puerto);

});