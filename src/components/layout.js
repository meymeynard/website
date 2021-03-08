import PropTypes from "prop-types";
import React from "react";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-300 text-gray-900">
      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
