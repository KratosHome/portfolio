import nuxt from '@/assets/technologies/nuxt.svg'
import pinia from '@/assets/technologies/pinia.svg'
import tailwind from '@/assets/technologies/tailwindcss.svg'
import chart from '@/assets/technologies/chart-js.svg'
import primevue from '@/assets/technologies/primevue.png'
import splidejs from '@/assets/technologies/splidejs.svg'
import vuelidate from '@/assets/technologies/vuelidate.png'
import shadcn from '@/assets/technologies/shadcn.png'
import strapi from '@/assets/technologies/strapi-icon.svg'
import vitejs from '@/assets/technologies/vitejs.svg'
import react from '@/assets/technologies/ReactLogo.svg'
import casl from '@/assets/technologies/casl.png'
import hookform from '@/assets/technologies/hookform.png'
import reduxToolkit from '@/assets/technologies/redux.svg'
import material from '@/assets/technologies/material-ui.svg'
import apexcharts from '@/assets/technologies/apexcharts.png'
import SCSS from '@/assets/technologies/sass.svg'
import astro from '@/assets/technologies/astro-dark.svg'
import threejs from '@/assets/technologies/threejs.svg'
import nextJs from '@/assets/technologies/NextLogo.svg'
import TypeScript from '@/assets/technologies/TypeScriptLogo.svg'
import braintree from '@/assets/technologies/braintree.svg'
import vueflow from '@/assets/technologies/vueflow.png'
import ElectronJS from '@/assets/technologies/electron.svg'
import MobX from '@/assets/technologies/mobx.svg'
import soap from '@/assets/technologies/soap.jpg'
import xml from '@/assets/technologies/xml.svg'
import svn from '@/assets/technologies/subversion.svg'
//vueflow.png

export const projectsNew = [
  {
    id: 1,
    title: 'nocobot',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'A platform for exchanging and earning cryptocurrency, creating tasks for other users, subscriptions, a wallet, a referral system, admin panel fot managing users and tasks, and a chat for communication.',
    technologies: [nuxt, pinia, tailwind, chart, primevue, splidejs, vuelidate],
    gif: '/projects/nocobot.gif',
  },
  {
    id: 2,
    title: 'copyhub',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Platform for automated cryptocurrency trading. It allows users to connect an exchange API (e.g. ByBit), choose liquid trading pairs (BTC/USDT, ETH/USDT, etc.) and trade, referral system, admin panel for managing users and trading pairs.',
    technologies: [nuxt, pinia, tailwind, chart, shadcn, vuelidate],
    gif: '/projects/copyhub.gif',
  },
  {
    id: 3,
    title: 'dios',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'employee monitoring platform',
    technologies: [
      vitejs,
      react,
      casl,
      hookform,
      reduxToolkit,
      material,
      apexcharts,
      SCSS,
    ],
    gif: '/projects/dios.gif',
  },
  {
    id: 4,
    title: 'forbs metal',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'information about the company, products in the form of a 3D object that can be managed',
    technologies: [astro, tailwind, threejs, strapi],
    gif: '/projects/forbs-metal.gif',
  },
  {
    id: 5,
    title: 'Give Five',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'information platform about company',
    technologies: [nextJs, tailwind, strapi],
    gif: '/projects/get-five.gif',
  },
  {
    id: 6,
    title: 'rastcom',
    isMobile: false,
    company: 'rastcom',
    description:
      'platform for selling services, division by city category, chat, subscription, payment, calendar and more',
    technologies: [react, TypeScript, reduxToolkit, braintree, material],
    gif: '/projects/rastcom.gif',
  },
  {
    id: 7,
    title: 'socap',
    isMobile: true,
    company: 'Inc-Dev',
    description: 'crypto wallet, transfer mobile app for browser app',
    technologies: [react, TypeScript],
    gif: '/projects/socap.gif',
  },
  {
    id: 8,
    title: 'Etere',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'application for selling services, categories, regions, payment and more',
    technologies: [react, TypeScript, ElectronJS, SCSS, MobX, soap, xml, svn],
    gif: '/projects/etere.gif',
  },
  {
    id: 9,
    title: 'trstcontract',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'application for selling services, categories, regions, payment and more',
    technologies: [nuxt, pinia, tailwind, vuelidate, chart],
    gif: '/projects/trstcontract.gif',
  },
  {
    id: 10,
    title: 'virvel',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'platform for creating a bot, controlling it and conveniently creating a sequence of actions',
    technologies: [nuxt, pinia, primevue, tailwind, vueflow, vuelidate, chart],
    gif: '/projects/virvel.gif',
  },
]
