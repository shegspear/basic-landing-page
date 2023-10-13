import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-bg-img': './public/assets/hero-bg-img.png'
      },
      colors:{
        linkColor: '#667085',
        navBorderColor: '#D0D5DD',
        navBg: '#F2F4F7',
        blue700: '#175CD3', 
        blueDark: '#004EEB',
        grey50: '#F9FAFB',
        grey200: '#EAECF0',
        grey400: '#98A2B3',
        grey500: '#667085',
        grey600: '#475467',
        grey800: '#1D2939',
        grey900: '#101828',
        blue100: '#D1E9FF',
      }
    },
  },
  plugins: [],
}
export default config
