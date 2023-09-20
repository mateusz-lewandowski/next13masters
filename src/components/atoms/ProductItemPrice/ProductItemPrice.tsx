import { type ProductItemPriceProps } from '@components/atoms';
import { formatMoney } from '@utils/FormatMoney';

export const ProductItemPrice = (props: ProductItemPriceProps) => {
	const { price, className } = props;

	return <span className={className}>{formatMoney(price / 100)}</span>;
};
