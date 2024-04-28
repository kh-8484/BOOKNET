import aboutImg from "../../../static/images/about_img.png";
import bookingImg from "../../../static/images/share.png";
import rewardsImg from "../../../static/images/cup.png";
import realTimeImg from "../../../static/images/global.png";
import communityImg from "../../../static/images/people.png";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="container">
        <div className="about-container">
          <div className="about-section m-b-9">
            <div className="about-title font-Poppins-SemiBold-600-normal m-b-5">
              About us
            </div>

            <div className="about-sub-container">
              <div className="about-sub-title font-Poppins-SemiBold-600-normal">
                At Booknet.io, we're passionate about revolutionizing sports
                venue bookings while ensuring you're rewarded every step of the
                way. With exciting incentives like cashback offers, future
                booking discounts, and exclusive perks, every reservation you
                make through us not only enhances your experience but also
                boosts your savings. Join us and experience the thrill of
                booking your perfect sports venue with rewarding benefits.
              </div>
              <img src={aboutImg} className="about-img" alt="img" />
            </div>
          </div>

          <div className="provide-section p-6 m-b-9">
            <div className="font-Poppins-SemiBold-600-normal provide-title p-b-5">
              We Provide
            </div>
            <div className="provide-img-section font-Poppins-Bold-700-normal">
              <div className="provide-img-container">
                <div className="provide-img-wrapper">
                  <img src={bookingImg} alt="icon" className="provide-img" />
                </div>
                <div className="provide-img-title font-Poppins-Bold-700-normal">
                  Seamless Booking Experience
                </div>
              </div>
              <div className="provide-img-container">
                <div className="provide-img-wrapper">
                  <img src={rewardsImg} alt="icon" className="provide-img" />
                </div>
                <div className="provide-img-title font-Poppins-Bold-700-normal">
                  Rewards Program
                </div>
              </div>
              <div className="provide-img-container">
                <div className="provide-img-wrapper">
                  <img src={realTimeImg} alt="icon" className="provide-img" />
                </div>
                <div className="provide-img-title font-Poppins-Bold-700-normal">
                  Realtime Availability
                </div>
              </div>
              <div className="provide-img-container">
                <div className="provide-img-wrapper">
                  <img src={communityImg} alt="icon" className="provide-img" />
                </div>
                <div className="provide-img-title font-Poppins-Bold-700-normal">
                  Community Engagement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
