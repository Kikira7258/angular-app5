// --------------------
// >> BASE VARIABLES <<
// --------------------
const express = require('express');
const Student = require('../models/students')

const router = express.Router();
// --------------------


// --------------------
// >> GET ROUTE <<
// --------------------
router.get('/', (req, res) => {
    Student.find((err, data) => {
        if(err) {
            console.error(err);
        } else {
            // 200 = ok
            res.status(200).json(data);
        }
    })
})

// >> GET SINGLE STUDENT
router.get('/:id', (req, res) => {
    Student.findById(req.params.id, (err, student) => {
        if(err) {
            console.error(err);
            res.status(500).json({
                message: err.message
            })
        } else {
            if(student){
                // 200 = ok
                res.status(200).json(student)
            } else {
                res.status(404).json({
                    status: "404",
                    message: "Data not found!"
                })
            }
        }
    })
})
// --------------------


// --------------------
// >> CREATE ROUTE <<
// --------------------
router.post('/', (req, res) => {
    Student.create(req.body, (err, doc) => {
        if(err) {
            console.error(err)
        } else {
            // 201 = created
            res.status(201).json(doc);
        }
    });
})
// --------------------



// --------------------
// >> UPDATE ROUTE <<
// --------------------
router.put('/:id', (req, res) => {
    Student.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, doc) => {
        if(err){
            console.error(err);
        } else {
            // 200 = ok
            res.status(200).json(doc)
        }
    })
})
// --------------------



// --------------------
// >> DELETE ROUTE <<
// --------------------
router.delete('/:id', (req, res) => {
    Student.findByIdAndDelete(req.params.id, (err) => {
        if(err) {
            console.error(err)
            res.status(500).json(err)
        } else {
            // 204 = no content
            res.status(204).json(null)
        }
    })
})
// --------------------


// >> export module <<
module.exports = router;