module.exports = function(app) {

    var questions = require('../controllers/student.controller.js');

    // Retrieve all Student
    app.get('/api/questions', questions.findAll);

    // Retrieve a single Student by Id
    app.get('/api/questions/:id', questions.findOne);

}
