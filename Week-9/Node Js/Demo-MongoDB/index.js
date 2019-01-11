const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connected'))
.catch(err => console.error('Could not connect',err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type:Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Courses', courseSchema);

async function createCoures() {
const course = new Course({
    name: 'Node.js Course',
    author: 'Naveen',
    tags: ['Venkat', 'Medarametla'],
    isPublished: true
});

const result= await course.save();
console.log(result);
} 

async function getCourses(){
   const courses = await Course
                           .find({ author:'Naveen', isPublished:true })
                           .limit(10)
                           .sort({ name: 1 })
                           .select({ name: 1, tags: 1 });
   console.log(courses);
}
getCourses();