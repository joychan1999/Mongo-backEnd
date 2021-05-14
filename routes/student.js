//make a router
const router = require('express').Router();

let Student = require ('../models/student.model');

//home
router.route('/').get((req, res)=>{
    Student.find()
    //retrieve promise (gamay ang student kay mao na sya ang pangalan sa collection sa database)
        .then(student => res.json(student))
    //else catch the error
        .catch(error => res.status(400).json("Error: "+ error));
});

// add
router.route('/add').post((req, res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;

    const newStudent = new Student({fullname, email});

    newStudent.save()
        .then(student => res.json('New record added.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// details
router.route('/:id').get((req, res) => {
    Student.findById(req.params.id)
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error: ' + err));
});


// delete
router.route('/delete/:id').delete((req, res) => {
    Student.findByIdAndDelete(req.params.id)
        .then(student => res.json('Record was deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// update
router.route('/update/:id').post((req, res) => {
    Student.findById(req.params.id)
        .then(student => {
            student.fullname = req.body.fullname;
            student.email = req.body.email;

            student.save()
                .then(student => res.json("Record was updated."))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});




//exporting the router
module.exports = router;