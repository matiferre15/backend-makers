import dotenv from 'dotenv';
dotenv.config();

export default {
    
    database: {
        
        user: 't1aunpueev24mmxy42b8',
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


