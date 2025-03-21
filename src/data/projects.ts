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

const projectsEn = [
  {
    id: 1,
    title: 'Nocobot',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'A platform for exchanging and earning cryptocurrency, creating tasks for other users, subscriptions, a wallet, a referral system, admin panel fot managing users and tasks, and a chat for communication.',
    technologies: [nuxt, pinia, tailwind, chart, primevue, splidejs, vuelidate],
    gif: '/projects/nocobot.gif',
  },
  {
    id: 2,
    title: 'Copyhub',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Platform for automated cryptocurrency trading. It allows users to connect an exchange API (e.g. ByBit), choose liquid trading pairs (BTC/USDT, ETH/USDT, etc.) and trade, referral system, admin panel for managing users and trading pairs.',
    technologies: [nuxt, pinia, tailwind, chart, shadcn, vuelidate],
    gif: '/projects/copyhub.gif',
  },
  {
    id: 3,
    title: 'ДІОС',
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
    title: 'Forbs Metal',
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
    title: 'Rastcom',
    isMobile: false,
    company: 'rastcom',
    description:
      'platform for selling services, division by city category, chat, subscription, payment, calendar and more',
    technologies: [react, TypeScript, reduxToolkit, braintree, material],
    gif: '/projects/rastcom.gif',
  },
  {
    id: 7,
    title: 'SOCAP',
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
    title: 'Trstcontract',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'application for selling services, categories, regions, payment and more',
    technologies: [nuxt, pinia, tailwind, vuelidate, chart],
    gif: '/projects/trstcontract.gif',
  },
  {
    id: 10,
    title: 'Virvel',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'platform for creating a bot, controlling it and conveniently creating a sequence of actions',
    technologies: [nuxt, pinia, primevue, tailwind, vueflow, vuelidate, chart],
    gif: '/projects/virvel.gif',
  },
]

const projectsUa = [
  {
    id: 1,
    title: 'Nocobot',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'Платформа для обміну та заробітку криптовалюти: створення завдань для інших користувачів, підписки, вбудований гаманець, реферальна система, адмін-панель для керування користувачами та завданнями, а також чат для спілкування.',
    technologies: [nuxt, pinia, tailwind, chart, primevue, splidejs, vuelidate],
    gif: '/projects/nocobot.gif',
  },
  {
    id: 2,
    title: 'Copyhub',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Платформа для автоматизованої торгівлі криптовалютою. Дозволяє підключити API біржі (наприклад, ByBit), обрати ліквідні торгові пари (BTC/USDT, ETH/USDT тощо) і торгувати. Має реферальну систему та адмін-панель для керування користувачами та торговими парами.',
    technologies: [nuxt, pinia, tailwind, chart, shadcn, vuelidate],
    gif: '/projects/copyhub.gif',
  },
  {
    id: 3,
    title: 'ДІОС',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'Платформа для моніторингу діяльності співробітників.',
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
    title: 'Forbs Metal',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Інформаційний сайт про компанію та продукцію з 3D-об’єктом, яким можна керувати.',
    technologies: [astro, tailwind, threejs, strapi],
    gif: '/projects/forbs-metal.gif',
  },
  {
    id: 5,
    title: 'Give Five',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'Інформаційна платформа про компанію.',
    technologies: [nextJs, tailwind, strapi],
    gif: '/projects/get-five.gif',
  },
  {
    id: 6,
    title: 'Rastcom',
    isMobile: false,
    company: 'rastcom',
    description:
      'Платформа для продажу послуг: розділення за містами, чат, підписка, оплати, календар та інше.',
    technologies: [react, TypeScript, reduxToolkit, braintree, material],
    gif: '/projects/rastcom.gif',
  },
  {
    id: 7,
    title: 'SOCAP',
    isMobile: true,
    company: 'Inc-Dev',
    description: 'Мобільний криптогаманець, додаток для переказів у браузері.',
    technologies: [react, TypeScript],
    gif: '/projects/socap.gif',
  },
  {
    id: 8,
    title: 'Etere',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Додаток для продажу послуг з категоріями, регіонами, оплатою та іншим функціоналом.',
    technologies: [react, TypeScript, ElectronJS, SCSS, MobX, soap, xml, svn],
    gif: '/projects/etere.gif',
  },
  {
    id: 9,
    title: 'Trstcontract',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Додаток для продажу послуг з категоріями, регіонами, оплатою та іншим функціоналом.',
    technologies: [nuxt, pinia, tailwind, vuelidate, chart],
    gif: '/projects/trstcontract.gif',
  },
  {
    id: 10,
    title: 'Virvel',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Платформа для створення бота, його керування та зручного формування послідовностей дій.',
    technologies: [nuxt, pinia, primevue, tailwind, vueflow, vuelidate, chart],
    gif: '/projects/virvel.gif',
  },
]

