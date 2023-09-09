import { type ProductItemDetailsProps } from '@/components/atoms';
import { formatMoney } from '@/utils/FormatMoney';

export const ProductItemDetails = (props: ProductItemDetailsProps) => {
	const { category, name, price } = props;

	return (
		<div className="flex flex-col">
			<h3 className="mb-8 text-2xl/normal font-semibold text-gray-950">{name}</h3>
			<span className="mb-4 text-gray-500">{category}</span>
			<span className="font-semibold text-gray-950">{formatMoney(price / 100)}</span>
		</div>
	);
};
