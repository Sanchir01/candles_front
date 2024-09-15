'use client'
import styles from '~/shared/styles/NotFound.module.scss'
import { Button } from '~/shared/ui/button'

export default function Home() {
	return (
		<div className={styles.notFound_box}>
			<Button onClick={() => alert('hello world')}>Hi</Button>
		</div>
	)
}
