import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useStudents } from "@/context/StudentContext";

import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const AdminDashboard = () => {
  const { students, fetchStudents } = useStudents();

  const handleChangeStatus = async (status, email) => {
    // console.log(email);
    let val = true;
    if (status) {
      val = false;
    } else {
      val = true;
    }

    try {
      await axios
        .patch("http://localhost:3000/api/admin/change-status", {
          val,
          email,
        })
        .then((res) => {
          toast(res.data?.message);
        });
      //  Re-fetch updated students list
      await fetchStudents();
    } catch (error) {
      console.error("Status change failed:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center bg-red-400 text-2xl text-semibold">
        Admin Dashboard
      </div>
      <div className="flex justify-end m-2 p-2">
        <Link to="/auth/logout">
          <Button>Logout</Button>
        </Link>
      </div>

      <div className="flex justify-center">
        <Table>
          <TableCaption>All enrolled students list</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {students &&
              students.map((item) => (
                <TableRow>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src={item?.profile} />
                    </Avatar>
                  </TableCell>
                  <TableCell>{item?.fullName}</TableCell>
                  <TableCell>{item?.class}</TableCell>
                  <TableCell>{item?.email}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      onClick={() =>
                        handleChangeStatus(item?.status, item?.email)
                      }
                      className={`${
                        item?.status ? "bg-green-500" : "bg-red-400"
                      }`}
                    >
                      {item?.status ? "Active" : "Inactive"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminDashboard;
