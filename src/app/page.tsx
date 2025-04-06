import React from "react";

const HomePage = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Header Section */}

      {/* Main Content Section */}
      <main className="px-8 py-[60px] min-h-screen ">
        {/* Hero Section */}
        <section className="text-center text-black py-16">
          <h1 className="text-6xl text-black font-bold mb-4">Welcome</h1>
          <p className="text-xl mb-8 text-black">
            Explore our services and get to know us better.
          </p>
          <button className="bg-black text-white py-2 px-6 rounded-lg text-lg transition duration-300">
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section className="flex justify-between mt-16 space-x-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 ">Feature 1</h2>
            <p className="text-gray-600">
              Discover more about what we offer with our innovative solutions
              designed to enhance your online presence. We blend modern design
              principles with cutting-edge technology to help your business
              thrive in a competitive digital world.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 ">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Feature 2</h2>
            <p className="text-gray-600">
              Learn about the benefits of our services, including faster load
              times, improved SEO performance, and a seamless user experience
              across all devices. Our solutions are tailored to meet the unique
              needs of your business and target audience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 ">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Feature 3</h2>
            <p className="text-gray-600">
              Join us and start achieving your goals with a strategic
              partnership that focuses on growth, innovation, and measurable
              results. Whether you're just starting out or looking to scale, we
              are committed to helping you succeed every step of the way.
            </p>
          </div>
        </section>
      </main>

      {/* Footer Section */}
    </div>
  );
};

export default HomePage;
