import React, { useState } from 'react';

function Profile() {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@gmail.com');
    const [username, setUsername] = useState('JohnDoe');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleProfileSave = (e) => {
        e.preventDefault();
        alert('Profile Saved');
    };

    const handlePasswordSave = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        alert('Password Changed');
    };

    return (
        <div className="min-h-screen bg-[#f3e2cf] flex justify-center items-center">
            <div className="bg-[#f3e2cf] p-10 rounded-lg max-w-4xl w-full flex">
                <div className="w-1/2 pr-5">
                    <h2 className="mb-5 text-2xl font-bold">Edit Profile</h2>
                    <form onSubmit={handleProfileSave}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block bg-[#f3e2cf] w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block bg-[#f3e2cf] w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mt-1 block bg-[#f3e2cf] w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="mt-1 block bg-[#f3e2cf] w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                                placeholder="Input your phone number here"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="mt-1 block bg-[#f3e2cf] w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                                placeholder="Input your address here"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-4 py-2 mt-4 text-white bg-black rounded-md"
                        >
                            Save
                        </button>
                    </form>
                </div>
                <div className="w-1/2 pl-5">
                    <h2 className="mb-5 text-2xl font-bold">Change Password</h2>
                    <form onSubmit={handlePasswordSave}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Current Password
                            </label>
                            <input
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="mt-1 block bg-[#f3e2cf] w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                                placeholder="Input your current password here"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                New Password
                            </label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="mt-1 block bg-[#f3e2cf] w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                                placeholder="Input your new password here"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="mt-1 block bg-[#f3e2cf] w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                                placeholder="Confirm your new password here"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-4 py-2 mt-4 text-white bg-black rounded-md"
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
