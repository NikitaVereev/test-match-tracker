import React from 'react'
import { MatchStatus } from '../../api/matches.interface.ts'
import styles from './Score.module.scss'
import { CardStatus } from '../../../../shared'

interface IScoreProps {
	awayScore: number
	homeScore: number
	status: MatchStatus
}

export const Score: React.FC<IScoreProps> = (props) => {
	const { homeScore, awayScore, status } = props
	return (
		<div className={styles.root}>
			<div>
				<p className={styles.text}>{`${homeScore} : ${awayScore}`}</p>
			</div>
			<CardStatus type={status} />
		</div>
	)
}
