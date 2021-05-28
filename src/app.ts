import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.send("HLO");
});

app.listen(PORT, () => console.log(`server is starting on http://localhost:${PORT}`))
