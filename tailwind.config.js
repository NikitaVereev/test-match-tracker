/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,scss}'],
    theme: {
        extend: {
            colors: {
                red: '#EB0237',
                redActive: '#A01131',
                redDisabled: '#701328',
                green: '#43AD28',
                orange: '#EB6402',
                white: '#FFFFFF',
                whiteAlt: '#F2F6F6',
                gray: '#FAFAFA66',
                grayAlt: '#B4B5B6',
                black: '#06080C',
                blackCard: '#0B0E12',
                blackInfo: '#101318',
                blackDropdown: '#11161D',
                blackAlt1: '#0F1318',
                blackAlt2: '#0A0E12',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                tactic: ['TacticSans', 'sans-serif'],
            },
            borderRadius: {
                r4: 4
            },
            padding: {
                button: '15px 40px',
                statusLive: '6px 34px',
                statusFinished: '6px 21px',
                statusPreparing: '6px 8px',
                matchCard: '16px',
                layout: '42px 42px 0 42px',
                cardInfo: '14px 24px',
                cardInfoContainer: '12px'
            },
            fontSize: {
                f12: '12px',
                f14: '14px',
                f16: '16px',
                f18: '18px',
                f20: '20px',
                f32: '32px'
            },
            gap: {
                g4: 4,
                g8: 8,
                g10: 10,
                g12: 12,
                g14: 14,
                g20: 20,
                g32: 32,
            },
        },
    },
    plugins: [],
}
