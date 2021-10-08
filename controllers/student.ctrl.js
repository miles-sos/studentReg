const { Student } = require('../models/student');

exports.findAllStudents = (req, res) => {
  Student.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

exports.createNewStudent = (req, res) => {
  const stu = new Student({
    name: req.body.name,
    ssn: req.body.ssn,
    email: req.body.email,
    mobile: req.body.mobile,
    status: req.body.status,
  });
  stu.save((err, data) => {
    if (err) throw err;
    res.status(200).json({
      code: 200,
      message: 'Student added successfully',
      addStudent: data,
    });
  });
};

exports.findOneStudent = (req, res) => {
  Student.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

exports.findAndUpdateStudent = (req, res) => {
  const stu = new Student({
    name: req.body.name,
    ssn: req.body.ssn,
    email: req.body.email,
    mobile: req.body.mobile,
    status: req.body.status,
  });
  Student.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Student with id=${id}`,
        });
      } else {
        res.send({ message: 'Student was updated successfully.' });
      }
    })
    .catch((err) => {
    //   console.log(err);
      res.status(500).send({
        message: 'Error updating Student with id=' + req.params.id,
      });
    });
};

exports.findAndDeleteOneStudent = (req, res) => {
  Student.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Student with id=${req.params.id}. Maybe Student was not found!`,
        });
      } else {
        res.send({
          message: 'Student was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Student with id=' + req.params.id,
      });
    });
};

exports.deleteAllStudents = (req, res) => {
  Student.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Students were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all students.',
      });
    });
};

// module.exports = { findAllStudents, createNewStudent, findOneStudent, findAndUpdateStudent, findAndDeleteOneStudent, deleteAllStudents };
