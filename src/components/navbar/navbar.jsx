import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { Outlet, Link } from "react-router-dom";
import "./navbar.scss";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const handleLinkClick = () => {
    setOpenNav(false);
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6">
      <Typography as="li" variant="small">
        <Link
          className="flex items-center font-medium"
          to="/"
          onClick={handleLinkClick}
        >
          Home
        </Link>
      </Typography>
      <Typography as="li" variant="small">
        <Link
          to="/under-construction"
          className="flex items-center font-medium"
          onClick={handleLinkClick}
        >
          About
        </Link>
      </Typography>
      <Typography as="li" variant="small">
        <Link
          to="/under-construction"
          className="flex items-center font-medium"
          onClick={handleLinkClick}
        >
          Services
        </Link>
      </Typography>
      <Typography as="li" variant="small">
        <Link
          to="/under-construction"
          className="flex items-center font-medium"
          onClick={handleLinkClick}
        >
          Projects
        </Link>
      </Typography>
      <Typography as="li" variant="small">
        <Link
          to="/under-construction"
          className="flex items-center font-medium"
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
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 nav-div nav-stripe">
        <div className="container lg:ml-72 flex items-center justify-between text-blue-gray-900">
          <Typography
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <span className="nav-title">
              {" "}
              <Link
                to="/"
                className="flex items-center"
                onClick={handleLinkClick}
              >
                <img src="/rciLogo.svg" alt="RCI Logo" className="nav-logo" />
              </Link>
            </span>
          </Typography>
          <div className="hidden lg:block">{navList}</div>

          <IconButton
            variant="text"
            className="ml-auto h-10 w-10 open-nav text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <IoClose size="lg" /> : <IoMenu size="lg" />}
          </IconButton>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </OutsideClickHandler>
  );
}
