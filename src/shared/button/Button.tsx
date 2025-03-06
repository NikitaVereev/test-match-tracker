import styles from './Button.module.scss'
import { ButtonHTMLAttributes } from 'react'
import { Icons } from '../../assets/icons/icon.tsx'
import { EIcon } from '../../assets/icons/iconConstants.ts'

export const Button = ({
	text,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { text: string; isLoading?: boolean }) => {
	return (
		<button className={styles.root} {...props}>
			<p className={styles.text}>{text}</p>
			<Icons name={EIcon.refresh} />
		</button>
	)
}
