import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  stClass: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [file, setFile] = useState(null);
  const [uploadedurl, setUploadedUrl] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert("Please upload image first!");
      return;
    }

    //Create form data
    const submitFormData = new FormData();
    submitFormData.append("fullName", formData.fullName);
    submitFormData.append("email", formData.email);
    submitFormData.append("password", formData.password);
    submitFormData.append("confirmPassword", formData.confirmPassword);
    submitFormData.append("stClass", formData.stClass);
    submitFormData.append("profile", file);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    //Send data to the server
    await axios
      .post("http://localhost:3000/api/auth/register", submitFormData, config)
      .then((data) => {
        console.log("Data: ", data);
        if (data.data?.success) {
          setUploadedUrl(data.data?.url);
          navigate("/auth/login");
          setFormData(initialState);
          toast(data.data?.message);
          setFile(null);
        } else {
          toast(data.data?.message);
        }
      });
  };

  console.log("Uploaded url: ", uploadedurl);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <span>Already have an account</span>
        <Link
          className="font-medium ml-1 text-primary hover:underline"
          to="/auth/login"
        >
          Login
        </Link>
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 w-100">
          <div className="grid w-full gap-1">
            <Label className="mb-1">Full Name</Label>
            <Input
              name="fullName"
              placeholder="Enter your full name"
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(event) =>
                setFormData({ ...formData, fullName: event.target.value })
              }
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label className="mb-1">Email</Label>
            <Input
              name="email"
              placeholder="Enter your email"
              id="email"
              type="email"
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label className="mb-1">Password</Label>
            <Input
              name="password"
              placeholder="Enter your password"
              id="password"
              type="text"
              value={formData.password}
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label className="mb-1">Confirm Password</Label>
            <Input
              name="confirmPassword"
              placeholder="Re-type password"
              id="confirmPassword"
              type="text"
              value={formData.confirmPassword}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  confirmPassword: event.target.value,
                })
              }
            />
          </div>

          <div className="grid w-full gap-1.5">
            <Label className="mb-1">Class</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, stClass: value })
              }
              value={formData.stClass}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem key="I" value="I">
                  I
                </SelectItem>
                <SelectItem key="II" value="II">
                  II
                </SelectItem>
                <SelectItem key="III" value="III">
                  III
                </SelectItem>
                <SelectItem key="IV" value="IV">
                  IV
                </SelectItem>
                <SelectItem key="V" value="V">
                  V
                </SelectItem>
                <SelectItem key="VI" value="VI">
                  VI
                </SelectItem>
                <SelectItem key="VII" value="VII">
                  VII
                </SelectItem>
                <SelectItem key="VIII" value="VIII">
                  VIII
                </SelectItem>
                <SelectItem key="IX" value="IX">
                  IX
                </SelectItem>
                <SelectItem key="X" value="X">
                  X
                </SelectItem>
                <SelectItem key="XI" value="XI">
                  XI
                </SelectItem>
                <SelectItem key="XII" value="XII">
                  XII
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full gap-1.5">
            <Label className="mb-1">Profile Picture</Label>
            <Input
              name="profile"
              placeholder="Upload your image"
              id="profile"
              type="file"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <Button type="submit" className="mt-2 w-full cursor-pointer">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Register;
