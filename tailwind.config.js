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
                gradientConic1:
                    'conic-gradient(from 180deg at 50% 50%, #283357 160.0252246857deg, rgba(83, 102, 223, 0.78) 218.8754439354deg, #6372e0 236.0396933556deg, rgba(88, 105, 223, 0.51) 330.4752516747deg, rgba(54, 69, 109, 0) 360deg)',
                gradientConic2:
                    'conic-gradient(from 180deg at 50% 50%, #283357 160.0252246857deg, rgba(52, 97, 78, 0.58) 218.8754439354deg, #378752 236.0396933556deg, rgba(38, 85, 63, 0.6) 330.4752516747deg, rgba(54, 69, 109, 0) 360deg)',
                gradientConic3:
                    'conic-gradient(from 180deg at 50% 50%, #283357 160.0252246857deg, rgba(106, 90, 49, 0.81) 218.8754439354deg, #a0822f 236.0396933556deg, rgba(96, 81, 43, 0.6) 330.4752516747deg, rgba(54, 69, 109, 0) 360deg)',
                gradientConic4:
                    'conic-gradient(from 180deg at 50% 50%, #283357 160.0252246857deg, rgba(102, 48, 121, 0.54) 218.8754439354deg, #9b329d 236.0396933556deg, rgba(102, 48, 121, 0.54) 330.4752516747deg, rgba(54, 69, 109, 0) 360deg)',
            },
        },
    },
    plugins: [],
};
