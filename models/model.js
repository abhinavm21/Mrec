const sqlite3 = require('sqlite3')

function results(){
    let db = new sqlite3.Database('./db/fingerprints2.db',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('connected to database')
    })
    query = 'select * from results order by id desc limit 1'
    db.get(query,(err, data) => {
    if (err) {
      return console.error(err.message);
    }
    res.send(JSON.stringify(data))
})


db.close((err)=>{
    if(err){
        console.log(error.message)
    }
    console.log('database closed')
})

}


 module.exports ={results} 