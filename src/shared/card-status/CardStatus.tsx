import React from 'react'
import styles from './CardStatus.module.scss'
import clsx from 'clsx'
import { MatchStatus } from '../../entities/matches/api/matches.interface.ts'

interface ICardStatusProps {
	type: MatchStatus
}

export const CardStatus: React.FC<ICardStatusProps> = ({ type }) => {
	const cardStyle = () => {
		switch (type) {
			case MatchStatus.Ongoing:
				return styles.live
			case MatchStatus.Finished:
				return styles.finished
			case MatchStatus.Scheduled:
				return styles.preparing
			default:
				return styles.live
		}
	}

	const text = () => {
		switch (type) {
			case MatchStatus.Ongoing:
				return 'Live'
			case MatchStatus.Finished:
				return 'Finished'
			case MatchStatus.Scheduled:
				return 'Match preparing'
			default:
				return 'Live'
		}
	}

	return (
		<div className={clsx(styles.root, cardStyle())}>
			<p className={styles.text}>{text()}</p>
		</div>
	)
}
