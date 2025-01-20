import { AirplayIcon, CandlestickChart, Pipette, Wallet2 } from 'lucide-react'
const baseUrl = '/admin'

export const dataSideBar = {
	versions: ['0.0.1'],
	navMain: [
		{
			title: 'Свечи',
			Icon: CandlestickChart,
			url: `${baseUrl}/candles`
		},
		{
			title: 'Категории',
			Icon: AirplayIcon,
			url: `${baseUrl}/category`
		},
		{
			title: 'Цвета',
			Icon: Pipette,
			url: `${baseUrl}/colors`
		},

		{
			title: 'Заказы',
			Icon: Wallet2,
			url: `${baseUrl}/orders`
		}
	]
}
