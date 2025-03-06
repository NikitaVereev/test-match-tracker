import styles from './TeamInfo.module.scss'
import React from 'react'
import { IMatchTeam } from '../../api/matches.interface.ts'
import { PlayerInfo } from '../playerI-info/PlayerInfo.tsx'

type ICommandInfoProps = Omit<IMatchTeam, 'name'>

export const TeamInfo: React.FC<ICommandInfoProps> = (props) => {
	const { players, points, place, total_kills } = props
	return (
		<div className={styles.root}>
			<div className={styles.players}>
				{players.map((player) => (
					<PlayerInfo {...player} key={player.username} />
				))}
			</div>
			<div className={styles.generalInformationContainer}>
				<div className={styles.textContainer}>
					<p className={styles.text}>Points:</p>
					<span className={styles.textInfo}>+{points}</span>
				</div>
				<div className={styles.textContainer}>
					<p className={styles.text}>Место:</p> <span className={styles.textInfo}>{place}</span>
				</div>
				<div className={styles.textContainer}>
					<p className={styles.text}>Всего убийств:</p>
					<span className={styles.textInfo}>{total_kills}</span>
				</div>
			</div>
		</div>
	)
}
