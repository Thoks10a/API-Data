const express = require('express');
const app = express();
const port = 3000;

// Função para obter a data e hora atual de São Paulo
function getCurrentDateTime() {
    const options = {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    const formatter = new Intl.DateTimeFormat([], options);
    return formatter.format(new Date());
}

// Rota para retornar a data e hora atual de São Paulo
app.get('/datetime', (req, res) => {
    const currentDateTime = getCurrentDateTime();
    res.json({ datetime: currentDateTime });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
