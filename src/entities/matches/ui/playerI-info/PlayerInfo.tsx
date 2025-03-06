import React from 'react'
import styles from './PlayerInfo.module.scss'
import { IMatchPlayer } from '../../api/matches.interface.ts'
import PlayerAvatar from '../../../../assets/images/avatar-global.png'

export const PlayerInfo: React.FC<IMatchPlayer> = ({ username, kills }) => {
	return (
		<div className={styles.root}>
			<div className={styles.player}>
				<div className={styles.imgContainer}>
					<img src={PlayerAvatar as string} alt={'player-avatar'} />
				</div>
				<p className={styles.textInfo}>{username}</p>
			</div>
			<div className={styles.textContainer}>
				<p className={styles.text}>Убийств:</p>
				<span className={styles.textInfo}>{kills}</span>
			</div>
		</div>
	)
}
