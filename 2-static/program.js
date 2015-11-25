var porta = process.argv[2];
var pastaArquivosEstaticos = process.argv[3];

var express = require('express');

var app = express();

app.use(
  express.static(pastaArquivosEstaticos, express.static('public'))
);

app.listen(porta);
