const Contact = (props) => {
  return (
    <>
      <div className="contact">
        {props.data.name}
        <br />
        {props.data.age}
        <br />
        {props.data.address}
      </div>
    </>
  );
};
export default Contact;