const projectsDe = [
  {
    id: 1,
    title: 'Nocobot',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'Plattform zum Tauschen und Verdienen von Kryptowährungen: Erstellen von Aufgaben für andere Nutzer, Abonnements, integrierte Wallet, Empfehlungssystem, Admin-Panel zur Verwaltung von Nutzern und Aufgaben sowie Chat zur Kommunikation.',
    technologies: [nuxt, pinia, tailwind, chart, primevue, splidejs, vuelidate],
    gif: '/projects/nocobot.gif',
  },
  {
    id: 2,
    title: 'Copyhub',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Plattform für automatisierten Kryptowährungshandel. Ermöglicht das Verbinden einer Exchange-API (z. B. ByBit), Auswahl liquider Handelspaare (BTC/USDT, ETH/USDT usw.) und den Handel. Inklusive Empfehlungssystem und Admin-Panel zur Benutzer- und Paarverwaltung.',
    technologies: [nuxt, pinia, tailwind, chart, shadcn, vuelidate],
    gif: '/projects/copyhub.gif',
  },
  {
    id: 3,
    title: 'DIOS',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'Plattform zur Mitarbeiterüberwachung.',
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
    title: 'Forbs Metal',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Informationsseite über das Unternehmen und seine Produkte mit einem steuerbaren 3D-Objekt.',
    technologies: [astro, tailwind, threejs, strapi],
    gif: '/projects/forbs-metal.gif',
  },
  {
    id: 5,
    title: 'Give Five',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'Informationsplattform über das Unternehmen.',
    technologies: [nextJs, tailwind, strapi],
    gif: '/projects/get-five.gif',
  },
  {
    id: 6,
    title: 'Rastcom',
    isMobile: false,
    company: 'rastcom',
    description:
      'Dienstleistungsplattform mit Stadtkategorien, Chat, Abonnement, Zahlung, Kalender und mehr.',
    technologies: [react, TypeScript, reduxToolkit, braintree, material],
    gif: '/projects/rastcom.gif',
  },
  {
    id: 7,
    title: 'SOCAP',
    isMobile: true,
    company: 'Inc-Dev',
    description: 'Krypto-Wallet und Transfer-App für mobile Geräte im Browser.',
    technologies: [react, TypeScript],
    gif: '/projects/socap.gif',
  },
  {
    id: 8,
    title: 'Etere',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Anwendung für den Verkauf von Dienstleistungen mit Kategorien, Regionen, Zahlung und weiteren Funktionen.',
    technologies: [react, TypeScript, ElectronJS, SCSS, MobX, soap, xml, svn],
    gif: '/projects/etere.gif',
  },
  {
    id: 9,
    title: 'Trstcontract',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Anwendung für den Verkauf von Dienstleistungen mit Kategorien, Regionen, Zahlung und weiteren Funktionen.',
    technologies: [nuxt, pinia, tailwind, vuelidate, chart],
    gif: '/projects/trstcontract.gif',
  },
  {
    id: 10,
    title: 'Virvel',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Plattform zur Erstellung und Steuerung eines Bots sowie zur komfortablen Erstellung von Aktionsabläufen.',
    technologies: [nuxt, pinia, primevue, tailwind, vueflow, vuelidate, chart],
    gif: '/projects/virvel.gif',
  },
]

