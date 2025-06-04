import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Discover the latest trends in fashion at unbeatable prices. Shop now
            for stylish clothing, accessories, and more!
          </p>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/delivery'><li>Delivery</li></Link>
            <Link to='/privacy'><li>Privacy Policy</li></Link>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+123-456-789</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright @2024 forever.com - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
