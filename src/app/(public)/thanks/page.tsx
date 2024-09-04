import styles from '../../../shared/styles/NotFound.module.scss';
import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
	title: 'Спасибо',
	description: 'Thanks for your order',
	icons: { icon: '../../favicon.ico' },
};

export default function Page() {
	return (
		<div className={styles.notfound_box}>
			<div className={styles.notfound_box_container}>
				<span className={styles.notfound_box_description}>
					Спасибо за заказ, мы скоро свяжемся с вами
				</span>

				<Link href={'/catalog'} className={styles.notfound_box_link}>
					Назад в каталог
				</Link>
			</div>
		</div>
	);
}
