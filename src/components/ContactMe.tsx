"use client";
import React, { useState } from "react";
import { SiAxios } from "react-icons/si";
import axios from "axios";
// import Popup from "./ui/popup"

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function sendEmailData(e: any) {
    e.preventDefault();

    const sendData = await axios.post("/api/sending-emails", {
      name,
      email,
      subject,
      message,
    });
  }
  return (
    <main className="mx-auto h-screen flex items-center justify-center bg-black">
      <section className=" text-white p-8 rounded-lg shadow-lg w-full ">
        <form onSubmit={sendEmailData}>
          <div className="mb-4">
            <label htmlFor="FullName" className="block mb-1">
              FullName
            </label>
            <input
              required
              type="text"
              id="FullName"
              name="FullName"
              className="w-full px-4 py-2 rounded-md bg-black my-4 border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">E-mail</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-md bg-black my-4 border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Subject" className="block mb-1">
              Subject
            </label>
            <input
              required
              type="text"
              name="Subject"
              id="Subject"
              className="w-full px-4 py-2 rounded-md bg-black my-4 border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Message">Message</label>
            <textarea
              required
              className="w-full px-4 py-2 rounded-md bg-black my-4 border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder=" feel free to reach out to me "
              name="Message"
              id="Message"
              rows={4}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-md focus:outline-none">
            Submit
          </button>
        </form>
        {/* <Popup/> */}
      </section>
    </main>
  );
};

export default ContactMe;
