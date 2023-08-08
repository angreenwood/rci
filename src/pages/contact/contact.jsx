import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { NetlifyForm, Honeypot } from "react-netlify-forms";
import "./contact.scss";

const Contact = () => (
  <NetlifyForm name="Contact" action="/thanks" honeypotName="bot-field">
    {({ handleChange, success, error }) => (
      <>
        <Honeypot />
        {success && <p>Thanks for contacting us!</p>}
        {error && (
          <p>Sorry, we could not reach our servers. Please try again later.</p>
        )}
        <section className="content-background dark:bg-gray-900 h-screen">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="font-light text-black sm:text-xl text-xl text-center dark:text-gray-400 pb-10 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            />
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-5"
              >
                Message:
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                rows="4"
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>
            <button
              type="submit"
              className="bg-transparent contact-btn font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5"
            >
              Submit
            </button>
          </div>
        </section>
      </>
    )}
  </NetlifyForm>
);

export default Contact;
