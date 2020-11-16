import React from 'react';
import {Button} from '../../components/Button/Button';
import {Link} from 'react-router-dom';
import '../Footer/Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className="footer-subscription-heading">
                Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time
            </p>
            <div class="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className='social-logo'>
                        TRVL <i className='fab fa-typo3' />
                    </Link>
                </div>
                <small className='website-right'>TRVL @ 2020</small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook'>
                        <i className='fab fa-facebook-f' />
                    </Link>
                    <Link className='social-icon-link instagram'>
                        <i className='fab fa-instagram' />
                    </Link>
                    <Link className='social-icon-link twitter'>
                        <i className='fab fa-twitter' />
                    </Link>
                    <Link className='social-icon-link linkedin'>
                        <i className='fab fa-linkedin' />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Footer;
