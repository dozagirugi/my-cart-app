import "./SignupPage.css";

import { useForm } from "react-hook-form";

import user from "../../assets/user.webp";

const SingupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const submitData = (formData) => console.log(formData);

  return (
    <section className="align_center form_page">
      <form
        className="authentication_form signup_form"
        onSubmit={handleSubmit(submitData)}
      >
        <h2>회원가입 폼</h2>

        <div className="image_input_section">
          <div className="image_preview">
            <img src={user} />
          </div>
          <label className="image_laber">이미지 업로드</label>
          <input type="file" id="file-ip-1" className="image_input" />
        </div>

        <div className="form_inputs signup_form_input">
          <div>
            <label htmlFor="name">이름</label>
            <input
              id="name"
              className="form_text_input"
              type="text"
              placeholder="이름 입력"
              {...register("name", {
                required: "이름을 입력하세요",
                minLength: { value: 2, message: "2자 이상 입력해주세요" },
                maxLength: { value: 10, message: "10자 이하로 입력해주세요" },
              })}
            />
            {errors.name && errors.name.message}
          </div>

          <div>
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              className="form_text_input"
              type="email"
              placeholder="이메일 입력"
              {...register("email", { required: "이메일을 입력하세요" })}
            />
          </div>

          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              className="form_text_input"
              type="password"
              placeholder="패스워드 입력"
              {...register("password", {
                required: "패스워드를 입력하세요",
                minLength: { value: 5, message: "5자 이상 입력하세요" },
              })}
            />
            {errors.password && errors.password.message}
          </div>

          <div>
            <label htmlFor="cpassword">비밀번호 확인</label>
            <input
              id="password"
              type="password"
              className="form_text_input"
              placeholder="비밀번호 재입력"
              {...register("confirmPassword", {
                reauired: true,
                validate: (value) => {
                  if (watch("password") != value) {
                    return "패스워드가 맞지 않습니다";
                  }
                },
              })}
            />
            {errors.confirmPassword && errors.confirmPassword.message}
          </div>

          <div className="signup_textares_section">
            <label htmlFor="address">주소</label>
            <textarea
              id="address"
              className="input_textarea"
              placeholder="배송주소 입력"
              {...register("deliveryAddress", {
                required: " 배송주소는 필수 입력란 입니다",
                minLength: { value: 5, message: "5글자 이상 입력해주세요" },
              })}
            />
            {errors.deliveryAddress && errors.deliveryAddress.message}
          </div>
        </div>
        <button className="search_buttjon form_submit" type="submit">
          가입하기
        </button>
      </form>
    </section>
  );
};

export default SingupPage;
