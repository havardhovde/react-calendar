const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = 'db.sqlite'

const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err)
        throw err
    } else {
        console.log('Connected to SQLite database')
        db.run(`CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            startdate TEXT NOT NULL,
            enddate TEXT,
            starttime TEXT NOT NULL,
            endtime TEXT,
            category TEXT NOT NULL,
            notes TEXT
        )`,
            (err) => {
                if(err) {
                    console.error(err)
                }
            }
        )
    }
})

module.exports = db