import { type ReactNode } from 'react';

export default function StaticPageLayout({ children }: { children: ReactNode }) {
	return <div className="prose mx-auto px-4 text-center">{children}</div>;
}
