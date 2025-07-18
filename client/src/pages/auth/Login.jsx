import CheckAuth from "@/components/common/CheckAuth";
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
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    // console.log(formData);

    await axios
      .post("http://localhost:3000/api/auth/login", formData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        if (response.data?.success) {
          if (response.data?.user?.status) {
            toast(response.data?.message);
            if (response.data?.user?.role === "user") {
              navigate("/user/dashboard");
            } else {
              navigate("/admin/dashboard");
            }
          } else {
            toast("You are currently inactive");
          }
        } else {
          toast(response.data?.message);
        }
      });
  };

  return (
    <>
      <CheckAuth />
      <div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <span>Don't have an account</span>
          <Link
            className="font-medium ml-1 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </div>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-2 w-100">
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
          </div>
          <Button type="submit" className="mt-2 w-full">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
