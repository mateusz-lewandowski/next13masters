type ProductsResponse = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProducts = async () => {
	const response = await fetch('https://naszsklep-api.vercel.app/api/products?take=20');
	const productsResponse = (await response.json()) as ProductsResponse[];

	return productsResponse.map(productParser);
};

export const getProductById = async (id: ProductsResponse['id']) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await response.json()) as ProductsResponse;

	return productParser(productResponse);
};

const productParser = (product: ProductsResponse) => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		image: {
			alt: product.title,
			src: product.image,
		},
		description: product.description,
		longDescription: product.longDescription,
	};
};
