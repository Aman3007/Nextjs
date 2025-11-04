'use client';

export default function StudentCard({ student }) {
  if (!student) return null;

  return (
    <div className="w-full max-w-2xl mx-auto animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"></div>
        
        <div className="relative px-8 pb-8">
          <div className="absolute -top-16 left-8">
            <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600 shadow-xl">
              {student.name?.charAt(0).toUpperCase()}
            </div>
          </div>

          <div className="pt-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 animate-slideIn">
              {student.name}
            </h2>
            
            <div className="space-y-3 mt-6">
              {student.email && (
                <div className="flex items-center text-gray-600 animate-slideIn" style={{ animationDelay: '0.1s' }}>
                  <span className="font-semibold mr-2">Email:</span>
                  <span>{student.email}</span>
                </div>
              )}
              
              {student.age && (
                <div className="flex items-center text-gray-600 animate-slideIn" style={{ animationDelay: '0.2s' }}>
                  <span className="font-semibold mr-2">Age:</span>
                  <span>{student.age}</span>
                </div>
              )}
              
              {student.grade && (
                <div className="flex items-center text-gray-600 animate-slideIn" style={{ animationDelay: '0.3s' }}>
                  <span className="font-semibold mr-2">Grade:</span>
                  <span>{student.grade}</span>
                </div>
              )}
              
              {student.major && (
                <div className="flex items-center text-gray-600 animate-slideIn" style={{ animationDelay: '0.4s' }}>
                  <span className="font-semibold mr-2">Major:</span>
                  <span>{student.major}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}