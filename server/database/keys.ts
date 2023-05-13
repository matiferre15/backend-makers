import dotenv from 'dotenv';
dotenv.config();

export default {
    
    database: {
        
        user: '6s78vsqdqxo4kk4l525u',
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


