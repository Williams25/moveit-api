const { app } = require('./app')

app.listen(process.env.PORT || 3333, () => console.log(`http://localhost:${process.env.PORT || 3333}`))