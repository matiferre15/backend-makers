import dotenv from 'dotenv';
dotenv.config();

export default {
    
    database: {
        
        user: 'w40fcbfo317dkbo5euys',
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


