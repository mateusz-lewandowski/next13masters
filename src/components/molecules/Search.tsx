'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { type ChangeEvent, useState, useEffect } from 'react';

export const Search = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [query, setQuery] = useState(searchParams.get('query') || '');
	const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	}, [timer]);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		if (timer) clearTimeout(timer);

		setQuery(value);
		setTimer(
			setTimeout(() => {
				router.push(`/search?query=${value}`);
			}, 500),
		);
	};

	return (
		<input
			className="w-full rounded-md border p-2 lg:w-60 "
			value={query}
			onChange={onChange}
			type="search"
			placeholder="Search..."
			data-role="searchbox"
		/>
	);
};
