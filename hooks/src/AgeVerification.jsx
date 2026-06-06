// Age Verification

import React, { useState } from "react";

export default function AgeVerification() {
  const [showError, setShowError] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Age Verification
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Please verify your age before continue...
          </p>
        </div>

        <input
          type="number"
          placeholder="Enter your age"
          className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 text-center text-lg outline-none focus:border-gray-900"
        />

        <button
          onClick={() => setShowError(true)}
          className="mt-4 w-full rounded-xl cursor-pointer bg-gray-900 px-4 py-3 font-medium text-white transition hover:bg-black"
        >
          Verify My Age
        </button>

        {showError && (
          <p className="mt-3 text-center text-sm font-medium text-red-400">
            The Person with this age already exist, Please enter valid age!
          </p>
        )}
      </div>
    </div>
  );
}