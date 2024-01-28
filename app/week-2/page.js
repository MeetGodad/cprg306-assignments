import StudentInfo from "./student-info"

export default function Page() {
    return (
      <main className="flex flex-col items-center justify-center p-5 bg-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">Shopping List</h1>
        <StudentInfo />
      </main>
    );
  }