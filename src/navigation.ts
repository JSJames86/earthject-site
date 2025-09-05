import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Get Involved', href: '#' }], // You can change this action button text and link
};

export const footerData = {
  links: [], // Removed placeholder links to simplify
  secondaryLinks: [], // Removed for simplicity
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/earthject?s=21&t=43GaHG5AuaSXcDsOKAFLTQ' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/earthject' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/earthject' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/JSjames86/earthject-site' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/earthject' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@earthject' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/7c45mK2pTN' },
    { ariaLabel: 'Reddit', icon: 'tabler:brand-reddit', href: 'https://www.reddit.com/r/Earthject' },
    { ariaLabel: 'Patreon', icon: 'tabler:brand-patreon', href: 'https://www.patreon.com/user?u=183338080&utm_campaign=creatorshare_creator' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Earthject · All rights reserved.
  `,
};
