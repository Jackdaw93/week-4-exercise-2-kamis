import React, { useState } from "react";

import "./FormRegistrasi.css";

function FormRegistrasi() {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);

  const handleSubmit = () => {
    alert(`
        Nama      : ${fullName}
        Email     : ${email}
        Password  : ${password}
        Addess    : ${address}
        Birthdate : ${birthdate}
        Gender    : ${gender}
        Skilss    : ${skills}
       `);
  };

  return (
    <div className="container">
      <form className="form-input" onSubmit={handleSubmit}>
        <h3>Form Registrasi</h3>
        <div>
          <input
            className="text"
            type="text"
            name="name"
            id="fullName"
            placeholder="Nama Lengkap"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            className="text"
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
            className="text"
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
            className="text"
            name="address"
            id="address"
            placeholder="Address"
            onChange={(event) => setAddress(event.target.value)}
            value={address}
          ></textarea>
        </div>
        <div>
          <input
            className="text"
            type="date"
            name="birthdate"
            id="birtdate"
            onChange={(event) => setBirthdate(event.target.value)}
            value={birthdate}
          />
        </div>

        <div className="radio">
          Gender:
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={(event) => setGender(event.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={(event) => setGender(event.target.value)}
          />
          Female
        </div>
        <div className="radio">
          Skills:
          <input
            type="checkbox"
            name="skills"
            id="coding"
            value="Coding"
            onChange={(event) => {
              if (event.target.checked) {
                setSkills([...skills, event.target.value]);
              } else {
                setSkills(
                  skills.filter((skill) => skill !== event.target.value)
                );
              }
            }}
          />
          Coding
          <input
            type="checkbox"
            name="skills"
            id="design"
            value="Design"
            onChange={(event) => {
              if (event.target.checked) {
                setSkills([...skills, event.target.value]);
              } else {
                setSkills(
                  skills.filter((skill) => skill !== event.target.value)
                );
              }
            }}
          />
          Desain
          <input
            type="checkbox"
            name="skills"
            id="gaming"
            value="gaming"
            onChange={(event) => {
              if (event.target.checked) {
                setSkills([...skills, event.target.value]);
              } else {
                setSkills(
                  skills.filter((skill) => skill !== event.target.value)
                );
              }
            }}
          />
          Gaming
        </div>
        <input className="btn" type="submit" />
      </form>
    </div>
  );
}

export default FormRegistrasi;

//Cara ked Dua

// import React, { useState } from 'react';

// function RegistrationForm() {
//     const [data, setData] = useState({
//         fullName: '',
//         email: '',
//         password: '',
//         address: '',
//         birthdate: '',
//         gender: '',
//         skills: [],
//     });

//     const handleChange = (event) => {
//         let value = event.target.value;

//         if (event.target.name === 'skills') {
//             if (event.target.checked) {
//                 setData({
//                     ...data,
//                     skills: [...data.skills, event.target.value],
//                 });
//             } else {
//                 setData({
//                     ...data,
//                     skills: data.skills.filter((skill) => skill !== value),
//                 });
//             }
//         } else {
//             setData({
//                 ...data,
//                 [event.target.name]: value,
//             });
//         }
//     };

//     const handleSubmit = () => {
//         alert(`Data diri Anda:
//         - Nama : ${data.fullName},
//         - Email: ${data.email},
//         - Password: ${data.password},
//         - Alamat: ${data.address},
//         - Tanggal Lahir: ${data.birthdate},
//         - Jenis Kelamin: ${data.gender},
//         - Keahlian: ${data.skills}
//       `);
//     };

//     console.log(data.skills);
//     console.log(data.gender);

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <input
//                     type='text'
//                     name='fullName'
//                     id='fullName'
//                     placeholder='Nama Lengkap'
//                     value={data.fullName}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <input
//                     type='text'
//                     name='email'
//                     id='email'
//                     placeholder='Email'
//                     value={data.email}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <input
//                     type='text'
//                     name='password'
//                     id='password'
//                     placeholder='Kata Sandi'
//                     value={data.password}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <textarea
//                     name='address'
//                     id='address'
//                     placeholder='Alamat'
//                     value={data.address}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <label htmlFor='birthdate'>Birthday:</label>
//                 <input
//                     type='date'
//                     name='birthdate'
//                     id='birthdate'
//                     value={data.birthdate}
//                     onChange={handleChange}
//                 />
//             </div>
//             <div>
//                 <input
//                     type='radio'
//                     name='gender'
//                     id='male'
//                     value='male'
//                     onChange={handleChange}
//                 />
//                 <label htmlFor='male'>Pria</label>
//                 <input
//                     type='radio'
//                     name='gender'
//                     id='female'
//                     value='female'
//                     onChange={handleChange}
//                 />
//                 <label htmlFor='male'>Wanita</label>
//             </div>
//             <div>
//                 <input
//                     type='checkbox'
//                     name='skills'
//                     id='coding'
//                     value='programming'
//                     onChange={handleChange}
//                 />
//                 <label htmlFor='coding'>Ngoding</label>
//                 <input
//                     type='checkbox'
//                     name='skills'
//                     id='design'
//                     value='design'
//                     onChange={handleChange}
//                 />
//                 <label htmlFor='design'>Mendesain</label>
//                 <input
//                     type='checkbox'
//                     name='skills'
//                     id='gaming'
//                     value='gaming'
//                     onChange={handleChange}
//                 />
//                 <label htmlFor='coding'>Main game</label>
//             </div>
//             <input type='submit' value='Daftar' />
//         </form>
//     );
// }

// export default RegistrationForm;
