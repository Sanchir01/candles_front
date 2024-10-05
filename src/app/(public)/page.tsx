import styles from '~/shared/styles/NotFound.module.scss'
import { Button } from '~/shared/ui/button'
import type { Metadata } from 'next'
export const metadata: Metadata = {
	title: 'Mahakala | Главная'
}
export default function Home() {
	return (
		<div className={styles.notFound_box}>
			<Button>Hi</Button>
		</div>
	)
}
