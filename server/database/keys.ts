import dotenv from 'dotenv';
dotenv.config();

export default {
    
    database: {
        
        user: 'mlhzkgpaavt12vcdw75f',
        host: 'aws.connect.psdb.cloud',
        password: process.env.PASSWORD,
        database: 'project_scheduler',
        dateStrings: true,
        debug: true,
        ssl : {
            rejectUnauthorized: true
        }

    }
    
}


