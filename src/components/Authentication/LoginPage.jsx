import React from "react";
import { useRef } from "react";

import "./LoginPage.css";

const LoginPage = () => {
  const passwordRef = useRef(null);
  return (
    <section className="align_center form_page">
      <form className="authentication_form">
        <h2>로그인 폼</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form_text_input"
              placeholder="이메일"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              ref={passwordRef}
              id="password"
              className="form_text_input"
              placeholder="패스워드"
            />

            <button
              type="button"
              onClick={() => console.log(passwordRef.current)}
            >
              비밀번호 숨기기
            </button>
            <button
              type="button"
              onClick={() => (passwordRef.current.type = "text")}
            >
              비밀번호 보이게
            </button>
          </div>

          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
