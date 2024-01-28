import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p className="text-x text-gray-800 mb-1">Meet Patel</p>
      <Link href="https://github.com/MeetGodad/cprg306-assignments" className="text-x text-gray-800 mb-1">GitHub Repository</Link>
    </div>
  );
};

;