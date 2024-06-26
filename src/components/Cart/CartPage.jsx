import React from "react";

import "./CartPage.css";
import Table from "../Common/Table";
import QuantityInput from "../SingleProduct/QuantityInput";

import user from "../../assets/user.webp";
import remove from "../../assets/remove.png";

const CartPage = () => {
  return (
    <section className="align_center cart_page">
      <div className="align_center user_info">
        <img src={user} alt="user_profile" />

        <div>
          <h2 className="user_name">김도연</h2>
          <p className="user_email">happyallday12@naver.com</p>
        </div>
      </div>

      <Table headings={["상품", "가격", "구매수량", "총 금액", "상품삭제"]}>
        <tbody>
          <tr>
            <td>iPhone 14</td>
            <td>1,200,000 원</td>
            <td className="align_center table_quantity_input">
              <QuantityInput />
            </td>
            <td>1,200,000 원</td>
            <td>
              <img
                src={remove}
                alt="remove icon"
                className="cart_remove_icon"
              />
            </td>
          </tr>
        </tbody>
      </Table>

      <table className="cart_bill">
        <tbody>
          <tr>
            <td>총 금액</td>
            <td>1200,000 원</td>
          </tr>
          <tr>
            <td>배송비</td>
            <td>5,000 원</td>
          </tr>
          <tr className="cart_bill_final">
            <td>결제금액</td>
            <td>1,205,000 원</td>
          </tr>
        </tbody>
      </table>

      <button className="search_button checkout_button">결제하기</button>
    </section>
  );
};

export default CartPage;