const projectsEs = [
  {
    id: 1,
    title: 'Nocobot',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'Plataforma para intercambiar y ganar criptomonedas: creación de tareas para otros usuarios, suscripciones, billetera integrada, sistema de referidos, panel de administración para gestionar usuarios y tareas, y chat para comunicación.',
    technologies: [nuxt, pinia, tailwind, chart, primevue, splidejs, vuelidate],
    gif: '/projects/nocobot.gif',
  },
  {
    id: 2,
    title: 'Copyhub',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Plataforma para el comercio automatizado de criptomonedas. Permite conectar una API de intercambio (por ejemplo, ByBit), elegir pares de comercio líquidos (BTC/USDT, ETH/USDT, etc.) y operar. Incluye sistema de referidos y panel de administración para gestionar usuarios y pares.',
    technologies: [nuxt, pinia, tailwind, chart, shadcn, vuelidate],
    gif: '/projects/copyhub.gif',
  },
  {
    id: 3,
    title: 'DIOS',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'Plataforma para la supervisión de empleados.',
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
    title: 'Forbs Metal',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Sitio informativo sobre la empresa y sus productos con un objeto 3D interactivo.',
    technologies: [astro, tailwind, threejs, strapi],
    gif: '/projects/forbs-metal.gif',
  },
  {
    id: 5,
    title: 'Give Five',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'Plataforma informativa sobre la empresa.',
    technologies: [nextJs, tailwind, strapi],
    gif: '/projects/get-five.gif',
  },
  {
    id: 6,
    title: 'Rastcom',
    isMobile: false,
    company: 'rastcom',
    description:
      'Plataforma para la venta de servicios: categorización por ciudad, chat, suscripciones, pagos, calendario y más.',
    technologies: [react, TypeScript, reduxToolkit, braintree, material],
    gif: '/projects/rastcom.gif',
  },
  {
    id: 7,
    title: 'SOCAP',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'Aplicación móvil de criptobilletera y transferencias, disponible como app web.',
    technologies: [react, TypeScript],
    gif: '/projects/socap.gif',
  },
  {
    id: 8,
    title: 'Etere',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Aplicación para la venta de servicios con categorías, regiones, pagos y más funcionalidades.',
    technologies: [react, TypeScript, ElectronJS, SCSS, MobX, soap, xml, svn],
    gif: '/projects/etere.gif',
  },
  {
    id: 9,
    title: 'Trstcontract',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Aplicación para la venta de servicios con categorías, regiones, pagos y más funcionalidades.',
    technologies: [nuxt, pinia, tailwind, vuelidate, chart],
    gif: '/projects/trstcontract.gif',
  },
  {
    id: 10,
    title: 'Virvel',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Plataforma para crear bots, controlarlos y construir secuencias de acciones de forma intuitiva.',
    technologies: [nuxt, pinia, primevue, tailwind, vueflow, vuelidate, chart],
    gif: '/projects/virvel.gif',
  },
]

const projectsFr = [
  {
    id: 1,
    title: 'Nocobot',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'Plateforme d’échange et de gain de cryptomonnaies : création de tâches pour d’autres utilisateurs, abonnements, portefeuille intégré, système de parrainage, panneau d’administration pour gérer les utilisateurs et les tâches, et messagerie pour la communication.',
    technologies: [nuxt, pinia, tailwind, chart, primevue, splidejs, vuelidate],
    gif: '/projects/nocobot.gif',
  },
  {
    id: 2,
    title: 'Copyhub',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Plateforme de trading automatisé de cryptomonnaies. Permet de connecter une API d’échange (par ex. ByBit), de choisir des paires de trading liquides (BTC/USDT, ETH/USDT, etc.) et de trader. Inclut un système de parrainage et un panneau d’administration pour gérer les utilisateurs et les paires.',
    technologies: [nuxt, pinia, tailwind, chart, shadcn, vuelidate],
    gif: '/projects/copyhub.gif',
  },
  {
    id: 3,
    title: 'DIOS',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'Plateforme de surveillance des employés.',
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
    title: 'Forbs Metal',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Site d’information sur l’entreprise et ses produits avec un objet 3D interactif.',
    technologies: [astro, tailwind, threejs, strapi],
    gif: '/projects/forbs-metal.gif',
  },
  {
    id: 5,
    title: 'Give Five',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'Plateforme d’information sur l’entreprise.',
    technologies: [nextJs, tailwind, strapi],
    gif: '/projects/get-five.gif',
  },
  {
    id: 6,
    title: 'Rastcom',
    isMobile: false,
    company: 'rastcom',
    description:
      'Plateforme de vente de services avec catégorisation par ville, messagerie, abonnements, paiements, calendrier et plus.',
    technologies: [react, TypeScript, reduxToolkit, braintree, material],
    gif: '/projects/rastcom.gif',
  },
  {
    id: 7,
    title: 'SOCAP',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'Application mobile de portefeuille crypto et de transfert disponible via navigateur.',
    technologies: [react, TypeScript],
    gif: '/projects/socap.gif',
  },
  {
    id: 8,
    title: 'Etere',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Application de vente de services avec catégories, régions, paiement et autres fonctionnalités.',
    technologies: [react, TypeScript, ElectronJS, SCSS, MobX, soap, xml, svn],
    gif: '/projects/etere.gif',
  },
  {
    id: 9,
    title: 'Trstcontract',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Application de vente de services avec catégories, régions, paiement et autres fonctionnalités.',
    technologies: [nuxt, pinia, tailwind, vuelidate, chart],
    gif: '/projects/trstcontract.gif',
  },
  {
    id: 10,
    title: 'Virvel',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Plateforme de création et de contrôle de bots avec un éditeur visuel de séquences d’actions.',
    technologies: [nuxt, pinia, primevue, tailwind, vueflow, vuelidate, chart],
    gif: '/projects/virvel.gif',
  },
]

