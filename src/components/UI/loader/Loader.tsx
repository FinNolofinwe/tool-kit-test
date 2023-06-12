import styles from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.loader}>
	<div className={styles.loader__inner}>
		<div className={styles.loader__line__wrap}>
			<div className={styles.loader__line}></div>
		</div>
		<div className={styles.loader__line__wrap}>
			<div className={styles.loader__line}></div>
		</div>
		<div className={styles.loader__line__wrap}>
			<div className={styles.loader__line}></div>
		</div>
		<div className={styles.loader__line__wrap}>
			<div className={styles.loader__line}></div>
		</div>
		<div className={styles.loader__line__wrap}>
			<div className={styles.loader__line}></div>
		</div>
	</div>
</div>
  )
}

export default Loader