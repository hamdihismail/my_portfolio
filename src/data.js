import imageLarge1 from './assets/images/retroshop_large.svg';
import imageSmall1 from './assets/images/retroshop_small.svg';
import imageLarge2 from './assets/images/advice_img_large.png';
import imageSmall2 from './assets/images/advice_img_small.png';
import imageLarge3 from './assets/images/tip_img_large.png';
import imageSmall3 from './assets/images/tip_img_small.png';
import imageLarge4 from './assets/images/github_img_large.png';
import imageSmall4 from './assets/images/github_img_small.png';
// import imageLarge4 from './assets/images/thumbnail-project-4-large.webp';
// import imageSmall4 from './assets/images/thumbnail-project-4-small.webp';
// import imageLarge5 from './assets/images/thumbnail-project-5-large.webp';
// import imageSmall5 from './assets/images/thumbnail-project-5-small.webp';
// import imageLarge6 from './assets/images/thumbnail-project-6-large.webp';
// import imageSmall6 from './assets/images/thumbnail-project-6-small.webp';

export const social = [
  {
    id: 1,
    url: 'https://github.com/hamdihismail',
    name: 'Github',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24'>
        <path
          //   fill='#FFF'
          fillRule='evenodd'
          d='M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z'
        />
      </svg>
    ),
  },
  {
    id: 2,
    url: 'mailto:hamdihismail@gmail.com',
    name: 'Email',
    icon: (
      <svg version='1.1' id='Capa_1' viewBox='0 0 490 490'>
        <g>
          <path
            d='M485.825,177.806L251.252,2.084c-3.706-2.779-8.797-2.779-12.503,0L4.181,177.801c-2.626,1.97-4.174,5.061-4.174,8.344
		c0,0.002,0,0.003,0,0.005H0.001v293.425C0.001,485.333,4.67,490,10.427,490h469.146c5.758,0,10.425-4.667,10.425-10.426V186.149
		C489.999,182.866,488.452,179.776,485.825,177.806z M245,23.455l217.185,162.695l-72.245,54.118v-99.205H100.067v99.203
		l-72.245-54.121L245,23.455z M369.088,255.886L245,348.839l-124.082-92.954v-93.972h248.17V255.886z M20.852,469.149V206.977
		l217.897,163.232c5.38,3.763,10.65,1.39,12.503,0l217.896-163.223v262.163H20.852z'
          />
          <rect x='185.369' y='198.464' width='121.212' height='20.851' />
          <rect x='185.369' y='245.312' width='121.212' height='20.851' />
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/hamdi-ismail-248b0121a/',
    name: 'Linkedin',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24'>
        <path
          //   fill='#FFF'
          fillRule='evenodd'
          d='M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z'
        />
      </svg>
    ),
  },
  // {
  //   id: 4,
  //   url: 'https://www.twitter.com',
  //   icon: (
  //     <svg xmlns='http://www.w3.org/2000/svg' width='24' height='20'>
  //       <path
  //         //   fill='#FFF'
  //         d='M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z'
  //       />
  //     </svg>
  //   ),
  // },
];
export const skills = [
  {
    id: 1,
    skill: 'HTML',
    years: '',
  },
  {
    id: 2,
    skill: 'CSS',
    years: '',
  },
  {
    id: 3,
    skill: 'JavaScript',
    years: '',
  },
  {
    id: 4,
    skill: 'React',
    years: '',
  },
  {
    id: 5,
    skill: 'Node.js',
    years: '',
  },
  {
    id: 6,
    skill: 'MongoDB',
    years: '',
  },
  {
    id: 7,
    skill: 'RestAPI',
    years: '',
  },
  {
    id: 8,
    skill: 'GitHub',
    years: '',
  },
  {
    id: 9,
    skill: 'Accessibility',
    years: '',
  },
  {
    id: 10,
    skill: 'SASS / SCSS',
    years: '',
  },
  {
    id: 11,
    skill: 'Responsive Design',
    years: '',
  },
];

export const projects = [
  {
    id: 1,
    image_large: imageLarge1,
    image_small: imageSmall1,
    name: 'RETRO SHOP E-COMMERCE WEBSITE',
    tech: 'REACT NODE.JS AIRTABLE AUTH0 STRIPE API',
    code_url: 'https://github.com/hamdihismail/react-store',
    project_url: 'https://frolicking-dolphin-ef034d.netlify.app',
  },
  {
    id: 2,
    image_large: imageLarge2,
    image_small: imageSmall2,
    name: 'ADVICE GENERATOR APP',
    tech: 'HTML CSS JAVASCRIPT API',
    code_url: 'https://github.com/hamdihismail/advice-generator-app',
    project_url: 'https://coruscating-pasca-b8d3c0.netlify.app',
  },
  {
    id: 3,
    image_large: imageLarge3,
    image_small: imageSmall3,
    name: 'TIP CALCULATOR & SPLITTER',
    tech: 'HTML CSS JAVASCRIPT',
    code_url: 'https://github.com/hamdihismail/tip-calculator-app',
    project_url: 'https://precious-bonbon-5a0e79.netlify.app',
  },
  {
    id: 4,
    image_large: imageLarge4,
    image_small: imageSmall4,
    name: 'GITHUB USER SEARCH APP',
    tech: 'HTML SASS JAVASCRIPT API',
    code_url: 'https://github.com/hamdihismail/github-user-search',
    project_url: 'https://silly-pothos-00c984.netlify.app',
  },
  // {
  //   id: 4,
  //   image_large: imageLarge4,
  //   image_small: imageSmall4,
  //   name: 'PROJECT 4',
  //   tech: 'HTML CSS JAVASCRIPT',
  //   code_url: 'https://www.github.com',
  //   project_url: 'https://www.netlify.com',
  // },
  // {
  //   id: 5,
  //   image_large: imageLarge5,
  //   image_small: imageSmall5,
  //   name: 'PROJECT 5',
  //   tech: 'REACT',
  //   code_url: 'https://www.github.com',
  //   project_url: 'https://www.netlify.com',
  // },
  // {
  //   id: 6,
  //   image_large: imageLarge6,
  //   image_small: imageSmall6,
  //   name: 'PROJECT 6',
  //   tech: 'REACT',
  //   code_url: 'https://www.github.com',
  //   project_url: 'https://www.netlify.com',
  // },
];
