import React from 'react';

export default function Discord() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Join Our Discord Community!</h1>
            <p className="text-gray-600 mb-6 text-center max-w-xl">
                Connect with other users, ask questions, share tips, and stay updated on our projects. 
                Click the button below to join our Discord server.
            </p>
            <a
                href="https://discord.gg/YOUR_INVITE_CODE"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            >
                Join Discord
            </a>
        </div>
    );
}
