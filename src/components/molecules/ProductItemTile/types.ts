import {
	type ProductItemPriceProps,
	type ProductItemImageProps,
	type ProductItemCategoryProps,
} from '@components/atoms';

export type ProductItemTileProps = {
	id: string;
	category: ProductItemCategoryProps['category'];
	name: string;
	price: ProductItemPriceProps['price'];
	image: ProductItemImageProps;
};
