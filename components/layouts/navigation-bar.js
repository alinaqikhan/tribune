import { IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';

import { MenuIcon } from '../icons';

const NavigationBar = props => {
  return (
    <nav className="bg-black flex items-center justify-between px-2">
      <IconButton aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Link href={"/"}>
      <a className='text-white font-medium text-lg'>UET, Tribune</a>
      </Link>
      <IconButton aria-label='WhatsApp' onClick={()=>window.open('https://api.whatsapp.com/send?phone=+923411518064', '_self')}>
        <WhatsAppIcon style={{color:"white", height:30, width:30}} />
      </IconButton>
    </nav>
  );
};

export default NavigationBar;



{/* <div>
  <IconButton>
    <FacebookIcon style={{ color: 'white' }} />
  </IconButton>
  <IconButton>
    <WhatsAppIcon style={{ color: 'white' }} />
  </IconButton>
  <IconButton>
    <InstagramIcon style={{ color: 'white' }} />
  </IconButton>
  <IconButton>
    <TwitterIcon style={{ color: 'white' }} />
  </IconButton>
</div>; */}
