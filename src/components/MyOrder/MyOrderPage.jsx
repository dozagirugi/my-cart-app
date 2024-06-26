import "./MyOrderPage.css";
import Table from "../Common/Table";

import React from "react";

const MyOrderPage = () => {
  return (
    <section className="align_center myorder_page">
      <Table headings={["내 주문", "상품들", "결제 금액", "배송 현황"]}>
        <tbody>
          <tr>
            <td>1</td>
            <td>iPhone, 보조배터리</td>
            <td>1,250,000</td>
            <td>배송 중</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default MyOrderPage;
