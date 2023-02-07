import { svg } from "../../utils";
import SVG from "react-inlinesvg";
import {images} from './../../utils/images'
import { useState } from "react";
import { Colors } from "../../../public/assets/colors";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import React from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isTogglePassword, setTogglePassword] = useState(false);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event?.target.value });
  };
  const submit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="row">
        <div className=" col-6" style={{ height: "100%" }}>
          <div
            className="signup authFlex"
            style={{ backgroundImage: `url(${images.loginbg})` }}
          >
            <div className="authLogo signup__logo">
              <img className="" src={images.logo} alt="logo" />
            </div>

            <div className="signup__title">
              <h1 className="auth__title">Sign up</h1>
            </div>

            <form className="auth__form" onSubmit={submit}>
              <div className="form-group">
                <div className="form-group__svg">
                  <SVG src={svg.email} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => onChange(event)}
                />
              </div>
              <div className="form-group">
                <div className="form-group__svg">
                  <SVG src={svg.key} />
                </div>
                <input
                  type={`${!isTogglePassword ? "password" : "text"}`}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => onChange(event)}
                />
                <div onClick={() => setTogglePassword(!isTogglePassword)}>
                  {!isTogglePassword ? (
                    <AiOutlineEyeInvisible color="#fff" size={22} style={{cursor:'pointer'}} />
                  ) : (
                    <AiOutlineEye color="#fff" size={22} style={{cursor:'pointer'}}/>
                  )}
                </div>
              </div>

              <div className="form__button">
                <button type="submit">Log in</button>
              </div>
            </form>

            <div className="auth__or">
              <h2 className="hr-lines">OR</h2>
            </div>

            <div className="auth__with">
              <div className="auth__with--title">
                <h1>Sign up with </h1>
              </div>
              <div className="auth__with--img">
                <div>
                  <SVG src={svg.linkdeen} />
                </div>
                <div className="auth__with--img-web3">
                  <SVG src={svg.web3} />
                </div>
              </div>
              <p className="auth__with--account">
                Have an account?
                <span style={{ color: Colors.secondry }} onClick={handleClick}>
                  {" "}
                  Sign up
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-6" style={{ height: "100%" }}>
          <img
            className="signup__image"
            src={images.loginImg}
            alt="singup img"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;