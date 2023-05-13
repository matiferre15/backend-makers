import dotenv from 'dotenv';
dotenv.config();

export default {
    
    database: {
        
        user: 'm4c702x8d3h2miyddeek',
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


