
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
      <Link href="/week3">
        Week 3 Assignment
      </Link>
      <Link href="/week4">
        Week 4 Assignment
      </Link>
      <Link href="/week5">
        Week 5 Assignment
      </Link>
    </div>
  );
};

export default Page;
