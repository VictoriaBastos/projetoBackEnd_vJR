//instalação da biblioteca pg
// npm install pg (disponibiliza recursos para comunicação do JS com postgreSql)
const { Pool } = require('pg')

const client = new Pool({
    connectionString:'postgres://yvrydympoptyzm:0861c80778a0c10c17b54b81c1430a29615fd0318a8f313acb2978641525b0ae@ec2-54-147-126-173.compute-1.amazonaws.com:5432/dfqefetvgasr09',
    ssl:{
        rejectUnauthorized: false
    }
})

module.exports = client

// //TESTAR CONEXAO
// async function teste(){
//     const res = await client.query('SELECT $1::text as message',['Olá mundo'])
//     console.log(res.rows[0].message)
// }

// teste()

