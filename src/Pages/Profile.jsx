import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../components/InputField';
import {
  fetchUserData,
  updateProfile,
  updatePassword,
  setName,
  setEmail,
  setUsername,
  setPhoneNumber,
  setAddress,
  setPostalCode,
  setCity,
  setOldPassword,
  setNewPassword,
  setConfirmPassword,
} from '../redux/slices/profileSlice';
import { toast } from 'react-toastify';

const Profile = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { name, email, username, phone_number, address, postal_code, city, old_password, new_password, confirm_password } =
  useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchUserData(token));
  }, [dispatch, token]);
  
  const handleProfileSave = (e) => {
    e.preventDefault();
    if (!name || !email || !address || !postal_code || !city || !phone_number) {
        toast.error('Please fill in all required fields');
        return;
      }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('postal_code', postal_code);
    formData.append('city', city);
    formData.append('phone_number', phone_number);
    dispatch(updateProfile({ token, formData }))
    .unwrap()
    .then(() => {
      toast.success('Profile Saved');
    })
    .catch((err) => {
      toast.error(err.message);
    });
  };

  const handlePasswordSave = (e) => {
    e.preventDefault();
    if (!old_password || !new_password || !confirm_password) {
        toast.error('Please fill in all password fields');
        return;
    }
    if (new_password !== confirm_password) {
        toast.error('New password and confirm password do not match');
        return;
    }
    const passwordData = {
        old_password,
        password: new_password,
        confirm_password,
      };
      dispatch(updatePassword({ token, passwordData }))
      .unwrap()
      .then(() => {
        toast.success('Password Changed');
        // Clear password fields
        dispatch(setOldPassword(''));
        dispatch(setNewPassword(''));
        dispatch(setConfirmPassword(''));
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

    return (
        <div className="min-h-screen py-20">
            <div className="px-8 rounded-lg w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 pr-0 md:pr-5 mb-8 md:mb-0">
                    <h2 className="mb-5 text-2xl font-bold">Edit Profile</h2>
                    <form onSubmit={handleProfileSave}>
                        <div className="mb-4">
                            <InputField
                            label="Name"
                            type="text"
                            value={name}
                            onChange={(e) => dispatch(setName(e.target.value))}
                            placeholder="Input your name here"
                            />
                        </div>
                        <div className="mb-4">
                            <InputField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => dispatch(setEmail(e.target.value))}
                            placeholder="Input your email here"
                            />
                        </div>
                        <div className="mb-4">
                            <InputField
                            label="Username"
                            type="text"
                            value={username}
                            onChange={(e) => dispatch(setUsername(e.target.value))}
                            placeholder="Input your username here"
                            disabled={true}
                            />
                        </div>
                        <div className="mb-4">
                            <InputField
                            label="Phone Number"
                            type="text"
                            value={phone_number}
                            onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
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
                                onChange={(e) => dispatch(setAddress(e.target.value))}
                                className="input"
                                placeholder="Input your address here"
                            />
                            </div>
                        </div>
                        <div className="mb-4">
                            <InputField
                            label="Postal Code"
                            type="text"
                            value={postal_code}
                            onChange={(e) => dispatch(setPostalCode(e.target.value))}
                            placeholder="Postal Code"
                            />
                        </div>
                        <div className="mb-4">
                            <InputField
                            label="City"
                            type="text"
                            value={city}
                            onChange={(e) => dispatch(setCity(e.target.value))}
                            placeholder="City"
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
                <div className="w-full md:w-1/2 pl-0 md:pl-5">
                    <h2 className="mb-5 text-2xl font-bold">Change Password</h2>
                    <form onSubmit={handlePasswordSave}>
                        <div className="mb-4">
                            <InputField
                            label="Current Password"
                            type="password"
                            name="currentPassword"
                            onChange={(e) => dispatch(setOldPassword(e.target.value))}
                            placeholder="Input your current password here"
                            />
                        </div>
                        <div className="mb-4">
                            <InputField
                            label="New Password"
                            type="password"
                            name="newPassword"
                            onChange={(e) => dispatch(setNewPassword(e.target.value))}
                            placeholder="Input your new password here"
                            />
                        </div>
                        <div className="mb-4">
                            <InputField
                            label="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
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
