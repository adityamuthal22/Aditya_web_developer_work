import { useState } from "react";

const initFormData = {
  name: "",
  Gender: "Male",
  Role: "Engineer",
  status: true
};

export default function Forms() {
  const [formdata, setFormdata] = useState(initFormData);

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;

    const valueToUpdate = type === "checkbox" ? checked : value;

    console.log(`update ${name} with ${valueToUpdate}`);

    setFormdata({
      ...formdata,
      [name]: valueToUpdate
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>WE FORM</h1>
        <div>
          <input
            name="name"
            placeholder="Enter your Name"
            value={formdata.name}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <select
            name="Gender"
            placeholder="Gender"
            value={formdata.Gender}
            defaultValue={formdata.Gender}
            onChange={handleChange}
          >
            <option key="Male">Male</option>
            <option key="Female">Female</option>
          </select>
        </div>
        <div>
          <select
            name="Role"
            placeholder="Role"
            value={formdata.Role}
            defaultValue={formdata.Role}
            onChange={handleChange}
          >
            <option key="Engineer">Engineer</option>
            <option key="Web Developer">Web developer</option>
          </select>
        </div>
        <div>
          <input
            type="checkbox"
            name="status"
            onChange={handleChange}
            checked={formdata.status}
          />
          <label>Marital status</label>
        </div>
        <div>
          <input type="submit" />
        </div>
        <ul>
          <li>Name:- {formdata.name}</li>
          <li>Gender:- {formdata.Gender}</li>
          <li>Role:- {formdata.Role}</li>
        </ul>
      </div>
    </form>
  );
}
