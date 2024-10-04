import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    e.target.reset();
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center px-4 max-w-4xl">
        <p className="text-yellow-500 font-semibold mb-2">Contact Us</p>
        <h2 className="text-3xl font-bold mb-8">Get In Touch With Us</h2>

        <div className="bg-gray-100 p-5 rounded-lg shadow-lg text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4 text-left">
              <h3 className="text-xl font-bold text-center mb-4">
                Contact Information
              </h3>
              <div className="flex items-center mb-2">
                <span className="mr-3 text-black text-lg">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <p className="text-md">+91 91720 71820</p>
              </div>

              <div className="flex items-center mb-2">
                <span className="mr-3 text-black text-lg">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p className="text-md">
                  SINDHI COLONY NANAK NAGAR, BHUSAWAL(JALGAON) NEAR BIG SEVA
                  MANDAL
                </p>
              </div>

              <div className="flex items-center mb-2">
                <span className="mr-3 text-black text-lg">
                  <i className="fas fa-clock"></i>
                </span>
                <p className="text-md">
                  Mon – Fri: 10 am – 8 pm, Sat, Sun: Closed
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-center mb-4">
                Send a Message
              </h3>
              {formSubmitted && (
                <div className="bg-green-100 text-green-700 p-4 mb-4 rounded-lg">
                  Form submitted successfully!
                </div>
              )}
              <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                  <label className="text-md">Your Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="col-span-2 w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                  <label className="text-md">Your Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="col-span-2 w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                  <label className="text-md">Your Message</label>
                  <textarea
                    placeholder="Your Message"
                    className="col-span-2 w-full p-2 border rounded h-24"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-400 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
