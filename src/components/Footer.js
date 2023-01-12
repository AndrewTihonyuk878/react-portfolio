import React from 'react';
import styled from 'styled-components';
import { MdFavorite } from 'react-icons/md';

import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 6rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 0 1 33.333%;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  .copyright__heart {
    text-align: center;
    svg {
      width: 1.5em;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+48662605004',
                path: 'tel:+48662605004',
              },
              {
                title: 'andrew.tihonyuk878@gmail.com',
                path: 'mailto:andrew.tihonyuk878@gmail.com',
              },
              {
                title: 'Poland, Wroclaw',
                path: 'https://www.google.com/maps/place/%D0%92%D1%80%D0%BE%D1%86%D0%BB%D0%B0%D0%B2/@51.1271776,16.8270551,11z/data=!3m1!4b1!4m5!3m4!1s0x470fe9c2d4b58abf:0xb70956aec205e0f5!8m2!3d51.1078852!4d17.0385376',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/tykhoniuk/',
              },
              {
                title: 'Telegram',
                path: 'https://t.me/andrii_tykhoniuk/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/andrii_tykhoniuk/',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/tykhoniukk/',
              },
              {
                title: 'Github',
                path: 'https://github.com/AndrewTihonyuk878',
              }
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText maxwith='700px'>
            © 2023 - Andrii Tykhoniuk | Created with React <span className='copyright__heart'><MdFavorite /></span>
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
