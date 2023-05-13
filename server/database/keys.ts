import dotenv from 'dotenv';
dotenv.config();

export default {
    
    database: {
        
        user: 'dzz8vw82gqm5uksw7zau',
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


