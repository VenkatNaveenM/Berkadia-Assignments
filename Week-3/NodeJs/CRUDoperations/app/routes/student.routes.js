module.exports = function(app) {

    var students = require('../controllers/student.controller.js');

    // Create a new Student
    app.post('/api/students', students.create);

    // Retrieve all Student
    app.get('/api/students', students.findAll);

    // Retrieve a single Student by Id
    app.get('/api/students/:id', students.findOne);

    // Update a Student with Id
    app.put('/api/students/:id', students.update);

    // Delete a Student with Id
    app.delete('/api/students/:id', students.delete);
}
