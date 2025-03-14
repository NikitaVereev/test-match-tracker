import styles from './Button.module.scss'
import { ButtonHTMLAttributes } from 'react'
import { Icons } from '../../assets/icons/icon.tsx'
import { EIcon } from '../../assets/icons/iconConstants.ts'

export const Button = ({
	text,
	isLoading,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { text: string; isLoading?: boolean }) => {
	console.log('isLoading', isLoading)

	return (
		<button className={styles.root} {...props}>
			<p className={styles.text}>{text}{isLoading}</p>
			<Icons name={EIcon.refresh} />
		</button>
	)
}
