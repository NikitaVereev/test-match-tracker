import React, { useState } from 'react'
import styles from './MatchCard.module.scss'
import { IMatch } from '../../entities/matches/api/matches.interface.ts'
import { Score } from '../../entities/matches/ui/score/Score.tsx'
import { TeamName } from '../../entities/matches/ui/team-name/TeamName.tsx'
import { TeamInfo } from '../../entities/matches/ui/team-info/TeamInfo.tsx'
import { Icons } from '../../assets/icons/icon.tsx'
import { EIcon } from '../../assets/icons/iconConstants.ts'
import clsx from 'clsx'

export const MatchCard: React.FC<IMatch> = (props) => {
	const { status, homeScore, awayScore, awayTeam, homeTeam } = props
	const [isOpen, setIsOpen] = useState(false)

	const toggleInfo = () => {
		setIsOpen((prev) => !prev)
	}

	return (
		<div className={styles.root}>
			<div className={styles.dropList}>
				<div className={styles.container}>
					<TeamName text={homeTeam.name} direction={'ltr'} />
					<Score homeScore={homeScore} awayScore={awayScore} status={status} />
					<TeamName text={awayTeam.name} direction={'rtl'} />
				</div>
				<button
					className={clsx(styles.dropListDown, { [styles.dropOpen]: isOpen })}
					onClick={toggleInfo}
				>
					<Icons name={EIcon.dropListDown} />
				</button>
			</div>
			<div className={clsx(styles.dropListItem, { [styles.open]: isOpen })}>
				<div className={styles.infoContainer}>
					<div className={styles.item}>
						<TeamInfo {...homeTeam} />
					</div>
					<div className={styles.item}>
						<TeamInfo {...awayTeam} />
					</div>
				</div>
			</div>
		</div>
	)
}
