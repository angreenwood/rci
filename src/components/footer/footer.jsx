import React from "react";

function Footer() {
  return (
    <footer className="dark:bg-gray-800 text-center footer">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 lg:mr-5">
          © 2023{" "}
          <a href="https://somesit.com/" className="hover:underline">
            RCI Structural Engineering™
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 justify-center">
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <p className="text-gray-500 dark:text-gray-400 mx-3">|</p>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Licensing
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