const projectsHi = [
  {
    id: 1,
    title: 'Nocobot',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'क्रिप्टोकरेंसी कमाने और एक्सचेंज करने के लिए एक प्लेटफ़ॉर्म: अन्य उपयोगकर्ताओं के लिए कार्य बनाना, सब्सक्रिप्शन, वॉलेट, रेफ़रल सिस्टम, उपयोगकर्ताओं और कार्यों के लिए एडमिन पैनल, और संचार के लिए चैट।',
    technologies: [nuxt, pinia, tailwind, chart, primevue, splidejs, vuelidate],
    gif: '/projects/nocobot.gif',
  },
  {
    id: 2,
    title: 'Copyhub',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'स्वचालित क्रिप्टो ट्रेडिंग प्लेटफ़ॉर्म। उपयोगकर्ता एक्सचेंज API (जैसे ByBit) जोड़ सकते हैं, लिक्विड ट्रेडिंग पेयर चुन सकते हैं (जैसे BTC/USDT, ETH/USDT) और ट्रेड कर सकते हैं। इसमें रेफ़रल सिस्टम और एडमिन पैनल भी शामिल है।',
    technologies: [nuxt, pinia, tailwind, chart, shadcn, vuelidate],
    gif: '/projects/copyhub.gif',
  },
  {
    id: 3,
    title: 'DIOS',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'कर्मचारी निगरानी के लिए एक प्लेटफ़ॉर्म।',
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
    title: 'Forbs Metal',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'कंपनी और उत्पादों के बारे में जानकारी, जिन्हें 3D ऑब्जेक्ट के रूप में इंटरैक्टिव रूप से देखा जा सकता है।',
    technologies: [astro, tailwind, threejs, strapi],
    gif: '/projects/forbs-metal.gif',
  },
  {
    id: 5,
    title: 'Give Five',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'कंपनी के बारे में जानकारी देने वाला एक प्लेटफ़ॉर्म।',
    technologies: [nextJs, tailwind, strapi],
    gif: '/projects/get-five.gif',
  },
  {
    id: 6,
    title: 'Rastcom',
    isMobile: false,
    company: 'rastcom',
    description:
      'सेवाओं को बेचने के लिए प्लेटफ़ॉर्म: शहर के अनुसार श्रेणी, चैट, सब्सक्रिप्शन, भुगतान, कैलेंडर आदि।',
    technologies: [react, TypeScript, reduxToolkit, braintree, material],
    gif: '/projects/rastcom.gif',
  },
  {
    id: 7,
    title: 'SOCAP',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'क्रिप्टो वॉलेट और ट्रांसफर मोबाइल ऐप, ब्राउज़र के लिए बनाया गया।',
    technologies: [react, TypeScript],
    gif: '/projects/socap.gif',
  },
  {
    id: 8,
    title: 'Etere',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'सेवाएं बेचने के लिए एप्लिकेशन, जिसमें श्रेणियां, क्षेत्र, भुगतान और बहुत कुछ शामिल है।',
    technologies: [react, TypeScript, ElectronJS, SCSS, MobX, soap, xml, svn],
    gif: '/projects/etere.gif',
  },
  {
    id: 9,
    title: 'Trstcontract',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'सेवाएं बेचने के लिए एप्लिकेशन, जिसमें श्रेणियां, क्षेत्र, भुगतान और बहुत कुछ शामिल है।',
    technologies: [nuxt, pinia, tailwind, vuelidate, chart],
    gif: '/projects/trstcontract.gif',
  },
  {
    id: 10,
    title: 'Virvel',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'बॉट बनाने, नियंत्रित करने और क्रियाओं की अनुक्रमिक श्रृंखला आसानी से बनाने के लिए प्लेटफ़ॉर्म।',
    technologies: [nuxt, pinia, primevue, tailwind, vueflow, vuelidate, chart],
    gif: '/projects/virvel.gif',
  },
]

