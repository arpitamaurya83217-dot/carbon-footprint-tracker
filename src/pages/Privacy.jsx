import React from "react";

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-10"style={{
                backgroundImage:
                  "url('../../public/images/background.png')",
                  // color: 'black'
              }}>
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-black-700">
        At Carbon Footprint Tracker, your privacy is important to us. This
        Privacy Policy explains what information we collect, how we use it, and
        how we protect it.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
      <p className="mb-4 text-black-700">
        We may collect personal information such as your name, email address,
        and other details when you use our services or contact us.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        How We Use Your Information
      </h2>
      <p className="mb-4 text-black-700">
        Your information is used to provide our services, respond to inquiries,
        and improve your experience on our website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Sharing of Information</h2>
      <p className="mb-4 text-black-700">
        We do not sell your personal information. We may share your information
        with trusted service providers to assist with website operations.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="mb-4 text-black-700">
        If you have any questions about this Privacy Policy, please contact us
        at
        <br />
        <a
          href="arpitamaurya956@gmail.com"
          className="text-black-500 font-semibold hover:underline"
        >
          arpitamaurya956@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
