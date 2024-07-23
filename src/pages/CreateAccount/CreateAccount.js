import React, { useState } from "react";
import { HiHome, HiOutlineOfficeBuilding } from "react-icons/hi";

function CreateAccountPage() {
  const [formData, setFormData] = useState({
    name: "",
    addressType: "house", // Default to house address
    address: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log("Form submitted with data:", formData);
    // Reset form fields if needed
    setFormData({
      name: "",
      addressType: "house",
      address: "",
      email: "",
      mobile: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <h2 className="text-center text-3xl font-extrabold mb-8">
          Create Account
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <fieldset>
              <legend className="block text-sm font-medium">
                Address Type
              </legend>
              <div className="mt-2 space-x-4 flex items-center flex-row gap-4">
                <div className=" flex items-center flex-row">
                  <input
                    id="house"
                    name="addressType"
                    type="radio"
                    value="house"
                    checked={formData.addressType === "house"}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="house" className="ml-3">
                    <HiHome className="h-6 w-6" />
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="office"
                    name="addressType"
                    type="radio"
                    value="office"
                    checked={formData.addressType === "office"}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="office" className="ml-3">
                    <HiOutlineOfficeBuilding className="h-6 w-6" />
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={`Enter ${
                formData.addressType === "house" ? "House" : "Office"
              } Address`}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email Address"
              required
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium">
              Mobile Number
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Mobile Number"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountPage;