const projectsIt = [
  {
    id: 1,
    title: 'Nocobot',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'Piattaforma per lo scambio e il guadagno di criptovalute: creazione di attività per altri utenti, abbonamenti, portafoglio integrato, sistema di referral, pannello di amministrazione per gestire utenti e attività, e chat per la comunicazione.',
    technologies: [nuxt, pinia, tailwind, chart, primevue, splidejs, vuelidate],
    gif: '/projects/nocobot.gif',
  },
  {
    id: 2,
    title: 'Copyhub',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Piattaforma per il trading automatizzato di criptovalute. Permette di collegare un’API di exchange (es. ByBit), scegliere coppie di trading liquide (BTC/USDT, ETH/USDT, ecc.) e operare. Include sistema di referral e pannello di amministrazione per la gestione di utenti e coppie.',
    technologies: [nuxt, pinia, tailwind, chart, shadcn, vuelidate],
    gif: '/projects/copyhub.gif',
  },
  {
    id: 3,
    title: 'DIOS',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'Piattaforma per il monitoraggio dei dipendenti.',
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
    title: 'Forbs Metal',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Sito informativo sull’azienda e i suoi prodotti con oggetto 3D interattivo.',
    technologies: [astro, tailwind, threejs, strapi],
    gif: '/projects/forbs-metal.gif',
  },
  {
    id: 5,
    title: 'Give Five',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'Piattaforma informativa sull’azienda.',
    technologies: [nextJs, tailwind, strapi],
    gif: '/projects/get-five.gif',
  },
  {
    id: 6,
    title: 'Rastcom',
    isMobile: false,
    company: 'rastcom',
    description:
      'Piattaforma per la vendita di servizi: suddivisione per città, chat, abbonamenti, pagamenti, calendario e altro.',
    technologies: [react, TypeScript, reduxToolkit, braintree, material],
    gif: '/projects/rastcom.gif',
  },
  {
    id: 7,
    title: 'SOCAP',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'App mobile per wallet cripto e trasferimenti, accessibile via browser.',
    technologies: [react, TypeScript],
    gif: '/projects/socap.gif',
  },
  {
    id: 8,
    title: 'Etere',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Applicazione per la vendita di servizi con categorie, regioni, pagamenti e funzionalità avanzate.',
    technologies: [react, TypeScript, ElectronJS, SCSS, MobX, soap, xml, svn],
    gif: '/projects/etere.gif',
  },
  {
    id: 9,
    title: 'Trstcontract',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Applicazione per la vendita di servizi con categorie, regioni, pagamenti e funzionalità avanzate.',
    technologies: [nuxt, pinia, tailwind, vuelidate, chart],
    gif: '/projects/trstcontract.gif',
  },
  {
    id: 10,
    title: 'Virvel',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Piattaforma per creare e gestire bot, con creazione intuitiva di sequenze di azioni.',
    technologies: [nuxt, pinia, primevue, tailwind, vueflow, vuelidate, chart],
    gif: '/projects/virvel.gif',
  },
]

const projectsJa = [
  {
    id: 1,
    title: 'Nocobot',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      '仮想通貨の交換と収益化のためのプラットフォーム。他のユーザー向けのタスク作成、サブスクリプション、内蔵ウォレット、紹介システム、ユーザーとタスク管理のための管理パネル、そしてチャット機能を備えています。',
    technologies: [nuxt, pinia, tailwind, chart, primevue, splidejs, vuelidate],
    gif: '/projects/nocobot.gif',
  },
  {
    id: 2,
    title: 'Copyhub',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      '自動暗号資産取引プラットフォーム。ByBitなどの取引所APIを接続し、BTC/USDTやETH/USDTなどの流動性の高い取引ペアを選択して取引可能。紹介システムおよび取引ペア管理用の管理パネルも備えています。',
    technologies: [nuxt, pinia, tailwind, chart, shadcn, vuelidate],
    gif: '/projects/copyhub.gif',
  },
  {
    id: 3,
    title: 'DIOS',
    isMobile: false,
    company: 'Inc-Dev',
    description: '従業員の行動監視プラットフォーム。',
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
    title: 'Forbs Metal',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      '企業と製品に関する情報を提供するウェブサイト。3Dオブジェクトをインタラクティブに操作可能。',
    technologies: [astro, tailwind, threejs, strapi],
    gif: '/projects/forbs-metal.gif',
  },
  {
    id: 5,
    title: 'Give Five',
    isMobile: false,
    company: 'Inc-Dev',
    description: '企業に関する情報を提供するプラットフォーム。',
    technologies: [nextJs, tailwind, strapi],
    gif: '/projects/get-five.gif',
  },
  {
    id: 6,
    title: 'Rastcom',
    isMobile: false,
    company: 'rastcom',
    description:
      'サービス販売用プラットフォーム。都市ごとの分類、チャット、サブスクリプション、決済、カレンダーなどを提供。',
    technologies: [react, TypeScript, reduxToolkit, braintree, material],
    gif: '/projects/rastcom.gif',
  },
  {
    id: 7,
    title: 'SOCAP',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      '暗号資産ウォレットと送金機能を持つ、ブラウザ対応のモバイルアプリ。',
    technologies: [react, TypeScript],
    gif: '/projects/socap.gif',
  },
  {
    id: 8,
    title: 'Etere',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'サービスの販売を目的としたアプリ。カテゴリ、地域、支払いなどの機能を提供。',
    technologies: [react, TypeScript, ElectronJS, SCSS, MobX, soap, xml, svn],
    gif: '/projects/etere.gif',
  },
  {
    id: 9,
    title: 'Trstcontract',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'サービスの販売を目的としたアプリ。カテゴリ、地域、支払いなどの機能を提供。',
    technologies: [nuxt, pinia, tailwind, vuelidate, chart],
    gif: '/projects/trstcontract.gif',
  },
  {
    id: 10,
    title: 'Virvel',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'ボットの作成、管理、アクションシーケンスを直感的に構築できるプラットフォーム。',
    technologies: [nuxt, pinia, primevue, tailwind, vueflow, vuelidate, chart],
    gif: '/projects/virvel.gif',
  },
]

