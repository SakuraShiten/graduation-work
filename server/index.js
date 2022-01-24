require('dotenv').config()
const express = require('express');
const cors = require('cors')
const router = require('./routes/index')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', router)

const PORT = process.env.PORT || 5000;

const start = async () => {
    const uri = process.env.MONGO_URI;
    try {
        await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()





