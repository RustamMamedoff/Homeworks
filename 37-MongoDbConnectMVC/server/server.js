const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/studentsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const studentSchema = new mongoose.Schema({
  name: String,
  surname: String,
  age: Number,
  isStudent: Boolean,
});

const Student = mongoose.model('Student', studentSchema);

app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

app.get('/students/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
});

app.post('/students', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json(student);
});

app.delete('/students/:id', async (req, res) => {
  const deletedStudent = await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted', student: deletedStudent });
});

app.put('/students/:id', async (req, res) => {
  const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedStudent);
});

app.patch('/students/:id', async (req, res) => {
  const updatedStudent = await Student.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
  res.json(updatedStudent);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
