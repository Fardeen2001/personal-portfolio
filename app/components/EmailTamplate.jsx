const EmailTamplate = (subject, message) => {
  console.log(subject, message);
  return (
    <>
      <h1>{subject}</h1>
      <p>Thankyou for contacting us!</p>
      <p>New message submitted: </p>
      <p>{message}</p>
    </>
  );
};

export default EmailTamplate;
