const express = require("express");
const app = express();

app.use(express.json());

let salas = [];

// Crear sala
app.post("/crear", (req, res) => {
    const { ip, puerto } = req.body;

    salas.push({ ip, puerto });

    console.log("Sala creada:", ip, puerto);
    res.json({ ok: true });
});

// Buscar sala
app.get("/buscar", (req, res) => {
    if (salas.length > 0) {
        res.json(salas[0]);
    } else {
        res.json(null);
    }
});

app.listen(3000, () => {
    console.log("Servidor activo");
});
