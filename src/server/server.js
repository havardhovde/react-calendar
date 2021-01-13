const express = require("express")
const app = express()
const db = require("./db.js")
var cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended : false }))    // to support URL-encoded bodies

const HTTP_PORT = 8000

app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`)
})

//get all events
app.get("/api/events", (req, res, next) => {
    let sql = "select * from events"
    let params = []
    db.all(sql, params, (err, rows) => {
        if(err) {
            res.status(400).json({"error" : err.message})
            return
        }
        res.json({
            "message": "success",
            "data": rows
        })
    })
})

//get single event by start date
app.get("/api/events/:startdate", (req, res, next) => {
    let sql = "select * from events where startdate = ?"
    let params = [req.params.startdate]
    db.get(sql, params, (err, row) => {
        if(err) {
            res.status(400).json({"error": err.message})
            return
        }
        res.json({
            "message" : "success",
            "data": row
        })
    })
})

//add new event
app.post("/api/events/", (req, res, next) => {
    let errors = []
    if(!req.body.title) {
        errors.push("No etitle specified")
    }
    if(!req.body.startdate) {
        errors.push("No start date specified")
    }
    if(!req.body.starttime) {
        errors.push("No start time specified")
    }
    if(errors.length) {
        res.status(400).json({"error(s)": errors.join(", ")})
    }

    let data = {
        title: req.body.title,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        starttime: req.body.starttime,
        endtime: req.body.endtime,
        category: req.body.category,
        notes: req.body.notes
    }
    
    let sql = 'INSERT INTO events (title, startdate, enddate, starttime, endtime, category, notes) VALUES (?,?,?,?,?,?,?)'
    let params = [data.title, data.startdate, data.enddate, data.starttime, data.endtime, data.category, data.notes]
    db.run(sql, params, function(err, result) {
        if(err) {
            res.status(400).json({"error": err.message})
            return
        }
        res.json({
            "message" : "success",
            "data": data,
            "id": this.lastID
        })
    })
})

//update an event
app.patch("/api/events/:id", (req, res, next) => {
    let data = {
        title: req.body.title,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        starttime: req.body.starttime,
        endtime: req.body.endtime,
        category: req.body.category,
        notes: req.body.notes
    }
    db.run(
        `UPDATE events set
            title = COALESCE(?, title),
            startdate = COALESCE(?, startdate),
            enddate = COALESCE(?, enddate),
            starttime = COALESCE(?, starttime),
            endtime = COALESCE(?, endtime),
            category = COALESCE(?, category),
            notes = COALESCE(?, notes)`,
        [data.title, data.startdate, data.enddate, data.starttime, data.endtime, data.category, data.notes],
        function(err, result){
            if(err) {
                res.status(400).json({"error": res.message})
                return
            }
            res.json({
                "mesage": "success",
                "data": data,
                "changes": this.changes

            })
        }
    )
})

//delete events
app.delete("/api/events/:id", (req, res, next) => {
    db.run(
        `DELETE FROM events WHERE id = ?`,
        req.params.id,
        function(err, result) {
            if(err) {
                res.status(400).json({"error": res.message})
                return
            }
            res.json({"message": "deleted", "changes": this.changes})
        }
    )
})

app.get("/", (req, res, next) => {
    res.json({"Message": "OK"})
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(function(req, res) {
    res.status(404)
})