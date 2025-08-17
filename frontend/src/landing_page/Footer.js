import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + About */}
        <div className="footer-col">
          <h2 className="footer-logo">GreenYields</h2>
          <p>
            Empowering farmers and investors with sustainable solutions. 
            GreenYields connects agriculture, technology, and finance for 
            a greener tomorrow.
          </p>
        </div>

        {/* Account / Services */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li><a href="/open-account">Open Green Account</a></li>
            <li><a href="/investment-plans">Investment Plans</a></li>
            <li><a href="/market-updates">Market Updates</a></li>
            <li><a href="/funding">Farmer Funding</a></li>
            <li><a href="/wizard">Yield Calculator</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/contact">Help Center</a></li>
            <li><a href="/complaints">File a Complaint</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/knowledge">Investor Guides</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/csr">CSR Initiatives</a></li>
            <li><a href="/press">Press & Media</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="footer-bottom">
        <p>© 2025 GreenYields. All rights reserved.</p>
        <p>
          Investments in agriculture and securities market are subject to risks; 
          please read all related documents carefully before investing.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
