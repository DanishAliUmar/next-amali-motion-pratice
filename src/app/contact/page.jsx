"use client";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import Image from "next/image";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
        brochure: false,
        privacyPolicy: false,
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null,
            });
        }
    };

    // Phone Input Change Handler
    const handlePhoneChange = (value) => {
        setFormData({
            ...formData,
            mobile: value,
        });

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null,
            });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.match(/^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i))
            newErrors.email = "Invalid email format.";
        if (!formData.mobile || !isValidPhoneNumber(formData.mobile))
            newErrors.mobile = "Please enter a valid mobile number";
        if (!formData.privacyPolicy)
            newErrors.privacyPolicy = "You must accept the Privacy Policy.";

        return newErrors;
    };

    // Submit Handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccessMessage("");

        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);

        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                message: formData.message,
                brochure: formData.brochure,
            };

            console.log("Form Payload:", payload);

            // Dummy POST Request
            const response = await fetch("", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error("Failed to submit form");

            setSuccessMessage("Form submitted successfully!");
            setFormData({
                name: "",
                email: "",
                mobile: "",
                message: "",
                brochure: false,
                privacyPolicy: false,
            });
        } catch (error) {
            console.error("Error:", error.message);
            setSuccessMessage("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row  min-h-screen text-gray-700 w-screen overflow-x-hidden bg-center bg-cover bg-fixed bg-no-repeat" style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1661425407118-e64871d1ab65?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBmb3IlMjBzYWxlfGVufDB8fDB8fHww)" }}>
            <div className="flex-1 relative min-h-[80vh]">
                <h1 className="text-center font-extralight text-5xl sm:text-7xl text-white drop-shadow-xl pt-28">Get in touch</h1>
                <div className="space-y-5 sm:space-y-10 px-8 sm:px-16 py-5 sm:py-10 lg:mr-10 w-full lg:w-fit lg:rounded-r-3xl bg-black/50 backdrop-blur-xl absolute bottom-0 lg:bottom-10 left-0 z-10 text-white">
                    <h3 className="text-xl sm:text-2xl sm:pr-[10%]">For more information about Amali Island, please contact us:</h3>
                    <div className="flex sm:items-center gap-4 flex-col sm:flex-row whitespace-nowrap">
                        <div className="flex items-center gap-2">
                            <svg className="size-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                            </svg>
                            <p className=""> sales@amaliproperties.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="size-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                            <p className=""> +971 58 826 0000</p>
                        </div>
                    </div>
                </div>
            </div>
            <form
                onSubmit={handleSubmit}
                className="w-full lg:max-w-[500px] xl:max-w-[600px] p-14 xl:p-24 bg-white/70 backdrop-blur-3xl"
            >
                {/* Name */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700">Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full mt-1 p-2 border rounded-md bg-slate-50"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700">Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full mt-1 p-2 border rounded-md bg-slate-50"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Mobile */}
                <div className="mb-4 custom__number__input">
                    <label className="block font-medium text-gray-700">
                        Mobile Number *
                    </label>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={formData.mobile}
                        onChange={handlePhoneChange}
                        defaultCountry="US"
                        className="w-full mt-1 p-2 border rounded-md bg-slate-50"
                    />
                    {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                </div>

                {/* Message */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows="4"
                        className="w-full mt-1 p-2 border rounded-md bg-slate-50"
                    ></textarea>
                </div>

                {/* Brochure */}
                <div className="mb-4 flex items-center">
                    <input
                        id="brochure"
                        type="checkbox"
                        name="brochure"
                        checked={formData.brochure}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="brochure" className="ml-2 text-sm text-gray-700 select-none">Send me a brochure</label>
                </div>

                {/* Privacy Policy */}
                <div className="mb-4 flex items-start">
                    <input
                        id="privacyPolicy"
                        type="checkbox"
                        name="privacyPolicy"
                        checked={formData.privacyPolicy}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="privacyPolicy" className="ml-2 text-sm text-gray-700 select-none">
                        I understand that the information provided is subject to the Privacy Policy *
                    </label>
                </div>
                {errors.privacyPolicy && (
                    <p className="text-red-500 text-sm">{errors.privacyPolicy}</p>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 px-4 text-white font-semibold rounded-md ${loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                        }`}
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>

                {/* Success Message */}
                {successMessage && (
                    <p className="mt-4 text-green-600 font-semibold">{successMessage}</p>
                )}
            </form>
        </div>
    );
};

export default Contact;
