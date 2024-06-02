import React from "react";

function Profile() {
  return (
    <div className="min-h-screen py-20 bg-[#f3e2cf]">
      <div className="px-8 rounded-lg w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-0 md:pr-5 mb-8 md:mb-0">
          <h2 className="mb-5 text-2xl font-bold">Edit Profile</h2>
          <form>
            <div className="mb-4">
              <label className="block text-black mb-2">Name</label>
              <input
                className="w-full px-3 py-2 border-solid border-2 border-black rounded-md shadow-sm focus:ring focus:ring-black bg-[#f3e2cf]"
                type="text"
                placeholder="Admin"
                defaultValue="Admin"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2">Email</label>
              <input
                className="w-full px-3 py-2 border-solid border-2 border-black rounded-md shadow-sm focus:ring focus:ring-black bg-[#f3e2cf]"
                type="email"
                placeholder="adminbakeryou@gmail.com"
                defaultValue="adminbakeryou@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2">Username</label>
              <input
                className="w-full px-3 py-2 border-solid border-2 border-black rounded-md shadow-sm focus:ring focus:ring-black bg-[#f3e2cf]"
                type="text"
                placeholder="Admin1"
                defaultValue="Admin1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2">Phone Number</label>
              <input
                className="w-full px-3 py-2 border-solid border-2 border-black rounded-md shadow-sm focus:ring focus:ring-black bg-[#f3e2cf]"
                type="tel"
                placeholder="Input your phone number here"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2">Address</label>
              <input
                className="w-full px-3 py-2 border-solid border-2 border-black rounded-md shadow-sm focus:ring focus:ring-black bg-[#f3e2cf]"
                type="text"
                placeholder="Input your address here"
              />
            </div>
            <button
              type="submit"
              className="w-full max-w-24 bg-black text-white py-2 rounded-md"
            >
              Save
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 pr-0 md:pr-5 mb-8 md:mb-0">
          <h2 className="mb-5 text-2xl font-bold">Change Password</h2>
          <form>
            <div className="mb-4">
              <label className="block text-black mb-2">Current Password</label>
              <input
                className="w-full px-3 py-2 border-solid border-2 border-black rounded-md shadow-sm focus:ring focus:ring-black bg-[#f3e2cf]"
                type="password"
                placeholder="Input your current password here"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2">New Password</label>
              <input
                className="w-full px-3 py-2 border-solid border-2 border-black rounded-md shadow-sm focus:ring focus:ring-black bg-[#f3e2cf]"
                type="password"
                placeholder="Input your new password here"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2">Confirm Password</label>
              <input
                className="w-full px-3 py-2 border-solid border-2 border-black rounded-md shadow-sm focus:ring focus:ring-black bg-[#f3e2cf]"
                type="password"
                placeholder="Confirm your new password here"
              />
            </div>
            <button
              type="submit"
              className="w-full max-w-24 bg-black text-white py-2 rounded-md"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