const projectsKo = [
  {
    id: 1,
    title: 'Nocobot',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      '암호화폐를 교환하고 수익을 얻을 수 있는 플랫폼입니다. 다른 사용자에게 작업을 생성하고, 구독 기능, 내장 지갑, 추천 시스템, 사용자 및 작업 관리를 위한 관리자 패널, 채팅 기능이 포함되어 있습니다.',
    technologies: [nuxt, pinia, tailwind, chart, primevue, splidejs, vuelidate],
    gif: '/projects/nocobot.gif',
  },
  {
    id: 2,
    title: 'Copyhub',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      '자동 암호화폐 거래 플랫폼. ByBit 등 거래소 API를 연결하고, BTC/USDT, ETH/USDT 등 유동성이 높은 거래쌍을 선택하여 거래할 수 있습니다. 추천 시스템과 사용자 및 거래쌍 관리를 위한 관리자 패널이 포함되어 있습니다.',
    technologies: [nuxt, pinia, tailwind, chart, shadcn, vuelidate],
    gif: '/projects/copyhub.gif',
  },
  {
    id: 3,
    title: 'DIOS',
    isMobile: false,
    company: 'Inc-Dev',
    description: '직원 활동을 모니터링하는 플랫폼입니다.',
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
    title: 'Forbs Metal',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      '회사 및 제품에 대한 정보를 제공하는 웹사이트로, 사용자가 조작할 수 있는 3D 객체를 포함합니다.',
    technologies: [astro, tailwind, threejs, strapi],
    gif: '/projects/forbs-metal.gif',
  },
  {
    id: 5,
    title: 'Give Five',
    isMobile: false,
    company: 'Inc-Dev',
    description: '회사에 대한 정보를 제공하는 플랫폼입니다.',
    technologies: [nextJs, tailwind, strapi],
    gif: '/projects/get-five.gif',
  },
  {
    id: 6,
    title: 'Rastcom',
    isMobile: false,
    company: 'rastcom',
    description:
      '서비스 판매 플랫폼입니다. 도시별 카테고리, 채팅, 구독, 결제, 캘린더 등 다양한 기능을 제공합니다.',
    technologies: [react, TypeScript, reduxToolkit, braintree, material],
    gif: '/projects/rastcom.gif',
  },
  {
    id: 7,
    title: 'SOCAP',
    isMobile: true,
    company: 'Inc-Dev',
    description: '암호화폐 지갑 및 송금 기능이 있는 모바일 전용 웹 앱입니다.',
    technologies: [react, TypeScript],
    gif: '/projects/socap.gif',
  },
  {
    id: 8,
    title: 'Etere',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      '서비스 판매를 위한 애플리케이션으로, 카테고리, 지역, 결제 등 다양한 기능을 제공합니다.',
    technologies: [react, TypeScript, ElectronJS, SCSS, MobX, soap, xml, svn],
    gif: '/projects/etere.gif',
  },
  {
    id: 9,
    title: 'Trstcontract',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      '서비스 판매를 위한 애플리케이션으로, 카테고리, 지역, 결제 등 다양한 기능을 제공합니다.',
    technologies: [nuxt, pinia, tailwind, vuelidate, chart],
    gif: '/projects/trstcontract.gif',
  },
  {
    id: 10,
    title: 'Virvel',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      '봇을 만들고 제어하며, 동작 순서를 시각적으로 쉽게 구성할 수 있는 플랫폼입니다.',
    technologies: [nuxt, pinia, primevue, tailwind, vueflow, vuelidate, chart],
    gif: '/projects/virvel.gif',
  },
]

