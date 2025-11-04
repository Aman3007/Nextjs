// scripts/seed.js
import mongoose from 'mongoose';
import Student from '@/models/students';

const students = [
  {
    "_id": "102",
    "name": "Emily Carter",
    "email": "emily.carter@example.com",
    "age": 19,
    "grade": "B",
    "major": "Mechanical Engineering"
  },
  {
    "_id": "103",
    "name": "Michael Smith",
    "email": "michael.smith@example.com",
    "age": 22,
    "grade": "A",
    "major": "Computer Science"
  },
  {
    "_id": "104",
    "name": "Sophia Johnson",
    "email": "sophia.johnson@example.com",
    "age": 21,
    "grade": "C",
    "major": "Biotechnology"
  },
  {
    "_id": "105",
    "name": "David Brown",
    "email": "david.brown@example.com",
    "age": 23,
    "grade": "B",
    "major": "Electrical Engineering"
  },
  {
    "_id": "106",
    "name": "Ava Wilson",
    "email": "ava.wilson@example.com",
    "age": 18,
    "grade": "A",
    "major": "Information Technology"
  },
  {
    "_id": "107",
    "name": "Daniel Moore",
    "email": "daniel.moore@example.com",
    "age": 20,
    "grade": "B",
    "major": "Civil Engineering"
  },
  {
    "_id": "108",
    "name": "Isabella Taylor",
    "email": "isabella.taylor@example.com",
    "age": 21,
    "grade": "A",
    "major": "Mathematics"
  },
  {
    "_id": "109",
    "name": "James Anderson",
    "email": "james.anderson@example.com",
    "age": 19,
    "grade": "C",
    "major": "Computer Applications"
  },
  {
    "_id": "110",
    "name": "Mia Thomas",
    "email": "mia.thomas@example.com",
    "age": 22,
    "grade": "B",
    "major": "Business Administration"
  },
  {
    "_id": "111",
    "name": "Benjamin Jackson",
    "email": "benjamin.jackson@example.com",
    "age": 24,
    "grade": "A",
    "major": "Physics"
  },
  {
    "_id": "112",
    "name": "Charlotte White",
    "email": "charlotte.white@example.com",
    "age": 20,
    "grade": "B",
    "major": "Chemistry"
  },
  {
    "_id": "113",
    "name": "Elijah Harris",
    "email": "elijah.harris@example.com",
    "age": 21,
    "grade": "C",
    "major": "Mechanical Engineering"
  },
  {
    "_id": "114",
    "name": "Amelia Clark",
    "email": "amelia.clark@example.com",
    "age": 18,
    "grade": "A",
    "major": "Artificial Intelligence"
  },
  {
    "_id": "115",
    "name": "Oliver Lewis",
    "email": "oliver.lewis@example.com",
    "age": 22,
    "grade": "B",
    "major": "Data Science"
  },
  {
    "_id": "116",
    "name": "Harper Hall",
    "email": "harper.hall@example.com",
    "age": 23,
    "grade": "A",
    "major": "Aeronautical Engineering"
  },
  {
    "_id": "117",
    "name": "Lucas Young",
    "email": "lucas.young@example.com",
    "age": 19,
    "grade": "C",
    "major": "Architecture"
  },
  {
    "_id": "118",
    "name": "Evelyn King",
    "email": "evelyn.king@example.com",
    "age": 20,
    "grade": "B",
    "major": "Electronics & Communication"
  },
  {
    "_id": "119",
    "name": "Alexander Wright",
    "email": "alex.wright@example.com",
    "age": 21,
    "grade": "A",
    "major": "Robotics"
  },
  {
    "_id": "120",
    "name": "Abigail Scott",
    "email": "abigail.scott@example.com",
    "age": 22,
    "grade": "B",
    "major": "Law"
  },
  {
    "_id": "121",
    "name": "Logan Green",
    "email": "logan.green@example.com",
    "age": 23,
    "grade": "C",
    "major": "Mechanical Engineering"
  },
  {
    "_id": "122",
    "name": "Ella Baker",
    "email": "ella.baker@example.com",
    "age": 19,
    "grade": "A",
    "major": "Psychology"
  },
  {
    "_id": "123",
    "name": "Henry Adams",
    "email": "henry.adams@example.com",
    "age": 24,
    "grade": "B",
    "major": "Finance"
  },
  {
    "_id": "124",
    "name": "Chloe Nelson",
    "email": "chloe.nelson@example.com",
    "age": 20,
    "grade": "A",
    "major": "Pharmacy"
  },
  {
    "_id": "125",
    "name": "Sebastian Carter",
    "email": "sebastian.carter@example.com",
    "age": 21,
    "grade": "B",
    "major": "Cyber Security"
  },
  {
    "_id": "126",
    "name": "Grace Mitchell",
    "email": "grace.mitchell@example.com",
    "age": 22,
    "grade": "C",
    "major": "Computer Science"
  },
  {
    "_id": "127",
    "name": "Jack Perez",
    "email": "jack.perez@example.com",
    "age": 23,
    "grade": "A",
    "major": "Electronics Engineering"
  },
  {
    "_id": "128",
    "name": "Victoria Roberts",
    "email": "victoria.roberts@example.com",
    "age": 18,
    "grade": "B",
    "major": "Mathematics"
  },
  {
    "_id": "129",
    "name": "Lucas Turner",
    "email": "lucas.turner@example.com",
    "age": 20,
    "grade": "A",
    "major": "Artificial Intelligence"
  },
  {
    "_id": "130",
    "name": "Aria Phillips",
    "email": "aria.phillips@example.com",
    "age": 21,
    "grade": "B",
    "major": "Humanities"
  },
  {
    "_id": "131",
    "name": "Matthew Campbell",
    "email": "matthew.campbell@example.com",
    "age": 22,
    "grade": "C",
    "major": "Computer Science"
  },
  {
    "_id": "132",
    "name": "Scarlett Rivera",
    "email": "scarlett.rivera@example.com",
    "age": 19,
    "grade": "A",
    "major": "Medicine"
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data (optional)
    await Student.deleteMany({});
    console.log('Cleared existing students');

    // Insert new data
    await Student.insertMany(students);
    console.log('Successfully inserted', students.length, 'students');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();