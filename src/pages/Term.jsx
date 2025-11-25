import React from 'react';

export default function Term() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4" style={{
                backgroundImage:
                  "url('/images/terms.png')",
                  // color: 'black'
              }}> 
      <h1 className="text-3xl font-bold mb-6 text-black-800">Terms & Conditions</h1>
      <p className="text-green-100 mb-4 max-w-xl">
        Welcome to our website! By accessing or using our services, you agree to be bound by these Terms & Conditions. 
        Please read them carefully before using our site.
      </p>
      <p className="text-green-100 mb-4 max-w-xl">
        1. Use of Website: You agree to use our website for lawful purposes only and not engage in any harmful activity.
      </p>
      <p className="text-green-100 mb-4 max-w-xl">
        2. Intellectual Property: All content, logos, and graphics are our property or used with permission.
      </p>
      <p className="text-green-100 mb-4 max-w-xl">
        3. Limitation of Liability: We are not responsible for any damages arising from the use of our website.
      </p>
      <p className="text-green-100 mb-4 max-w-xl">
        4. Changes: We reserve the right to update these terms at any time. Your continued use means you accept the changes.
      </p>
      <p className="text-green-100 max-w-xl">
        For any questions, please contact us via our Contact page.
      </p>
    </div>
  );
}
