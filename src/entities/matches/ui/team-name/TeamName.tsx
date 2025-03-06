import React from 'react'
import styles from './TeamName.module.scss'
import CommandLogoImg from '../../../../assets/images/command-logo.png'
import clsx from 'clsx'

interface ICommandNameProps {
	text: string
	direction?: 'ltr' | 'rtl'
}

export const TeamName: React.FC<ICommandNameProps> = ({ text, direction = 'ltr' }) => {
	const directionStyle = () => {
		switch (direction) {
			case 'ltr':
				return styles.left
			case 'rtl':
				return styles.right
			default:
				return styles.left
		}
	}

	return (
		<div className={clsx(styles.root, directionStyle())}>
			<div className={styles.imgContainer}>
				<img src={CommandLogoImg as string} alt={'command-logo'} />
			</div>
			<p className={styles.text}>{text}</p>
		</div>
	)
}
