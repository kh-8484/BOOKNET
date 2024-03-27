import { useState } from "react";
import cricketImg from "../../../static/images/query_bg_top.png";
import Button from "../../Button/Button";
import Input from "../../Input/Input";

const Queries = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="query-wrapper">
      <div className="container">
        <div className="query-container">
          <img src={cricketImg} alt="img" />
          <div className="query-sub-container">
            <div className="query-title font-Poppins-Bold-700-normal">
              "Write to us for Queries"
            </div>
            <div className="query-sub-title font-Poppins-Medium-500-normal">
              Please fill in the form for any enquiries related to orders and
              shipping. <br /> We will get in touch with you within 24hours.
            </div>

            <Input
              name="name"
              placeholder="Enter your name"
              className="query-search-input font-Poppins-Regular-regular-normal m-tb-3"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              name="email"
              placeholder="Enter your e-mail"
              className="query-search-input font-Poppins-Regular-regular-normal "
              value={formData.email}
              onChange={handleChange}
            />
            <Button
              title="Send"
              btn="primary"
              className="query-snd-btn m-t-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queries;
