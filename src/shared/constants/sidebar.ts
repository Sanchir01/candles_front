import { AirplayIcon, CandlestickChart, Wallet2 } from 'lucide-react'
const baseUrl = '/admin'

export const dataSideBar = {
	versions: ['0.0.1'],
	navMain: [
		{
			title: 'Свечи',
			Icon: CandlestickChart,
			items: [
				{
					title: 'Все свечи',
					url: `${baseUrl}/candles`
				},
				{
					title: 'Создать свечу',
					url: `${baseUrl}/candles/create`
				}
			]
		},
		{
			title: 'Категории',
			Icon: AirplayIcon,
			items: [
				{
					title: 'Все категории',
					url: `${baseUrl}/category`
				},
				{
					title: 'Создать категорию',
					url: `${baseUrl}/category/create`
				}
			]
		},
		{
			title: 'Цвета',
			Icon: CandlestickChart,
			items: [
				{
					title: 'Все цвета',
					url: `${baseUrl}/colors`
				},
				{
					title: 'Создать цвет',
					url: `${baseUrl}/colors/create`
				}
			]
		},

		{
			title: 'Заказы',
			Icon: Wallet2,
			items: [
				{
					title: 'Все заказы',
					url: `${baseUrl}/orders`
				},
				{
					title: 'Создать заказ',
					url: `${baseUrl}/orders/create`
				}
			]
		}
	]
}
