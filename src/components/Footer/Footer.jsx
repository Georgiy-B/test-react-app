import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <div>
          <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo"/>
          <div>Powered by NewsAPI.org</div>
        </div>
        <div>
          <div className="footer-header">Programs &amp; initiatives</div>
          <ul>
            <li><a href="/">TEDx</a></li>
            <li><a href="/">TED Prize</a></li>
            <li><a href="/">TED Fellows</a></li>
            <li><a href="/">TED Ed</a></li>
            <li><a href="/">TED Translators</a></li>
            <li><a href="/">TED Books</a></li>
            <li><a href="/">TED Institute</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-header">Ways to get TED</div>
          <ul>
            <li><a href="/">TED Radio Hour on NPR</a></li>
            <li><a href="/">More ways to get TED</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-header">Follow TED</div>
          <ul>
            <li><a href="www.facebook.com">Facebook</a></li>
            <li><a href="www.twitter.com">Twitter</a></li>
            <li><a href="www.pinterest.com">Pinterest</a></li>
            <li><a href="www.instagram.com">Instagram</a></li>
            <li><a href="www.youtube.com">Youtube</a></li>
            <li><a href="blog.ted.com">TED Blog</a></li>
          </ul>
        </div>
        <div>
        <div className="footer-header">Our community</div>
          <ul>
            <li><a href="/">TED Speakers</a></li>
            <li><a href="/">TED Fellows</a></li>
            <li><a href="/">TED Translators</a></li>
            <li><a href="/">TEDx Organizers</a></li>
            <li><a href="/">TED Community</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-join">
        <div className="footer-header">
          Want personalized recomendations?
        </div>
        <div>
          Join Us and get the perfect ideas selected just fot you.
        </div>
        <button className="btn btn-secondary">Get started</button>
      </div>
    </div>
  );
}

export default Footer;