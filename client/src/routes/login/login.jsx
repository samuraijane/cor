import React from 'react'
import SVGImage, { AVATAR, FACEBOOK, GITHUB, GOOGLE, INSTAGRAM } from "../../components/svg/icons";

function Login() {
  return (
    <div>
      <h2>I am the Login page</h2>
      <SVGImage type={AVATAR} />
      <SVGImage type={FACEBOOK} />
      <SVGImage type={GITHUB} />
      <SVGImage type={GOOGLE} />
      <SVGImage type={INSTAGRAM} />
    </div>)
}

export default Login;
