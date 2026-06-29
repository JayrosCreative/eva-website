import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo variant="cream" height={34} className="footer-logo" />
          <p className="footer-tagline">
            A digital ecosystem designed to help women live with intention.
          </p>
          <p className="footer-apps label-caps">EVĀ HEALTH · EVĀ FOCUS · EVĀ SCRIPTURE</p>
          <a href="mailto:info@evā.com" className="footer-email">info@evā.com</a>
          <p className="footer-copy">© 2026 EVĀ. All rights reserved.</p>
        </div>

        <div className="footer-col">
          <p className="footer-col-title label-caps">Explore</p>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/apps">Apps</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/community">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-col-title label-caps">Legal</p>
          <ul>
            <li><Link to="/terms">Terms &amp; Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/house-rules">House Rules</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-col-title label-caps">Follow</p>
          <ul>
            <li><a href="https://www.instagram.com/eva.circle/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@eva.circle" target="_blank" rel="noopener noreferrer">TikTok</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61591246266975" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-bottom-mark label-caps">EVĀ</span>
        <span className="footer-bottom-tag lora-italic">Your Life, Aligned.</span>
      </div>
    </footer>
  )
}
