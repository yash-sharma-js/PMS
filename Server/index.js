    const express = require('express');
    require('dotenv').config(); 
    const cors = require('cors');
    const app = express();
    const dbconnect = require('./Config/dbconnect');
    const { signUp,signIn } = require('./Auth/signup');
    const projectRoutes  = require('./Routes/project.route')
    // Use the correct app object

    // middlewares
    app.use(express.json());
    app.use(cors({
        credentials: true // Corrected property name
    }));

    //Connection
    const PORT = process.env.PORT || 8080;
    dbconnect.DbConnection();

    app.listen(PORT, () => {
        console.log('listening on port ' + PORT);
    });


    //project routes
    app.use('/api', projectRoutes);


    app.post('/signup', signUp);
    app.get('/signin', signIn);