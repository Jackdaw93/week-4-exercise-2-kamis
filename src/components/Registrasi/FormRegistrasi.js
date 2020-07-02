import React, { useState } from "react";

import "./FormRegistrasi.css";

function FormRegistrasi() {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [skill, setSkill] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(fullName);
    alert(email);
    alert(address);
    alert(birthdate);
    alert(gender);
    alert(skill);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            id="fullName"
            placeholder="Nama Lengkap"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <div>
          <textarea
            name="address"
            id="address"
            placeholder="Address"
            onChange={(event) => setAddress(event.target.value)}
            value={address}
          ></textarea>
        </div>
        <div>
          <input
            type="date"
            name="birthdate"
            id="birtdate"
            onChange={(event) => setBirthdate(event.target.value)}
            value={birthdate}
          />
        </div>
        <div>
          <input
            type="radio"
            id="male"
            onChange={(event) => setGender(event.target.value)}
            name="gender"
            value="Male"
          />
          Male
          <input
            type="radio"
            id="female"
            onChange={(event) => setGender(event.target.value)}
            name="gender"
            value="Female"
          />
          Female
        </div>
        <div>
          <input
            type="checkbox"
            id="coding"
            onChange={(event) => setSkill(event.target.value)}
            name="coding"
            value="Coding"
          />
          Coding
          <input
            type="checkbox"
            id="design"
            onChange={(event) => setSkill(event.target.value)}
            name="design"
            value="Design"
          />
          Design
          <input
            type="checkbox"
            id="gaming"
            onChange={(event) => setSkill(event.target.value)}
            name="gaming"
            value="Gaming"
          />
          Gaming
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default FormRegistrasi;
