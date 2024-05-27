import React from 'react';

const ContactMePage: React.FC = () => {
  return (
    <div className="p-8 bg-custom-light-gradient dark:bg-custom-dark-gradient min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200">Contact Me</h1>
      <p className="text-gray-700 dark:text-gray-400">
        Feel free to reach out to me at any time. Here are my contact details...
      </p>
      {/* Add your contact details or a contact form here */}
    </div>
  );
};

export default ContactMePage;
