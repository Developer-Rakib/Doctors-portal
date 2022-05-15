import React from 'react';

const Footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <div style={{backgroundImage:"url('https://i.ibb.co/DWS9srf/footer.png')", backgroundPosition:"center", backgroundSize:"cover"}} className=''>
            <footer class="footer myContainer p-10">
                <div className='text-center'>
                    <span class="footer-title">Services</span>
                    <a  class="link link-hover">Emergency Checkup</a>
                    <a class="link link-hover">Monthly Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span class="footer-title">ORAL HEALTH</span>
                    <a class="link link-hover">Fluoride Treatment</a>
                    <a class="link link-hover">Cavity Filling</a>
                    <a class="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span class="footer-title">OUR ADDRESS</span>
                    <a class="link link-hover">New York - 101010 Hudson</a>
                </div>
            </footer>
            <footer class="footer p-4 footer-center">
                <div>
                    <p>Copyright © {year} - All right reserved by <a href="https://github.com/Developer-Rakib">Developer-Rakib</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;