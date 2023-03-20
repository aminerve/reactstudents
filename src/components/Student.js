import studentsdata from "./studentsdata";
import Score from "./Score";
import { useState } from 'react'
function Student() {
    const [studentData, setStudentData] = useState(studentsdata);

  return ( 
    <>
    {studentData.map((student) => {
    return (
      <div key={student.key}>
        <h6>{student.name}</h6>
        <h6>{student.bio}</h6>
        {student.scores.map(score => <Score info={score}/>) }
        </div>
    );
  })}
    </>
  );
}

export default Student;
