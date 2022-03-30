import "../Login/style.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
// import { validEmail, validPassword } from './regex.js';

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailErr: null,
    passwordErr: null,
  });
  const changeData = (e) => {
    // console.log(e.target.name,e.target.value)
    if (e.target.name === "email") {
      setUserData({
        ...userData,
        email: e.target.value,
      });
      setErrors({
        ...errors,
        emailErr:
          e.target.value.length === 0
            ? "This field is required"
            : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value) == false
            ? "Please enter a valid email"
            : null,
        
      });
    } else {
      setUserData({
        ...userData,
        password: e.target.value,
      });
      setErrors({
        ...errors,
        passwordErr:
        e.target.value.length === 0
          ? "This field is required"
          : /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(e.target.value) == false
          ? "Weak Password"
          : null,
      });
    }
  };
  const submitUserDataForm = (e)=>{
    e.preventDefault();
    // if(!errors.emailErr && !errors.passwordErr){
    //   //send API request
    //   console.log(userData)
    // }

  //    const password_show_hide=() => {
  //   var x = document.getElementById("password");
  //   var show_eye = document.getElementById("show_eye");
  //   var hide_eye = document.getElementById("hide_eye");
  //   hide_eye.classList.remove("d-none");
  //   if (x.type === "password") {
  //     x.type = "text";
  //     show_eye.style.display = "none";
  //     hide_eye.style.display = "block";
  //   } else {
  //     x.type = "password";
  //     show_eye.style.display = "block";
  //     hide_eye.style.display = "none";
  //   }
  // }
  }
  return (
    <Container id="main-container" className="d-grid h-100">
      <Form onSubmit={(e) => submitUserDataForm(e)}
      id="sign-in-form" className="text-center p-3 w-100">
        <img
          className="mb-4 bootstrap-logo"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt="Bootstrap 5"
        />
        <h1 className="mb-3 fs-3 fw-normal">Please sign in !</h1>
        <Form.Group controlId="sign-in-email-address">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            size="lg"
            value={userData.email}
            onChange={(e) => changeData(e)}
            name="email"
            placeholder="Email address"
            autoComplete="username"
            className={`${errors.emailErr ? "border-danger" : ""}`}
          />
        </Form.Group>
        <div className="form-text text-danger">{errors.emailErr}</div>
        <br />
        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            size="lg"
            value={userData.password}
            onChange={(e) => changeData(e)}
            name="password"
            className={`${errors.passwordErr ? "border-danger" : ""}`}
            placeholder="Password"
            autoComplete="current-password"
          />
        </Form.Group>
        {/* <div class="input-group-append">
                <span class="input-group-text" onclick="password_show_hide();">
                  <i class="fas fa-eye" id="show_eye"></i>
                  <i class="fas fa-eye-slash d-none" id="hide_eye"></i>
                </span>
              </div> */}
        <div className="form-text text-danger">{errors.passwordErr}</div>
        <br />
        <Form.Group
          className="d-flex justify-content-center mb-4"
          controlId="remember-me"
        >
          <Form.Check label="Remember me" />
        </Form.Group>
        <div className="d-grid">
          <Button type="submit" 
          disabled={errors.emailErr || errors.passwordErr}
          variant="primary" size="lg">
            Login
          </Button>
        </div>
        <p className="mt-5 text-muted">&copy; 2021-2022 \</p>
      </Form>
    </Container>
  );
}

export default Login;


// another method using Formik
// import { useState } from "react";
// import { useFormik } from "formik";

// const initialValues = {
//   email: "",
//   password: "",
// };

// const onSubmit = (values) => {
//   console.log(values);
// };

// const validate = (values) => {
//   let errors = {};
//   if (!values.email) {
//     errors.email = "This field is required";
//   } else if (
//     !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
//   ) {
//     errors.email = "Invalid Email format";
//   }

//   if (!values.password) {
//     errors.password = "This field is required";
//   } else if (values.password.length < 8) {
//     errors.password = "Password should be more than 8 chars";
//   }
//   return errors;
// };

// function Login() {

//   const [show, setShow] = useState(true);

//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validate,
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">
//           email
//         </label>
//         <input
//           type="email"
//           className="form-control"
//           id="email"
//           aria-describedby="emailHelp"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.errors.email && formik.touched.email ? (
//           <div id="emailelp" className="form-text text-danger">
//             {formik.errors.email}
//           </div>
//         ) : null}
//       </div>

//       <div className="mb-3 ">
//         <label htmlFor="password" className="form-label">
//           password
//         </label>
//         <div className="input-group">
//           <input
//             type={show?"text":"password"}
//             className="form-control"
//             id="password"
//             aria-describedby="passwordHelp"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />
//           <div class="input-group-append">
//             <button onClick={()=>setShow(!show)} class="btn btn-outline-secondary" type="button">
//               Show/Hide
//             </button>
//           </div>
//         </div>

//         {formik.errors.password && formik.touched.password ? (
//           <div id="passwordHelp" className="form-text text-danger">
//             {formik.errors.password}
//           </div>
//         ) : null}
//       </div>

//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// }

// export default Login;


 