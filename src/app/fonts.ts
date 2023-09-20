import { Poppins, Martel_Sans } from 'next/font/google';

export const poppins = Poppins({
	weight: ['400', '500', '600'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export const martel_sans = Martel_Sans({
	weight: ['400', '600', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
});
