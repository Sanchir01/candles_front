'use client'
import { HomeLayout } from './ui/LayoutHome'
import AboutBrand from './ui/aboutBrand'
import Advantages from './ui/advantages'
import FeedbackSection from './ui/feedbackForm'
import HeroSlider from './ui/heroSlider'
import PopularItemsSlider from './ui/popularSlider'
export { default as feedbackFrom } from './ui/feedbackForm'
export { default as SliderHero } from './ui/heroSlider'
export { default as PopularItemsSlider } from './ui/popularSlider'

const HomeContentComponent = () => (
	<HomeLayout
		aboutBrand={<AboutBrand />}
		heroSlider={<HeroSlider />}
		popularSlider={<PopularItemsSlider />}
		advantages={<Advantages />}
		feedbackForm={<FeedbackSection />}
	/>
)
export default HomeContentComponent
