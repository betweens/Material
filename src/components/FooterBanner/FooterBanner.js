import React from 'react';
import './FooterBanner.css';
const FooterBanner = () => (<div className="footer-banner">
  <div className="clear-float"></div>
  <p className="footer-text">Hand crafted with love by the engineers at <a href="http://www.call-em-all.com/Careers">Call-Em-All</a></p>
  <p className="footer-text">and our awesome <a href="https://github.com/callemall/material-ui/graphs/contributors">contributors</a></p>
  <p className="footer-text"><a style={{fontSize: '30px'}}className="muidocs-icon-custom-github" href="https://github.com/betweens/Material"> </a></p>
  <p className="copyright">hank you to <a href="https://www.browserstack.com" target="_blank" rel="noopener noreferrer"><img alt="hmf" src="http://www.browserstack.com/images/layout/logo.png" height="25" width="auto" /></a> for providing real browser testing infrastructure.</p>
  <div className="clear-float"></div>
</div>);

export default FooterBanner;
