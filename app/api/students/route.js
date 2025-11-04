import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Student from '@/models/students';

export async function GET(request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');

    if (!name) {
      return NextResponse.json({ error: 'Name parameter is required' }, { status: 400 });
    }

    // Search for student by name (case-insensitive)
    const student = await Student.findOne({
      name: { $regex: new RegExp(name, 'i') }
    }).lean();

    if (!student) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }

    // Convert MongoDB _id to string to avoid serialization issues
    const studentData = {
      _id: student._id.toString(),
      name: student.name,
      email: student.email,
      age: student.age,
      grade: student.grade,
      major: student.major
    };

    console.log('Student data being sent:', studentData);

    return NextResponse.json(studentData);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}