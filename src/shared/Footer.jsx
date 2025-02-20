import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by <span className="ml-1 uppercase">Ifratul Jannat Ritu</span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