const projectsPt = [
  {
    id: 1,
    title: 'Nocobot',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'Plataforma para troca e ganho de criptomoedas: criação de tarefas para outros usuários, assinaturas, carteira integrada, sistema de indicações, painel de administração para gerenciar usuários e tarefas, e chat para comunicação.',
    technologies: [nuxt, pinia, tailwind, chart, primevue, splidejs, vuelidate],
    gif: '/projects/nocobot.gif',
  },
  {
    id: 2,
    title: 'Copyhub',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Plataforma de negociação automatizada de criptomoedas. Permite conectar uma API de exchange (ex. ByBit), escolher pares de negociação com liquidez (BTC/USDT, ETH/USDT, etc.) e negociar. Inclui sistema de indicações e painel administrativo para gerenciar usuários e pares.',
    technologies: [nuxt, pinia, tailwind, chart, shadcn, vuelidate],
    gif: '/projects/copyhub.gif',
  },
  {
    id: 3,
    title: 'DIOS',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'Plataforma de monitoramento de funcionários.',
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
    title: 'Forbs Metal',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Site informativo sobre a empresa e seus produtos, com objeto 3D interativo.',
    technologies: [astro, tailwind, threejs, strapi],
    gif: '/projects/forbs-metal.gif',
  },
  {
    id: 5,
    title: 'Give Five',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'Plataforma informativa sobre a empresa.',
    technologies: [nextJs, tailwind, strapi],
    gif: '/projects/get-five.gif',
  },
  {
    id: 6,
    title: 'Rastcom',
    isMobile: false,
    company: 'rastcom',
    description:
      'Plataforma para venda de serviços: categorização por cidade, chat, assinaturas, pagamento, calendário e mais.',
    technologies: [react, TypeScript, reduxToolkit, braintree, material],
    gif: '/projects/rastcom.gif',
  },
  {
    id: 7,
    title: 'SOCAP',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'Aplicativo móvel de carteira e transferências de cripto, acessível via navegador.',
    technologies: [react, TypeScript],
    gif: '/projects/socap.gif',
  },
  {
    id: 8,
    title: 'Etere',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Aplicativo para venda de serviços, com categorias, regiões, pagamentos e outros recursos.',
    technologies: [react, TypeScript, ElectronJS, SCSS, MobX, soap, xml, svn],
    gif: '/projects/etere.gif',
  },
  {
    id: 9,
    title: 'Trstcontract',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Aplicativo para venda de serviços, com categorias, regiões, pagamentos e outros recursos.',
    technologies: [nuxt, pinia, tailwind, vuelidate, chart],
    gif: '/projects/trstcontract.gif',
  },
  {
    id: 10,
    title: 'Virvel',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Plataforma para criar bots, controlá-los e construir sequências de ações de forma intuitiva.',
    technologies: [nuxt, pinia, primevue, tailwind, vueflow, vuelidate, chart],
    gif: '/projects/virvel.gif',
  },
]

const projectsSv = [
  {
    id: 1,
    title: 'Nocobot',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'En plattform för att växla och tjäna kryptovaluta: skapa uppgifter för andra användare, prenumerationer, inbyggd plånbok, referralsystem, adminpanel för att hantera användare och uppgifter, samt chatt för kommunikation.',
    technologies: [nuxt, pinia, tailwind, chart, primevue, splidejs, vuelidate],
    gif: '/projects/nocobot.gif',
  },
  {
    id: 2,
    title: 'Copyhub',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Plattform för automatiserad handel med kryptovaluta. Användare kan ansluta ett börs-API (t.ex. ByBit), välja likvida handelspar (BTC/USDT, ETH/USDT, m.fl.) och börja handla. Inkluderar referralsystem och adminpanel för att hantera användare och par.',
    technologies: [nuxt, pinia, tailwind, chart, shadcn, vuelidate],
    gif: '/projects/copyhub.gif',
  },
  {
    id: 3,
    title: 'DIOS',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'Plattform för övervakning av anställda.',
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
    title: 'Forbs Metal',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Informationssida om företaget och dess produkter, med ett interaktivt 3D-objekt.',
    technologies: [astro, tailwind, threejs, strapi],
    gif: '/projects/forbs-metal.gif',
  },
  {
    id: 5,
    title: 'Give Five',
    isMobile: false,
    company: 'Inc-Dev',
    description: 'Informationsplattform om företaget.',
    technologies: [nextJs, tailwind, strapi],
    gif: '/projects/get-five.gif',
  },
  {
    id: 6,
    title: 'Rastcom',
    isMobile: false,
    company: 'rastcom',
    description:
      'Plattform för att sälja tjänster: kategoriserad per stad, chatt, prenumerationer, betalning, kalender och mer.',
    technologies: [react, TypeScript, reduxToolkit, braintree, material],
    gif: '/projects/rastcom.gif',
  },
  {
    id: 7,
    title: 'SOCAP',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      'Mobil kryptoplånbok och överföringsapp tillgänglig via webbläsare.',
    technologies: [react, TypeScript],
    gif: '/projects/socap.gif',
  },
  {
    id: 8,
    title: 'Etere',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Applikation för att sälja tjänster med kategorier, regioner, betalningar och fler funktioner.',
    technologies: [react, TypeScript, ElectronJS, SCSS, MobX, soap, xml, svn],
    gif: '/projects/etere.gif',
  },
  {
    id: 9,
    title: 'Trstcontract',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Applikation för att sälja tjänster med kategorier, regioner, betalningar och fler funktioner.',
    technologies: [nuxt, pinia, tailwind, vuelidate, chart],
    gif: '/projects/trstcontract.gif',
  },
  {
    id: 10,
    title: 'Virvel',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      'Plattform för att skapa och styra bots samt intuitivt bygga sekvenser av åtgärder.',
    technologies: [nuxt, pinia, primevue, tailwind, vueflow, vuelidate, chart],
    gif: '/projects/virvel.gif',
  },
]

