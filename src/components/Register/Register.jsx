import "../Register/style.css"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function Register() {
  const [userForm, setUserForm] = useState({
    Name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [userFormErrs, setUserFormErrs] = useState({
    nameErr: null,
    emailErr: null,
    usernameErr: null,
    passwordErr: null,
    confirmpasswordErr: null,
  });

  const handleFormChange = (event) => {
    // console.log(event.target.id, event.target.value);
    if (event.target.id === "name") {
      setUserForm({
        ...userForm,
        name: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        nameErr:
          event.target.value.length === 0
           ? "This field is required"
           : event.target.value.length < 3
           ? "Min. length is 3 characters"
           : null,
      });
    } else if (event.target.id === "email") {
      setUserForm({
        ...userForm,
        email: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        emailErr:
          event.target.value.length === 0
            ? "This field is required"
            : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value) == false
            ? "Please enter a valid Email"
            : null,
      });
    } else if (event.target.id === "username") {
      setUserForm({
        ...userForm,
        username: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        usernameErr:
          event.target.value.length === 0
            ? "This field is required"
            : /[\s]/.test(event.target.value)
            ? "Username shouldn't contain a space"
            : null,
      });
    } else if (event.target.id === "password") {
      setUserForm({
        ...userForm,
        password: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        passwordErr:
          event.target.value.length === 0
            ? "This field is required"
            : /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(event.target.value) == false
            ? "Weak Password"
            : null,
      });
    } else if (event.target.id === "confirmpassword") {
      setUserForm({
        ...userForm,
        confirmpassword: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        confirmpasswordErr:
        event.target.value.length === 0
          ? "This field is required"
          : event.target.value != userForm.password
          ? "Password doesn't match"
          : null,
      });
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      !userFormErrs.usernameErr &&
      !userFormErrs.ageErr &&
      !userFormErrs.positionErr
    ) {
      console.log(userForm);
    }
  };

  return (
    <Container id="main-container" className="d-grid h-100">
    <Form onSubmit={handleSubmitForm}
     id="sign-in-form" className="text-center p-3 w-100">
      <img className="mb-4 bootstrap-logo" 
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" 
            alt="Bootstrap 5" />
      <h1 className="mb-3 fs-3 fw-normal">Please Register !</h1>
      <Form.Group >
      <Form.Label>Name</Form.Label>
        <Form.Control type="text" 
          onChange={handleFormChange}
         size="lg" placeholder="Name" autoComplete="name"
         id="name"
        className={`form-control ${
          userFormErrs.usernameErr ? "border-danger" : ""
        }`} />
      </Form.Group>
      <div id="nameHelp" className="form-text text-danger">
          {userFormErrs.nameErr}
        </div>
      <Form.Group >
      <Form.Label>Email address</Form.Label>
        <Form.Control
     type="email"
     size="lg"
     value={userForm.email}
     onChange={handleFormChange}
     id="email"
     placeholder="Email address"
     autoComplete="username"
     className={`${userFormErrs.emailErr ? "border-danger" : ""}`} />
          </Form.Group>
          <div id="emailelp" className="form-text text-danger">
          {userFormErrs.emailErr}
        </div>
      <Form.Group >
      <Form.Label>userName </Form.Label>
        <Form.Control type="text" size="lg"
         placeholder="userName" autoComplete="username" 
         id="username"
         value={userForm.username}
         onChange={handleFormChange}
         className={`${userFormErrs.usernameErr ? "border-danger" : ""}`} />
      </Form.Group>
      <div id="usernameHelp" className="form-text text-danger">
          {userFormErrs.usernameErr}
        </div>
      <Form.Group className="mb-3" >
      <Form.Label>password</Form.Label>
        <Form.Control type="password"
         size="lg" placeholder="Password" autoComplete="current-password" 
         id="password"
          value={userForm.password}
          onChange={handleFormChange}
         className={`${userFormErrs.passwordErr ? "border-danger" : ""}`} />
      </Form.Group>
      <div id="passwordHelp" className="form-text text-danger">
          {userFormErrs.passwordErr}
        </div>
      <Form.Group className="mb-3" >
      <Form.Label>confirm password</Form.Label>
        <Form.Control type="password" size="lg"
          id="confirmPassword"
          value={userForm.confirmpassword}
          onChange={handleFormChange}
         placeholder="confirmPassword" autoComplete="current-password" 
         className={`${userFormErrs.confirmpasswordErr ? "border-danger" : ""}`} />
      </Form.Group>
      <div id="confirmpasswordHelp" className="form-text text-danger">
          {userFormErrs.confirmpasswordErr}
        </div>
      <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
        <Form.Check label="Remember me" />
      </Form.Group>
      <div className="d-grid">
        <Button variant="primary" size="lg">Register</Button>
      </div>
      <p className="mt-5 text-muted">&copy; 2021-2022 </p>
    </Form>
  </Container>
  );
}

export default Register;
