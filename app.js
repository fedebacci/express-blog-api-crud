// COMMENTO NORMALE
// ! COMMENTO ERRORE
// ? COMMENTO DOMANDA
// * COMMENTO HIGHLIGHT
// # COMMENTO WARNING
// - COMMENTO TEXT
// todo COMMENTO TODO





// # EXPRESS (gestione richieste/risposte e middlewares - dependency)

// - EXPRESS Import
// * IMPORTO I PACCHETTI DI EXPRESS INSTALLATI (DOPO AVER FATTO npm i express)
const express = require('express');

// - EXPRESS Express app initialization
// * INIZIALIZZO L'APPLICAZIONE EXPRESS INVOCANDO LA FUNZIONE express()
const app = express();





// # CUSTOM IMPORTS

const { appPort } = require('./data/db');
const { postsRouter } = require('./routers/posts');





// # MIDDLEWARES - "Parti di mezzo" (Funzionalità agg. messe a disposizione da pacchetti di express)

// - .static('foldername = public') => Gestione files statici
// * UTILIZZO MIDDLEWARE STATIC PER METTERE A DISPOSIZIONE LE IMMAGINI DEI POST
app.use(express.static('public'))

// - .json()
// * UTILIZZO MIDDLEWARE JSON PER BODY-PARSING (INTERPRETAZIONE BODY DELLE RICHIESTE DEL CLIENT)
// * NB: OGNI TIPO DI DECODIFICA HA IL SUO MIDDLEWARE, DA AGGIUNGERE SE NECESSARIO
app.use(express.json());





// # ROUTERS
app.use("/posts", postsRouter);





// # ASCOLTO DELLA PORTA DA PARTE DEL SERVER

// - SERVER LISTEN
// * METTO IL SERVER IN ASCOLTO PER LE RICHIESTE SULLA PORTA appPort (Equivale a APP_PORT in .env)
app.listen(appPort, () => {
    console.log(`Server del mio blog in ascolto sulla porta: ${appPort}`);
});