const projectsZh = [
  {
    id: 1,
    title: 'Nocobot',
    isMobile: true,
    company: 'Inc-Dev',
    description:
      '一个用于加密货币交换和赚取的平台：为其他用户创建任务、订阅、内置钱包、推荐系统、用于管理用户和任务的后台管理面板，以及用于交流的聊天功能。',
    technologies: [nuxt, pinia, tailwind, chart, primevue, splidejs, vuelidate],
    gif: '/projects/nocobot.gif',
  },
  {
    id: 2,
    title: 'Copyhub',
    isMobile: false,
    company: 'Inc-Dev',
    description:
      '自动化加密货币交易平台。允许用户连接交易所 API（例如 ByBit），选择高流动性交易对（如 BTC/USDT、ETH/USDT 等）并进行交易。包含推荐系统和用户、交易对管理的后台管理面板。',
    technologies: [nuxt, pinia, tailwind, chart, shadcn, vuelidate],
    gif: '/projects/copyhub.gif',
  },
  {
    id: 3,
    title: 'DIOS',
    isMobile: false,
    company: 'Inc-Dev',
    description: '员工行为监控平台。',
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
    title: 'Forbs Metal',
    isMobile: false,
    company: 'Inc-Dev',
    description: '公司及其产品信息展示网站，包含可交互的 3D 模型。',
    technologies: [astro, tailwind, threejs, strapi],
    gif: '/projects/forbs-metal.gif',
  },
  {
    id: 5,
    title: 'Give Five',
    isMobile: false,
    company: 'Inc-Dev',
    description: '公司信息展示平台。',
    technologies: [nextJs, tailwind, strapi],
    gif: '/projects/get-five.gif',
  },
  {
    id: 6,
    title: 'Rastcom',
    isMobile: false,
    company: 'rastcom',
    description: '服务销售平台，按城市分类，含聊天、订阅、支付、日历等功能。',
    technologies: [react, TypeScript, reduxToolkit, braintree, material],
    gif: '/projects/rastcom.gif',
  },
  {
    id: 7,
    title: 'SOCAP',
    isMobile: true,
    company: 'Inc-Dev',
    description: '用于加密货币钱包和转账的移动应用，支持网页端访问。',
    technologies: [react, TypeScript],
    gif: '/projects/socap.gif',
  },
  {
    id: 8,
    title: 'Etere',
    isMobile: false,
    company: 'Inc-Dev',
    description: '服务销售应用，支持分类、区域、支付及其他扩展功能。',
    technologies: [react, TypeScript, ElectronJS, SCSS, MobX, soap, xml, svn],
    gif: '/projects/etere.gif',
  },
  {
    id: 9,
    title: 'Trstcontract',
    isMobile: false,
    company: 'Inc-Dev',
    description: '服务销售应用，支持分类、区域、支付及其他扩展功能。',
    technologies: [nuxt, pinia, tailwind, vuelidate, chart],
    gif: '/projects/trstcontract.gif',
  },
  {
    id: 10,
    title: 'Virvel',
    isMobile: false,
    company: 'Inc-Dev',
    description: '创建和控制机器人，轻松构建操作序列的平台。',
    technologies: [nuxt, pinia, primevue, tailwind, vueflow, vuelidate, chart],
    gif: '/projects/virvel.gif',
  },
]

export const projectsData = {
  en: projectsEn,
  uk: projectsUa,
  de: projectsDe,
  es: projectsEs,
  fr: projectsFr,
  hi: projectsHi,
  it: projectsIt,
  ja: projectsJa,
  ko: projectsKo,
  pt: projectsPt,
  sv: projectsSv,
  zh: projectsZh,
}
