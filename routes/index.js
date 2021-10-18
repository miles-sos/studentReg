// module.exports = (app) => {
const router = require('express').Router();

const stud_controller = require('../controllers/student.ctrl');
const usersController = require('../controllers/user.ctrl');

// Get all students
router.get('/', stud_controller.findAllStudents);

// Save Student
router.post('/', stud_controller.createNewStudent);

// Get single student
router.get('/:id', stud_controller.findOneStudent);

// Update a student
router.put('/:id', stud_controller.findAndUpdateStudent);

// Delete a student
router.delete('/:id', stud_controller.findAndDeleteOneStudent);

// Delete all student
router.delete('/', stud_controller.deleteAllStudents);

// Create a new user
router.post('/createUser', usersController.createUser);

// Login a user
router.post('/loginUser', usersController.loginUser);

// app.use('/api/student', router);
// };

module.exports = router;
