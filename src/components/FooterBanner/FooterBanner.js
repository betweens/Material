import React from 'react';
import './FooterBanner.css';
const FooterBanner = () => (<div className="footer-banner">
  <div className="clear-float"></div>
  <p className="footer-text">Hand crafted with love by the engineers at <a href="http://www.call-em-all.com/Careers">Call-Em-All</a>and our awesome<a href="https://github.com/callemall/material-ui/graphs/contributors">contributors</a></p>
  <a className="github-link" href="https://github.com/betweens/Material">github</a>
  <p className="copyright">hank you to <a href="https://www.browserstack.com" target="_blank"><img src="http://www.browserstack.com/images/layout/logo.png" height="25" width="auto" /></a>for providing real browser testing infrastructure.</p>
  <div className="clear-float"></div>
</div>);

export default FooterBanner;
