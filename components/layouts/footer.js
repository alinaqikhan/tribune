import Link from 'next/link';

import EmailIcon from '@mui/icons-material/Email';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = props => {
  return (
    <>
      <div className="flex max-w-full flex-col md:flex-row">
        <div className="p-4 bg-footer-like flex-1 md:px-8 lg:px-12">
          <h4 className="font-semibold py-1 text-gray-600 border-bottom mb-2">
            UET Tribune
          </h4>
          <p className="text-xs mb-1">
            <strong>UET Tribune</strong> is the first ever magazine style news
            network of UET which brings the <strong>news</strong>,{' '}
            <strong>information</strong>, <strong>alertness</strong>,{' '}
            <strong>awareness</strong> and{' '}
            <strong>social aspects of campus</strong> with its unique style.
          </p>
          <p className="text-xs mb-1">
            Founded in <strong>2015</strong> by <strong>Umar Azam</strong> of
            Geological Engineering (Session 2012), Co-Founded By{' '}
            <strong>Haris Rana</strong> of Chemical Engineering (Session 2012)
            and <strong>Waqas Saleem</strong> of Environmental Engineering
            (Session 2012).
          </p>
          <p className="text-xs">
            UET Tribune is the <strong>fastest growing</strong> infotainment
            based <strong>media network</strong> of UET.
          </p>
        </div>
        <div className="p-4 bg-footer-like flex-1 md:px-8 lg:px-12">
          <h4 className="font-semibold py-1 text-gray-600 border-bottom mb-2">
            Contact
          </h4>
          <p>
            <a href="mailto:uettribune@gmail.com">
              <EmailIcon />
              <span className="pl-2 text-xs">uettribune@uet.edu.pk</span>
            </a>
          </p>
          <p>
            <a href="https://goo.gl/maps/rMgaAJSgbWFUbXxa6">
              <LocationOnOutlinedIcon />
              <span className="pl-2 text-xs">
                University of Engineering and Technology, Lahore
              </span>
            </a>
          </p>
        </div>
        <div className="p-4 bg-footer-like flex-1 md:px-8 lg:px-12">
          <h4 className="font-semibold py-1 text-gray-600 border-bottom mb-2">
            Follow us
          </h4>
          <p>
            <a href='https://www.facebook.com/uettribune/'>
              <FacebookOutlinedIcon color="primary" />
              <span className="pl-2 text-xs">Facebook</span>
            </a>
          </p>
          <p>
            <a href='https://www.youtube.com/channel/UCHXb4jFZo1pu-PvIUJ7wXJA'>
              <YouTubeIcon color="error" />
              <span className="pl-2 text-xs">Youtube</span>
            </a>
          </p>
          <p>
            <a href='https://twitter.com/uettribune'>
              <TwitterIcon style={{ color: '#1d9bf0' }} />
              <span className="pl-2 text-xs">Twitter</span>
            </a>
          </p>
          <p>
            <a href='https://pk.linkedin.com/company/uettribune'>
              <LinkedInIcon style={{ color: '#0a66c2' }} />
              <span className="pl-2 text-xs">LinkedIn</span>
            </a>
          </p>
        </div>
      </div>
      <div className="flex p-4 text-xs items-center justify-center bg-footer">
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <p className="px-1">UET Tribune,</p>
        <p>All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
