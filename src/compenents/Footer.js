import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'> <InstagramIcon/>   <TwitterIcon/> <FacebookIcon/> <WhatsAppIcon/> <LinkedInIcon/> </div>
      <p>&copy; 2024 OCEAN/SNACK.com</p>
    </div>
  )
}

export default Footer
