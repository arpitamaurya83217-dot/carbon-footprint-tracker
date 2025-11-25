import React from 'react'

function Contact() {
    return (
        <div className="flex justify-center items-start sm:items-center min-h-screen bg-white p-4">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Contact Info */}
                <div className="p-6 bg-gray-200 rounded-lg flex flex-col justify-start">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
                        Get in touch
                    </h1>
                    <p className="text-base sm:text-lg font-medium text-gray-600 mt-2">
                        Fill in the form to start a conversation regarding more info on the subject "How to tackle your carbon footprints" more efficiently throughout your daily chores and household activities.
                    </p>

                    {/* Location */}
                    <div className="flex items-center mt-6 text-gray-600">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <div className="ml-3 text-md sm:text-lg font-semibold">REC Sonbhadra</div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center mt-4 text-gray-600">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        <div className="ml-3 text-md sm:text-lg font-semibold">+91-7007873505</div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center mt-4 text-gray-600">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <p className="ml-3 text-md sm:text-lg font-semibold break-words">
                            arpitamaurya83217@gmail.com
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="p-6 flex flex-col justify-center bg-gray-50 rounded-lg shadow-sm">
                    <div className="flex flex-col mb-3">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="w-full py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-semibold focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col mb-3">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="w-full py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-semibold focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-col mb-3">
                        <input
                            type="tel"
                            name="tel"
                            id="tel"
                            placeholder="Telephone Number"
                            className="w-full py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-semibold focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full md:w-32 bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mt-3 self-center transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
