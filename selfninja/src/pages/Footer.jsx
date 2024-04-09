import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8 ">
      <div className="container mx-auto px-4 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <h2 className="text-xl font-bold mb-4">Company</h2>
            <ul>
              <li>About Us</li>
              <li>Core Team</li>
              <li>Contact Us</li>
              <li>Career</li>
              <li>Hire from us</li>
              <li>Apply as mentor</li>
              <li>Work with us</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-xl font-bold mb-4">Resources</h2>
            <ul>
              <li>Blog</li>
              <li>Free Python Marathon</li>
              <li>Git Workshop</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-xl font-bold mb-4">Products</h2>
            <ul>
              <li>sna-logosna-logo</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <p>&copy; Copyright 2023 Selfmade Ninja Academy Pvt ltd</p>
          <div className="flex space-x-4">
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
