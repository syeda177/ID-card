import Component from "./component/card";

const Students = () => {
  const studentsData = [
    { name: "Ajeeya", age: "19", rollNumber: "10", studentClass: "8A" },
    { name: "Saira", age: "17", rollNumber: "12", studentClass: "8B" },
    { name: "Kanza", age: "20", rollNumber: "33", studentClass: "8A" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center text-purple-500 mb-8">
        Student ID Cards
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {studentsData.map((student, index) => (
          <Component
            key={index}
            name={student.name}
            age={student.age}
            rollNumber={student.rollNumber}
            Class={student.studentClass}
          />
        ))}
      </div>
    </div>
  );
};

export default Students;
