import './globals.css';
import type { Metadata } from 'next';
import { poppins } from './fonts';
import { Header } from '@components/organisms';

export const metadata: Metadata = {
	title: 'Next13masters',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<div className="flex min-h-screen flex-col">
					<Header />
					<main className="flex-1">{children}</main>
					<footer className="pt-8">
						<div className="bg-gray-900 py-2 text-white">
							<div className="container mx-auto flex content-center justify-center px-4 text-sm">
								<span>&copy; 2023 Mateusz Lewandowski</span>
							</div>
						</div>
					</footer>
				</div>
			</body>
		</html>
	);
}
