import Button from "../../Button/Button";
import heroImg from "../../../static/images/hero_img.png";
import Input from "../../Input/Input";
import { useState } from "react";

const Hero = () => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="hero-wrapper">
      <div className="container">
        <div className="hero-container">
          <div className="hero-sub-container m-b-8">
            <div className="hero-left-container p-t-4 p-b-4 p-l-5 p-r-5">
              <div className="hero-title font-Poppins-Regular-regular-normal">
                Hi, There!
              </div>
              <div className="hero-sub-title font-Poppins-Bold-700-normal">
                Book Turfs Online and Earn Amazing Rewards.
              </div>
              <div className="hero-sub-title-2 font-Poppins-SemiBold-600-normal">
                We provides you with seamless experience of booking your turf
                online and manage your bookings.
              </div>
              <Button
                title="Book Now"
                btn="secondary"
                className="hero-book-now-btn font-Poppins-Medium-500-normal"
              />
            </div>
            <img src={heroImg} alt="img" className="hero-img" />
          </div>
          <div className="hero-search-container m-b-8">
            <div className="hero-search-title font-Poppins-SemiBold-600-normal m-b-7">
              Play sports near you
            </div>
            <div className="hero-search-input-container">
              <Input
                name="search"
                placeholder="Search for sports venues or locality"
                className="hero-search-input font-Poppins-Bold-700-normal"
                value={search}
                onChange={handleChange}
              />
              <Button
                title="Search"
                btn="primary"
                className="hero-search-btn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
