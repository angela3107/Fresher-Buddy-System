import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="nb-footer">
      <div className="nb-container">
        <p>&copy; {new Date().getFullYear()} Freshers & Seniors Q&A. All rights reserved.</p>
        <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms</a></p>
      </div>
    </footer>
  );
};

export default Footer;
