import { Link } from "react-router-dom";
import SocialLogo from "./SocialLogo";

const Footer = () => {
  return (
    <footer className="bg-ligth text-secondary  p-7 space-y-7 mt-6">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/faqs">Frequently Asked Questions</Link>
            </li>
            <li>
              <Link to="/employer-dashboard">Employer Dashboard</Link>
            </li>
            <li>
              <Link to="/help-resources">Help & Resources</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/legal">Legal</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li><SocialLogo className="mr-0 ml-auto"/></li>
          </ul>
        </div>
      </div>
      <p className="text-[#212529]">
        © 2024 Benefits Compliance Solutions. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
