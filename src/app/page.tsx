import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
    {/* Header Section - Add <header> if needed */}
  
    {/* Main Content Section */}
    <main className="px-8 py-[64px] min-h-screen">
  
      {/* Hero Section */}
      <section className="text-center text-black py-16">
        <h1 className="text-6xl font-bold mb-4 text-black">
          Discover and Connect with Top Users
        </h1>
        <p className="text-xl mb-8 text-black">
          Browse profiles, find talented individuals, and build valuable connections within our community.
        </p>
        <Link
          href="/users"
          className="bg-black mt-5 pt-3 inline-block text-white py-3 px-6 rounded-lg text-lg transition duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          aria-label="Browse users and connect"
        >
          Get All Users
        </Link>
      </section>
  
      {/* Features Section */}
      <section className="flex flex-col md:flex-row justify-between mt-16 space-y-8 md:space-y-0 md:space-x-8 text-left">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Explore Diverse Profiles
          </h2>
          <p className="text-gray-600">
            {
              `Dive into a wide range of user profiles across different skills and industries. Whether you're looking for collaborators, experts, or inspiring individuals, you'll find them here.`
            }
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Easy Search and Filters
          </h2>
          <p className="text-gray-600">
            {
              `Quickly find the right users using our powerful search and filtering tools. Save time and connect efficiently based on expertise, interests, or location.`
            }
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Build Valuable Connections
          </h2>
          <p className="text-gray-600">
            {
              `Connect directly with users who match your goals. Whether for networking, collaborations, or opportunities, start building meaningful relationships today.`
            }
          </p>
        </div>
      </section>
  
    </main>
  
    {/* Footer Section - Add <footer> if needed */}
  </div>
  

  );
};

export default HomePage;
