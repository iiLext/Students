
import React from 'react'
import StudentCards from './StudentCards';

  function StudentInfo() {
  
    const cardInfo = [
        {
          image:
            "s1.png",
          name: "Mike",
          gpa: 3.8
        },
        {
          image:
            "s2.png",
            name: "Manal",
            gpa: 3.6
        },
        {
          image:
            "s3.png",
            name: "Moe",
            gpa: 3.2
        },
        {
          image:
            "s4.png",
            name: "Mary",
            gpa: 2.6
        }
      ];
    
      const personList = cardInfo.map(ss => <StudentCards ss = {ss}/>)
      return <div>{personList}</div>
   
    
  }
  
  export default StudentInfo