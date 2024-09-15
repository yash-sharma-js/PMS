import React from "react";
import logo from "./Landing_page_img/logo.jpg";
import preview from "./Landing_page_img/preview.jpg";
import feature from "./Landing_page_img/feature.png";
import companies from "./Landing_page_img/companies.png";

const LandingPage = () => {
  return (
    <div>
      <header className="white text-black py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src={logo} alt="Logo" className="w-52 h-auto" />
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-black hover:text-gray-300">
            Login
          </a>
          <a href="#" className="text-black hover:text-gray-300">
            Signup
          </a>
        </nav>
      </header>

      <section
        className="text-white py-16"
        style={{ backgroundColor: "#4b064b" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-left space-y-4 md:space-y-6 ml-20">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 leading-snug"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Made for People. <br /> Built for Productivity.
              </h1>
              <p
                className="text-md sm:text-lg mb-6 md:mb-8 leading-relaxed"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <div className="flex justify-start space-x-4 mb-4">
                <a
                  href="#"
                  className="bg-white font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 flex items-center justify-center"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    color: "#541554",
                  }}
                >
                  SIGN UP WITH EMAIL
                </a>
                <a
                  href="#"
                  className="bg-white font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 flex items-center justify-center"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    backgroundColor: "#4285F4",
                  }}
                >
                  <img
                    src="https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png"
                    alt="Google"
                    className="w-6 h-6 mr-2 bg-white"
                  />
                  SIGN UP WITH GOOGLE
                </a>
              </div>
              <p
                className="text-md sm:text-lg mt-2 md:mt-4"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Taskhub is free to try for as long as you'd like.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="w-full max-w-sm mr-20">
                <img
                  src={preview}
                  alt="Taskhub Preview"
                  className="w-full h-auto object-contain rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 pt-16">
        <div className="container mx-auto text-center px-4">
          <p className="text-gray-900 text-2xl">
            TRUSTED BY COMPANIES ALL OVER THE WORLD
          </p>
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mt-4">
            {/* <img src={companies} alt="" /> */}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Our Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Collaborate Seamlessly
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Enhance teamwork with real-time collaboration tools that allow
                your team to work together effortlessly, no matter their
                location. Share updates instantly, delegate tasks, and track
                progress all in one place. With live notifications and
                integrated file sharing, everyone stays aligned and productive.
                Collaborate, communicate, and achieve more together.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Easy Task Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Organize, prioritize, and track tasks effortlessly with our
                intuitive task management tools. Assign tasks, set deadlines,
                and monitor progress in real time, all from one central
                platform. Stay focused with visual task boards and reminders to
                ensure nothing falls through the cracks. Manage your workload
                with ease and boost productivity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Boost Productivity</h3>
              <p className="text-gray-700 leading-relaxed">
                To boost productivity, use tools that streamline workflows and
                enhance teamwork. Project management tools like Asana and Trello
                keep tasks organized and track progress. Communication platforms
                such as Slack and Microsoft Teams improve messaging and file
                sharing. Time management apps like Toggl and RescueTime offer
                insights into time use, helping with prioritization.
                Additionally, automation tools like Zapier save time by
                connecting and automating tasks across different apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={feature}
              alt="Taskhub Feature Preview"
              className="w-full h-auto object-contain bg-white"
            />
          </div>
          <div className="text-left">
            <p className="text-yellow-500 font-semibold mb-2">Business Tools</p>
            <h2 className="text-4xl font-bold text-black mb-2">
              Useful Features
            </h2>
            <h3 className="text-xl font-bold text-purple-600 mb-6">
              Team Management
            </h3>
            <p className="text-gray-600 mb-6">
              Our tools make team management effortless, allowing you to assign
              tasks, monitor progress, and keep everyone aligned in real-time.
              With features like role-based access and streamlined communication
              channels, your team can work efficiently and stay focused on their
              goals.
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> 99% Survey Report
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Trusted By Teams
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Self-Services
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 mr-7 ml-7">
        <div className="container mx-auto text-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold" style={{ color: "#4b064b" }}>
                200+
              </h3>
              <p>Companies onboarded</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold" style={{ color: "#4b064b" }}>
                18K+
              </h3>
              <p>Active users</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold" style={{ color: "#4b064b" }}>
                23K+
              </h3>
              <p>Tasks completed daily</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto text-center px-4">
          <p className="text-yellow-500 font-semibold mb-2">Testimonials</p>
          <h2 className="text-4xl font-bold text-black mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.90o6OQ7-jGqViljHVhhfmQHaE8&pid=Api&P=0&h=180"
                  alt="John Scot"
                  className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-1">John Scot</h3>
              <p className="text-yellow-500 font-medium mb-4">CEO</p>
              <p className="text-gray-700 leading-relaxed">
                "The tools provided have greatly enhanced our team's
                productivity. The ease of use and the seamless integration with
                our existing systems have made a noticeable difference in our
                workflow."
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.yRxPqLqW8oPUFF8m8k4eNwHaFj&pid=Api&P=0&h=180"
                  alt="Jane Doe"
                  className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400"
                />
              </div>
              <h3 className="text-2xl font-bold text-black mb-1">Jane Doe</h3>
              <p className="text-yellow-500 font-medium mb-4">
                Project Manager
              </p>
              <p className="text-gray-700 leading-relaxed">
                "I love how intuitive the task management system is. It has made
                tracking and organizing our projects a breeze, and the real-time
                collaboration features are a game-changer for our remote teams."
              </p>
            </div>
          </div>
        </div>
      </section>
      <h1>hello</h1>
    </div>
  );
};

export default LandingPage;
