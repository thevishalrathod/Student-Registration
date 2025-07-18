import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/admin/get-students"
      );
      console.log("response array: ", res);
      setStudents(res.data?.userList);
      console.log(students);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <StudentContext.Provider value={{ students, setStudents, fetchStudents }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => useContext(StudentContext);
