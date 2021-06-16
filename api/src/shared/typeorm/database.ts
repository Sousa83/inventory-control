import {createConnection} from 'typeorm';
createConnection().catch(console.error).then(() => console.log('connected'))