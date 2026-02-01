/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.02em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '500' }],
                xl: ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
                '2xl': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.01em', fontWeight: 'bold' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.01em', fontWeight: 'bold' }],
                '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
                '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: 'bold' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: 'bold' }],
                '8xl': ['5.25rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: 'bold' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '700' }],
            },
            fontFamily: {
                heading: "cormorantgaramond",
                paragraph: "lato-light"
            },
            colors: {
                destructive: '#E57373',
                'destructive-foreground': '#FFFFFF',
                'accent-gold': '#D4AF37',
                'muted-peach': '#FDF0ED',
                background: '#FFF9F7',
                secondary: '#FADCD2',
                foreground: '#4A4A4A',
                'secondary-foreground': '#5C4033',
                'primary-foreground': '#FFFFFF',
                primary: '#D98E8E'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
