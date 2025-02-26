import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../utilities/api.ts";

const LandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    referredBy: "",
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.referredBy.trim()) newErrors.referredBy = "Your name is required";
    if (!formData.name.trim())
      newErrors.name = "Friend's name is required";
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (validate()) {
      // console.log("Form Submitted", formData);
      try {
        const response = await axios.post(apiUrl("/users/refer"), formData);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
      navigate("/submitted");
      setIsModalOpen(false);
    }
  };

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white transition-all duration-500 relative ${
        isModalOpen ? "backdrop-blur-md" : ""
      }`}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
        Refer Someone to Praveer’s Company
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-md drop-shadow-md">
        Help your friends and colleagues connect with great opportunities by
        referring them today!
      </p>
      <button
        className="bg-yellow-400 text-gray-900 px-6 py-3 cursor-pointer rounded-lg text-lg font-semibold shadow-lg hover:bg-yellow-500 transition transform hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      >
        Refer Now
      </button>

      {isModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 backdrop-blur-md bg-black/30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-gray-900">
            <h2 className="text-2xl font-bold mb-4">Refer Someone</h2>
            <input
              name="referredBy"
              type="text"
              placeholder="Your Name"
              className="w-full p-2 mb-2 border rounded"
              value={formData.referredBy}
              onChange={handleChange}
            />
            {errors.referredBy && (
              <p className="text-red-500 text-sm">{errors.referredBy}</p>
            )}
            <input
              name="name"
              type="text"
              placeholder="Friend's Name"
              className="w-full p-2 mb-2 border rounded"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
            <input
              name="email"
              type="email"
              placeholder="Friend's Email"
              className="w-full p-2 mb-2 border rounded"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-2 mb-2 border rounded"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
            <div className="flex justify-end gap-2 mt-3">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Send Referral
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
