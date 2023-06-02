import "./app.css";
import Contact from "./component/Contact.js";
import React from "react";
import ContactAdder from "./component/ContactAdder";
const App = () => {
  const contacts = [
    {
      name: "sudin",
      age: "20",
      address: "kawasoti",
    },
    {
      name: "asbin",
      age: "21",
      address: "kathmandu",
    },
    {
      name: "sandhya",
      age: "19",
      address: "kanpur",
    },
  ];
  return (
    <>
      <div className="contact_adder">
        <ContactAdder />
      </div>
      <div className="contact_list">
        <h3>Contact list:</h3>

        {contacts.map((data) => (
          <Contact data={data}></Contact>
        ))}
      </div>
    </>
  );
};

export default App;
