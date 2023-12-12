/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    corePlugins: {
        container: false,
    },
    theme: {
        extend: {
            fontFamily: {
                Montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                background_1: '#0d1223',
                background_2: '#181f38',
                neutral_1: '#fff',
                neutral_2: '#EBEBEB',
                neutral_3: '#9DA7BA',
                neutral_4: '#5E687C',
                neutral_6: '#29384E',
                accent_1: '#84E4A4',
                accent_3: '#36A9E1',
                accent_4: '#726BD3',
                accent_5: '#313C65',
                semantic_1: '#ff7373',
                bgMenuVault: 'rgb(13, 18, 35)',
            },
            boxShadow: {
                rectangle: '0 0 20px 0 rgba(194, 63, 255, 0.25)',
                tournamentDes: '0px 24px 16px -16px rgba(0, 0, 0, 0.05)',
                btnFinish: '0px 24px 16px -16px rgba(0,0,0,.05)',
                dropDown: '0px 4px 32px 0px rgba(15, 30, 45, 0.2)',
            },
            backgroundImage: {
                lightBg: 'url(./src/assets/images/vault/bg.png)',
                primary_1: 'linear-gradient(96.06deg, rgb(82, 106, 234) 4.1%, rgb(176, 174, 255) 146.32%)',
                primary_2: 'linear-gradient(96.06deg, rgb(176, 174, 255) 4.1%, rgb(82, 106, 234) 146.32%)',
                rectangle: 'linear-gradient(90deg, rgba(113, 63, 255, 0.15) 0%, rgba(90, 63, 255, 0) 100%)',
                tournamentDes: 'linear-gradient(217deg, rgba(57, 50, 100, 0.56) 0%, rgba(43, 60, 63, 0.40) 100%)',
                btnFinish: 'linear-gradient(216.81deg, rgba(57, 50, 100, 0.56) 0%, rgba(43, 60, 63, 0.4) 100%)',
                vaultBgBottom:
                    'radial-gradient(50% 50% at 50% 50%, rgba(133, 118, 229, 0.20) 0%, rgba(24, 24, 25, 0.00) 100%)',
                vaultBgTop:
                    'radial-gradient(50% 50% at 50% 50%, rgba(133, 118, 229, 0.30) 0%, rgba(24, 24, 25, 0.00) 100%)',
                yellowHome:
                    'radial-gradient(38% 38% at 50% 50%, rgba(128, 255, 84, 0.222) 0%, rgba(99, 129, 86, 0) 100%)',
            },
        },
    },
    plugins: [],
};
