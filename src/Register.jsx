import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: ""
  });

  const changeName = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    try {
      const res = await axios.post(
        "https://new.onrender.com/register",
        data
      );

      alert(res.data);
    } catch (xyz) {
      alert(xyz.response?.data || "Error occurred");
    }
  };

  return (
    <>
      <h1>I AM APP</h1>

      <input
        onChange={changeName}
        name="username"
        placeholder="enter username"
      />

      <input
        onChange={changeName}
        name="email"
        placeholder="enter email"
      />

      <input
        onChange={changeName}
        name="password"
        placeholder="enter password"
        type="password"
      />

      <button onClick={submit}>Submit</button>
    </>
  );
}

export default Register;
