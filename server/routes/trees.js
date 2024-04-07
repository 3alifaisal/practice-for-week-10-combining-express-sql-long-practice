// Instantiate router - DO NOT MODIFY
const express = require('express');
require('dotenv').config();
const sqlite3 = require('sqlite3');
const router = express.Router();


// Now you can access your environment variables like this:

/**
 * BASIC PHASE 2, Step A - Instantiate SQLite and database
 *   - Database file: "data_source" environment variable
 *   - Database permissions: read/write records in tables
 */
// Your code here


const db = new sqlite3.Database(process.env.DATA_SOURCE, sqlite3.OPEN_READWRITE);

/**
 * BASIC PHASE 2, Step B - List of all trees in the database
 *
 * Protocol: GET
 * Path: /
 * 
 * Parameters: None
 * Response: JSON array of objects
 *   - Object properties: height-ft, tree, id
 *   - Ordered by the height_ft from tallest to shortest
 */
// Your code here
router.get("/",(req,res,next)=> {
    const SqlStatement = `SELECT id,tree FROM trees ORDER BY height_ft DESC`
    const params = [];
    db.all(SqlStatement, params, (err,rows)=> {
        if (err) {
           
            next(err);
            return;
        }
       
        res.json(rows);
    })
})
/**
 * BASIC PHASE 3 - Retrieve one tree with the matching id
 *
 * Path: /:id
 * Protocol: GET
 * Parameter: id
 * Response: JSON Object
 *   - Properties: id, tree, location, height_ft, ground_circumference_ft
 */
// Your code here
router.get("/:id",(req,res,next)=> {
    const SqlStatement = `SELECT * FROM trees Where id=?`
    const params = [req.params.id];
    db.get(SqlStatement,params, (err,rows)=> {
        if(err) {
            next(err);
            return;
        }
        res.json(rows);
    })
})

/**
 * INTERMEDIATE PHASE 4 - INSERT tree row into the database
 *
 * Path: /trees
 * Protocol: POST
 * Parameters: None
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
// Your code here
router.post("/",(req,res,next)=> {
    const SqlStatement = `INSERT INTO trees(tree,location,height_ft,ground_circumference_ft)
                                VALUES (?,?,?,?)`;
    const params = [req.body.name,req.body.location,req.body.height,req.body.size];
    db.run(SqlStatement,params,(err,rows)=> {
        if(err) {
            next(err);
            return;
        }
        res.json({
            message: "success"
        });
    })
})

/**
 * INTERMEDIATE PHASE 5 - DELETE a tree row from the database
 *
 * Path: /trees/:id
 * Protocol: DELETE
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
// Your code here
router.delete("/:id",(req,res,next)=> {
    const SqlStatement = `DELETE FROM trees WHERE id = ?`;
    const params = [req.params.id];
    db.run(SqlStatement,params,(err,rows) => {
        if(err) {
            next(err);
            return;
        }
        res.json({
            message: "success"
        })
    })
})
/**
 * INTERMEDIATE PHASE 6 - UPDATE a tree row in the database
 *
 * Path: /trees/:id
 * Protocol: PUT
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
// Your code here
const updateTreeById = (req,res,next)  => {
   //loose equality because one of them is a string
    if (req.body.id != req.params.id) {
       let err = new Error("ids do not match");
       
       err.statusCode = 400;
       next(err);
       return;
    }
    const SqlStatement = `UPDATE trees
                        SET tree = ?,location = ?,height_ft =?,ground_circumference_ft =?
                        WHERE id = ?`
    const params = [req.body.name,req.body.location,req.body.height,req.body.size,req.body.id];

    db.run(SqlStatement,params,(err,rows) => {
        if(err) {
            next(err);
            return;
        }
        res.json({
            message: "success"
        })
    })
}
router.put("/:id",updateTreeById);
router.patch("/:id",updateTreeById);

// Export class - DO NOT MODIFY
module.exports = router;