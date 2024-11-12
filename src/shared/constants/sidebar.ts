import { AirplayIcon, CandlestickChart, Clock, Wallet2 } from 'lucide-react'
const baseUrl = '/admin'
export const dataSideBar = {
   versions: ['0.0.1'],
   navMain: [
      {
         title: 'Candles',
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
         title: 'Category',
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
         title: 'API Reference',
         Icon: CandlestickChart,
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
         title: 'Architecture',
         Icon: Clock,
         items: [
            {
               title: 'Accessibility',
               url: '#'
            },
            {
               title: 'Fast Refresh',
               url: '#'
            },
            {
               title: 'Next.js Compiler',
               url: '#'
            },
            {
               title: 'Supported Browsers',
               url: '#'
            },
            {
               title: 'Turbopack',
               url: '#'
            }
         ]
      },
      {
         title: 'Orders',
         Icon: Wallet2,
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
      }
   ]
}
