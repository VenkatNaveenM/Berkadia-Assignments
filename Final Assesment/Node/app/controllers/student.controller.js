var questions = [
				{    id:1,
                    question:"Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
                    options:["Alan Sugar","Richard Branson","Donald Trump","Bill Gates"],
                    correct_answer:"Richard Branson",
                    incorrect_answers:["Alan Sugar","Donald Trump","Bill Gates"]
				},
				{
                    id:2,
					question:"Where is the train station \u0026quot;Llanfair\u0026shy;pwllgwyngyll\u0026shy;gogery\u0026shy;chwyrn\u0026shy;drobwll\u0026shy;llan\u0026shy;tysilio\u0026shy;gogo\u0026shy;goch\u0026quot;?",
                    options:["Wales","Moldova","Czech Republic","Denmark"],
                    correct_answer:"Wales",
                    incorrect_answers:["Moldova","Czech Republic","Denmark"]
				}
            ]


exports.findAll = function(req, res) {
    res.end(JSON.stringify(questions, null, 4));  
};

exports.findOne = function(req, res) {
    var question = questions["question" + req.params.id];
    res.end(JSON.stringify(question, null, 4));
};
