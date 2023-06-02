import { useEffect, useState } from "react";

const ContactAdder = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const onClickHandler = () => {
    const contactData = {
      name,
      age,
      address,
    };
    console.log(contactData);
  };

  useEffect(() => {
    console.log("I am tiggered");
  }, [name, age]);

  return (
    <>
      Contact Adder:
      <br />
      <input
        style={{ margin: 5 }}
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        style={{ margin: 5 }}
        type="number"
        value={age}
        placeholder="Enter your age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <input
        style={{ margin: 5 }}
        type="text"
        value={address}
        placeholder="Enter your address"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <br />
      <button style={{ margin: 5 }} onClick={onClickHandler}>
        Click me
      </button>
    </>
  );
};
export default ContactAdder;
