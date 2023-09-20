import { type ReactNode } from 'react';

export default function ProductsPageLayout({ children }: { children: ReactNode }) {
	return <div className="container mx-auto px-4">{children}</div>;
}
