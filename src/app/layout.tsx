import './globals.css';
import { Roboto_Slab, Megrim } from 'next/font/google';

const roboto_slab = Roboto_Slab({
	subsets: ['latin'],
	variable: '--font-roboto-slab',
});

const megrim = Megrim({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-megrim',
});

export const metadata = {
	title: 'Oksana',
	description: 'Swimwear by Elizabeth Zaks',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${megrim.variable} ${roboto_slab.variable}`}>
			<body>{children}</body>
		</html>
	);
}
