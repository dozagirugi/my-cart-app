import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import "./LoginPage.css";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = (formData) => console.log(formData);

  // const passwordRef = useRef(null);
  return (
    <section className="align_center form_page">
      <form onSubmit={handleSubmit(submitData)} className="authentication_form">
        <h2>로그인 폼</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form_text_input"
              placeholder="이메일"
              {...register("email", { required: "이메일을 입력해주세요" })}
            />
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "패스워드를 입력해주세요",
                minLength: { value: 4, message: "패스워드는 최소 4자 이상" },
              })}
              id="password"
              className="form_text_input"
              placeholder="패스워드"
            />
            {errors.password && (
              <em className="form_error">{errors.password.message}</em>
            )}
            {/* <button
              type="button"
              onClick={() => console.log(passwordRef.current)}
            >
              비밀번호 숨기기
            </button>
            <button
              type="button"
              onClick={() => console.log((passwordRef.current.type = "text"))}
            >
              비밀번호 보이게
            </button> */}
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
