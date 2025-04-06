import React from "react";

const HomePage = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Header Section */}
   

      {/* Main Content Section */}
      <main className="px-8 py-[60px] min-h-screen justify-center flex items-center">
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
        {/* <section className="flex justify-between mt-16 space-x-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center">
            <h2 className="text-2xl font-semibold mb-4">Feature 1</h2>
            <p className="text-gray-600">Discover more about what we offer.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center">
            <h2 className="text-2xl font-semibold mb-4">Feature 2</h2>
            <p className="text-gray-600">
              Learn about the benefits of our services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center">
            <h2 className="text-2xl font-semibold mb-4">Feature 3</h2>
            <p className="text-gray-600">
              Join us and start achieving your goals.
            </p>
          </div>
        </section> */}
      </main>

      {/* Footer Section */}
    
    </div>
  );
};

export default HomePage;
