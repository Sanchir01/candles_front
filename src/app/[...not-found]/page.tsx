import { Button } from '~/shared/ui/button'
import styles from '~/shared/styles/NotFound.module.scss'

import Link from 'next/link'
export default function Custom404() {
   return (
      <div className={styles.notFound_box}>
         <div className={styles.notfound_box_container}>
            <h1 className={styles.notfound_box_title}>404</h1>
            <span className={styles.notfound_box_description}>
               Ой, что-то пошло не так...
            </span>
            <Link href='/catalog' className={styles.notfound_box_link}>
               <Button>В каталог</Button>
            </Link>
         </div>
      </div>
   )
}
