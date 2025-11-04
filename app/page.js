'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchBar from '@/components/searchBar';
import StudentCard from '@/components/studentCard';


function SearchContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (name) {
      setLoading(true);
      setError(null);
      
       fetch(`/api/students?name=${encodeURIComponent(name)}`)// Fixed: parentheses not backticks
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            setError(data.error);
            setStudent(null);
          } else {
            setStudent(data);
          }
        })
        .catch(() => setError('Failed to fetch student'))
        .finally(() => setLoading(false));
    } else {
      setStudent(null);
      setError(null);
    }
  }, [name]);

  return (
    <>
      <SearchBar></SearchBar>
      
      {loading && (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      )}
      
      {error && (
        <div className="max-w-2xl mx-auto bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg animate-fadeIn">
          {error}
        </div>
      )}
      
     {student && <StudentCard student={student} />}
      
      {!name && !loading && (
        <div className="text-center text-gray-500 text-lg animate-fadeIn">
          Search for a student to see their details
        </div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800 animate-fadeIn">
          Student Directory
        </h1>
        
        <Suspense fallback={
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        }>
          <SearchContent />
        </Suspense>
      </div>
    </main>
  );
}