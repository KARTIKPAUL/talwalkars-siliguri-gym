import  logo  from "../../assets/image3.png";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  
  FaFacebook,

} from "react-icons/fa";

export default function FindUs() {
  return (
    <div className="text-gold min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 flex flex-col lg:items-start my-5 space-y-6">
            <h2 className="text-primary-500 text-3xl font-bold">Get in Touch With Us</h2>
            <h3 className="text-xl font-semibold text-[#5d0000]">Contact Us For Any Questions!</h3>
            <div className="mt-4 text-gray-100 space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-primary-500 text-2xl" />
                <div>
                  <p className="text-[#5d0000] font-bold text-lg">
                    <a href="tel:091440 16366">091440 16366</a>
                  </p>
                  <p className="text-black">Call us: Mon - Fri 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary-500 text-2xl" />
                <div>
                  <p className="text-lg font-bold text-[#5d0000]">Talwalkars siliguri </p>
                  <p className="text-black">
                  4th floor, Metro Heights, Sevoke Road, Opp. Club Town, Siliguri, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-500 text-2xl" />
                <div>
                  <p className="text-lg font-bold text-[#5d0000]">
                    <a href="mailto:talwalkarslg@gmail.com
">talwalkarslg@gmail.com
</a>
                  </p>
                  <p className="text-black">Drop us a line anytime!</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4 text-gray-500 text-2xl">
                <a href="https://www.instagram.com/talwalkars_sevoke_road_/?hl=en" className="hover:text-[#2f2484]"><FaInstagram /></a>
                <a href="https://www.facebook.com/talwalkarsgym/" className="hover:text-[#2f2484]"><FaFacebook /></a>
                {/* <a href="https://www.linkedin.com/company/vajjiram" className="hover:text-[#2f2484]"><FaLinkedin /></a> */}
              </div>
            </div>
          </div>

        {/* Right Section */}
        <div className="relative">
        <img
            src={logo}
           
            alt="Drink"
            className="rounded-lg shadow-lg"
          />
         
          
          <div className="absolute top-0 left-0 w-full h-full border-4 border-gold rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
