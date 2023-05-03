const express = require('express');
const soap = require('soap');
const urlCorreios = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';
const app = express();

app.get('/pegaCEP/:cep', function(req, res){
    soap.createClient(urlCorreios, (err, client) => {
        if(err) console.log(err);
    
        console.log('OK')
        client.consultaCEP({cep: req.params.cep}, (err,result) => {
            res.send(result)
        })
    })
})


const url2 = 'http://www.dneonline.com/calculator.asmx?wsdl';

app.get('/multiply/:intA/:intB', function(req, res){

    soap.createClient(url2, function(err, client) {
    if (err) {
        console.error(err);
        return;
    }

    client.Multiply({
            intA: req.params.intA,
            intB: req.params.intB
        }, function(err, result) {
            if (err) {
                console.error(err);
                return;
            }

            res.send(result);
        });
    });

})

app.get('/divide/:intA/:intB', function(req, res){
    
    soap.createClient(url2, function(err, client) {
    if (err) {
        console.error(err);
        return;
    }

    client.Divide({
            intA: req.params.intA,
            intB: req.params.intB
        }, function(err, result) {
            if (err) {
                console.error(err);
                return;
            }

            res.send(result);
        });
    });

})



app.listen(3000, function(){
	console.log('Listening to port 3000');
})


