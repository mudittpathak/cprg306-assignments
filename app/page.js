
import Link from 'next/link';
import StudentInfo from './StudentInfo'; 

const Page = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      

      <StudentInfo />
      
   
      <Link href="/week2">
        Week 2 Assignment
      </Link>
    </div>
  );
};

export default Page;
