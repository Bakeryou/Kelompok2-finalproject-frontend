import { useState } from 'react';
import InputField from '../components/InputField';

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
        <div className="min-h-screen bg-[#f3e2cf] py-20">
            <div className="bg-[#f3e2cf] px-8 rounded-lg w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 pr-0 md:pr-5 mb-8 md:mb-0">
                    <h2 className="mb-5 text-2xl font-bold">Edit Profile</h2>
                    <form onSubmit={handleProfileSave}>
                        <div className="mb-4">
                            <InputField
                            label="Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Input your name here"
                            />
                        </div>
                        <div className="mb-4">
                            <InputField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Input your email here"
                            />
                        </div>
                        <div className="mb-4">
                            <InputField
                            label="Username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Input your username here"
                            />
                        </div>
                        <div className="mb-4">
                            <InputField
                            label="Phone Number"
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Input your phone number here"
                            />
                        </div>
                        <div className="mb-4">
                            <div className="flex flex-col gap-2 mt-2">
                            <label className="font-medium text-primary">
                                Address
                            </label>
                            <textarea
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="input"
                                placeholder="Input your address here"
                            />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary px-4 py-2"
                        >
                            Save
                        </button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 pl-0 md:pl-5">
                    <h2 className="mb-5 text-2xl font-bold">Change Password</h2>
                    <form onSubmit={handlePasswordSave}>
                        <div className="mb-4">
                            <InputField
                            label="Current Password"
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            placeholder="Input your current password here"
                            />
                        </div>
                        <div className="mb-4">
                            <InputField
                            label="New Password"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Input your new password here"
                            />
                        </div>
                        <div className="mb-4">
                            <InputField
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your new password here"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary px-4 py-2"
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