import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10">

        <h1 className="text-4xl font-bold text-center text-red-600 mb-6">
          About Foodie Hub
        </h1>

        <p className="text-gray-600 text-lg text-center leading-8 mb-10">
          Foodie Hub is a modern food ordering platform that connects customers
          with their favorite restaurants. Our goal is to provide a fast,
          secure, and user-friendly experience for browsing menus, placing
          orders, and enjoying delicious meals from the comfort of home.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-red-50 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-red-600 mb-3">
               Quality Food
            </h2>
            <p className="text-gray-600">
              We partner with trusted restaurants to deliver fresh and
              high-quality meals.
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-red-600 mb-3">
               Fast Delivery
            </h2>
            <p className="text-gray-600">
              Enjoy quick and reliable delivery with real-time order tracking.
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-red-600 mb-3">
               Customer First
            </h2>
            <p className="text-gray-600">
              We focus on providing the best customer experience with secure
              ordering and easy navigation.
            </p>
          </div>
        </div>

        <div className="mt-10 bg-gray-100 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Foodie Hub?
          </h2>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Easy customer registration and login.</li>
            <li>Browse restaurants and food items.</li>
            <li>Add items to cart and favorites.</li>
            <li>Secure checkout experience.</li>
            <li>Responsive design for mobile and desktop.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;