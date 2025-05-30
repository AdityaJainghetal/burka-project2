// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { updateUser} from "../../features/auth/AuthSlice";
// import { toast } from "react-toastify";

// const AccountDetails = () => {
//   const dispatch = useDispatch();
//   const [user, setUser] = useState(null);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     currentPassword: "",
//     newPassword: "",
//     confirmNewPassword: "",
//   });

  

//   useEffect(() => {
//     // Fetch user details from localStorage
//     const userDetails = localStorage.getItem("user");
//     if (userDetails) {
//       // Parse the JSON string into an object
//       const parsedUser = JSON.parse(userDetails);
//       setUser(parsedUser);
//       // Initialize form data with user details
//       setFormData({
//         firstName: parsedUser.firstName || "",
//         lastName: parsedUser.lastName || "",
//         mobileNumber: parsedUser.mobileNumber || "",
//         email: parsedUser.email || "",
//       });
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
  

//   const handleSubmit = (e) => {
//     e.preventDefault();


//     // Prepare the updated user data
//     const updatedUserData = {
//       ...user,
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       mobileNumber: formData.mobileNumber,
//       email: formData.email,
//     };

//     // Dispatch the updateUser action
//     dispatch(updateUser(updatedUserData));

//     // Optionally, update localStorage with the new data
//     localStorage.setItem("user", JSON.stringify(updatedUserData));

//     // Show success message
//     toast.success("User details updated successfully!");
//   };

//   if (!user) {
//     return <div className="text-center py-10">Loading...</div>;
//   }
  

//   return (
//     <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg px-8 py-2">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Account Details</h2>

//       <form onSubmit={handleSubmit}>
//         {/* Personal Information */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="md:col-span-1 col-span-2">
//             <label className="block text-gray-600 text-sm mb-2">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleInputChange}
//               placeholder="First Name"
//               className="w-full border border-primary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600 text-sm mb-2">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleInputChange}
//               placeholder="Last Name"
//               className="w-full border border-primary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>
//           <div className="col-span-2">
//             <label className="block text-gray-600 text-sm mb-2">Mobile Number</label>
//             <input
//               type="text"
//               name="mobileNumber"
//               value={formData.mobileNumber}
//               onChange={handleInputChange}
//               placeholder="Mobile Number"
//               className="w-full border border-primary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>
//           <div className="col-span-2">
//             <label className="block text-gray-600 text-sm mb-2">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Email Address"
//               className="w-full border border-primary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>
//         </div>
//         <div className="mt-6">
//           <button
//             type="submit"
//             className="w-full md:w-auto bg-primary text-white rounded-lg px-6 py-3 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
//           >
//             Save Changes
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AccountDetails;


import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../features/auth/AuthSlice";
import { toast } from "react-toastify";

const AccountDetails = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (userDetails) {
      const parsedUser = JSON.parse(userDetails);
      setUser(parsedUser);
      setFormData({
        firstName: parsedUser.firstName || "",
        lastName: parsedUser.lastName || "",
        mobileNumber: parsedUser.mobileNumber || "",
        email: parsedUser.email || "",
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUserData = {
      ...user,
      firstName: formData.firstName,
      lastName: formData.lastName,
      mobileNumber: formData.mobileNumber,
      email: formData.email,
    };

    dispatch(updateUser(updatedUserData));
    localStorage.setItem("user", JSON.stringify(updatedUserData));
    toast.success("User details updated successfully!");
  };

  if (!user) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <div className="container bg-white shadow rounded p-4 p-md-5 mt-4">
      <h2 className="h4 fw-bold mb-4 text-dark">Account Details</h2>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-md-6">
            <label className="form-label text-muted">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-muted">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="form-control"
            />
          </div>
          <div className="col-12">
            <label className="form-label text-muted">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="Mobile Number"
              className="form-control"
            />
          </div>
          <div className="col-12">
            <label className="form-label text-muted">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="form-control"
            />
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="btn btn-primary px-4 py-2"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
