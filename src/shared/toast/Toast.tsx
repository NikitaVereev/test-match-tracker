import styles from './Toast.module.scss'
import React from 'react'
import { Icons } from '../../assets/icons/icon.tsx'
import { EIcon } from '../../assets/icons/iconConstants.ts'

interface IToastProps {
	text: string
}

export const Toast: React.FC<IToastProps> = ({ text }) => {
	return (
		<div className={styles.root}>
			<Icons name={EIcon.alertTriangle} />
			<p className={styles.text}>{text}</p>
		</div>
	)
}
