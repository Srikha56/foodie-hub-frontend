import React from "react";

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 md:p-10">
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Help & Support
        </h1>
        <p className="text-gray-500 mb-6">
          We’re here to help you with anything you need.
        </p>

        
        <div className="space-y-4">

          <div className="border rounded-lg p-4 hover:shadow-md transition">
            <h2 className="font-semibold text-gray-700">
              How do I reset my password?
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Go to settings → click “Reset Password” → follow instructions.
            </p>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-md transition">
            <h2 className="font-semibold text-gray-700">
              How to contact support?
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              You can email us at support@yourapp.com or use chat support.
            </p>
          </div>

          <div className="border rounded-lg p-4 hover:shadow-md transition">
            <h2 className="font-semibold text-gray-700">
              Where can I update my profile?
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Go to Profile section → click Edit Profile → save changes.
            </p>
          </div>

        </div>

        
        <div className="mt-8 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition">
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
};

export default Help;