import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,

  FaWhatsapp
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  // SocialMedia,
  // SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
        <FooterContainer>
            <FooterWrap>
                <SocialLogo to ='/'>Pizza</SocialLogo>
                <SocialIcons>
                    <SocialIconLink href='http://facebook.com' target='_blank' aria-label="Facebook" rel="noopener noreferrer">
                         <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='http://instagram.com/patrick_cage' target='_blank' aria-label="Instagram" rel="noopener noreferrer">
                    <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='https://api.whatsapp.com/send?phone=254726606039' target='_blank' aria-label="What's App" rel="noopener noreferrer">
                    <FaWhatsapp />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label="YouTube" rel="noopener noreferrer">
                    <FaYoutube />
                    </SocialIconLink>
                </SocialIcons>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
