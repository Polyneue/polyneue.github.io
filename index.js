const Hubble = require('hubble.js');
const { token } = require('./auth.json');

const hubble = new Hubble({
  username: 'Polyneue',
  token,
  output:`${__dirname}/index.html`,
  theme: {
    title: 'Engineer',
    description: 'Ed Mendoza is a Software Engineer that specializes in JavaScript development. He works for Red Ventures in Charlotte, North Carolina where he works on Application Development and SaaS platforms.',
    type: 'dark',
    pattern: {
      name: 'topography',
      size: '360px'
    },
    social: {
      behance: 'https://www.behance.net/Polyneue',
      codepen: 'https://codepen.io/Polyneue/',
      dribbble: 'https://dribbble.com/Polyneue',
      github: 'https://github.com/polyneue',
      linkedin: 'https://www.linkedin.com/in/edmendoza3/',
      npm: 'https://www.npmjs.com/~polyneue'
    }
  }
});

hubble.generate();