const express = require('express');
const cors = require('cors')
app = express();

app.use(cors())
app.use(express.json())

const mainRouter = require('./routes/index')
app.use('/api', mainRouter)

app.listen(3000);