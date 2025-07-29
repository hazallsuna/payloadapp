import { GlobalConfig } from "payload";

const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  fields: [
    { name: 'siteTitle', type: 'text' },
    { name: 'description', type: 'textarea' },
    {
      name: 'themeColor',
      type: 'select',
      options: ['light', 'dark'],
      defaultValue: 'light',
    },
  ],
};

export default SiteSettings;
