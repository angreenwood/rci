import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { SiBlueprint } from "react-icons/si";
import { Outlet, Link } from "react-router-dom";
import "./navbar.scss";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const handleLinkClick = () => {
    setOpenNav(false);
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small">
        <Link className="flex items-center" to="/" onClick={handleLinkClick}>
          Home
        </Link>
      </Typography>
      <Typography as="li" variant="small">
        <Link
          to="/about"
          className="flex items-center"
          onClick={handleLinkClick}
        >
          About Us
        </Link>
      </Typography>
      <Typography as="li" variant="small">
        <Link
          to="/contact"
          className="flex items-center"
          onClick={handleLinkClick}
        >
          Contact
        </Link>
      </Typography>
      <Outlet />
    </ul>
  );

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOpenNav(false);
      }}
    >
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 nav-div">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-normal"
          >
            <span className="nav-title">
              {" "}
              <Link
                to="/"
                className="flex items-center"
                onClick={handleLinkClick}
              >
                <SiBlueprint size={42} className="horn" /> RCI Engineering
              </Link>
            </span>
          </Typography>
          <div className="hidden lg:block">{navList}</div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 open-nav text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </OutsideClickHandler>
  );
}
