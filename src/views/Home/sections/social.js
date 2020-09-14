import React from 'react';
import { Grid } from '../../../components/layout/Grid';
import SvgIcon from '../../../components/misc/SvgIcon';

const social = [
  {
    icon: '/icons/twitter.svg',
    alt: 'Twitter',
    link: 'https://twitter.com/iamdylancurran',
  },
  {
    icon: '/icons/linkedin.svg',
    alt: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dylancurran/',
  },
  {
    icon: '/icons/github.svg',
    alt: 'GitHub',
    link: 'https://github.com/iamdylancurran',
  },
  {
    icon: '/icons/resume.svg',
    alt: 'Resume',
    link: '/resume.pdf',
  },
];

const Social = () => {
  return (
    <div>
      <Grid maxWidth="sm" justifyContent="center" alignItems="center">
        {social.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item.alt}
            download={item.alt === 'Resume'}
          >
            <SvgIcon src={item.icon} alt={item.alt} size="5rem" hover />
          </a>
        ))}
      </Grid>
    </div>
  );
};

export default Social;
