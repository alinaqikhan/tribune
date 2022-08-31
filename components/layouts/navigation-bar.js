import { IconButton } from '@mui/material';
import Link from 'next/link';

import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { MenuIcon } from '../icons';
import { NavLink } from './nav-link';
import { useState } from 'react';

const NAVIGATION_LINKS = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Events', href: '/events' },
  { id: 3, title: 'Blogs', href: '/blogs' },
  { id: 4, title: 'About', href: '/about' },
  { id: 5, title: 'Contact', href: '/contact' },
];

const NavigationBar = props => {

  const [toggle, setToggle] = useState(false);

  const openMenuHandler = () => {
    setToggle(true);
  };

  const closeMenuHandler = () => {
    setToggle(false);
  };

  return (
    <nav className="navbar-bg h-14 px-2 md:px-6 lg:px-12">
      <div className="h-full flex items-center justify-between lg:hidden relative">
        <IconButton aria-label="Menu" onClick={()=>setToggle(toggle=>!toggle)}>
          {toggle === false? <MenuIcon />:<CloseOutlinedIcon style={{height:30,width:30,color:"white"}} />}
        </IconButton>
        <Link href={'/'}>
          <a className="text-white font-medium text-lg drop-shadow-2xl">UET, Tribune</a>
        </Link>
        <IconButton
          aria-label="WhatsApp"
          onClick={() =>
            window.open(
              'https://api.whatsapp.com/send?phone=+923411518064',
              '_self'
            )
          }
        >
          <WhatsAppIcon style={{ color: 'white', height: 30, width: 30 }} />
        </IconButton>
      </div>

        {toggle && <div className='overlay' onClick={closeMenuHandler}>
            <div className='w-4/6 h-full mobile-nav-menu'>
            <ul className='flex flex-col px-5 py-7 text-black gap-5 h-full'>
            {NAVIGATION_LINKS.map(link => <NavLink key={link.id} title={link.title} href={link.href} />)}
        </ul>
            </div>
          </div>}

      <div className="h-full hidden lg:flex items-center justify-between">
        <ul className='flex text-white gap-5 h-full'>
            {NAVIGATION_LINKS.map(link => <NavLink key={link.id} title={link.title} href={link.href} />)}
        </ul>
        <div>
          <IconButton aria-label='Facebook' onClick={()=> window.open(
                'https://www.facebook.com/uettribune/',
                '_self'
              )}>
            <FacebookIcon style={{ color: 'white' }} />
          </IconButton>
          <IconButton
            aria-label="WhatsApp"
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send?phone=+923411518064',
                '_self'
              )
            }
          >
            <WhatsAppIcon style={{ color: 'white' }} />
          </IconButton>
          <IconButton aria-label='Instagram' onClick={()=> window.open(
                'https://www.instagram.com/uettribune',
                '_self'
              )}>
            <InstagramIcon style={{ color: 'white' }} />
          </IconButton>
          <IconButton aria-label='Twitter' onClick={()=> window.open(
                'https://twitter.com/uettribune',
                '_self'
              )}>
            <TwitterIcon style={{ color: 'white' }} />
          </IconButton>
          <IconButton aria-label='Twitter' onClick={()=> window.open(
                'https://pk.linkedin.com/company/uettribune',
                '_self'
              )}>
            <LinkedInIcon style={{ color: 'white' }} />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
