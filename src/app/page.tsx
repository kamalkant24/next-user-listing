import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
  {/* Header Section - You can add <header> here if needed */}

  {/* Main Content Section */}
  <main className="px-8 py-[64px] min-h-screen">
    
    {/* Hero Section */}
    <section className="text-center text-black py-16">
      <h1 className="text-6xl font-bold mb-4 text-black">
        Welcome to Our Digital Services
      </h1>
      <p className="text-xl mb-8 text-black">
        Elevate your business with cutting-edge web solutions, SEO strategies, and user-focused design.
      </p>
       <Link href="/users"
        className="bg-black mt-5 pt-3 inline-block text-white py-3 px-6 rounded-lg text-lg transition duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" aria-label="Get started with our services">
        Get Started
      </Link>
    </section>

    {/* Features Section */}
    <section className="flex flex-col md:flex-row justify-between mt-16 space-y-8 md:space-y-0 md:space-x-8 text-left">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Innovative Digital Solutions
        </h2>
        <p className="text-gray-600">
          {
          `Discover our full range of digital services tailored to enhance your
          online presence. From responsive website design to scalable web
          applications, we combine innovation with performance to help your
          brand stand out in a crowded marketplace.`
          }
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Optimized Performance & SEO
        </h2>
        <p className="text-gray-600">
         {
         ` Our web solutions are built for speed, accessibility, and
          search engine optimization. Improve your visibility in search rankings,
          load faster across all devices, and offer your users a seamless experience.`
          }
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Strategic Growth Partnership
        </h2>
        <p className="text-gray-600">
          {
           `Partner with us to achieve long-term digital success. Whether you're
            a startup or an established business, we focus on measurable outcomes,
            data-driven strategy, and scalable development to fuel your growth.`
          }
        </p>
      </div>
    </section>
  </main>

  {/* Footer Section - add <footer> if needed */}
</div>

  );
};

export default HomePage;
