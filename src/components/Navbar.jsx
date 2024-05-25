import React from "react";
import { IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <div className="flex flex-row justify-between text-white py-5 w-10/12 mx-auto">
        <NavLink to="/">
          <img src="../logo.png" className="h-14" alt="" />
        </NavLink>
        <div className="flex items-center gap-4 text-lg">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              {cart.length > 0 && (
                <div className="bg-green-500 h-3 w-3 rounded-full absolute -top-1 -right-2 text-sm animate-bounce flex items-center justify-center p-2">
                  <span>{cart.length}</span>
                </div>
              )}
              <IoCart className="text-2xl" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
