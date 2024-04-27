"use client";
import React from "react";

const ContactMe = () => {
  return (
    <main className=" container mx-auto h-screen flex items-center justify-center ">
      <section className="bg-black text-white p-8 rounded-lg shadow-lg w-full ">
        <form action="">
          <div className="mb-4">
            <label htmlFor="FullName" className="block mb-1">
              FullName
            </label>
            <input
              type="text"
              id="FullName"
              name="FullName"
              className="w-full px-4 py-2 rounded-md bg-black my-4 border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-md bg-black my-4 border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Subject" className="block mb-1">
              Subject
            </label>
            <input
              type="text"
              name="Subject"
              id="Subject"
              className="w-full px-4 py-2 rounded-md bg-black my-4 border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Subject"
            />
          </div>
          <div>
            <label htmlFor="Message">Message</label>
            <textarea
              className="w-full px-4 py-2 rounded-md bg-black my-4 border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder=" feel free to reach out to me "
              name="Message"
              id="Message"
              rows={4}
            ></textarea>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-md focus:outline-none">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactMe;
