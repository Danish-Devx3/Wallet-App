const express = require('express');

app = express();
const mainRouter = require('./routes/index')
app.use('/api', mainRouter)

app.listen(3000);