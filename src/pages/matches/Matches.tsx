import { useMatchesQuery } from '../../entities/matches/api/useMatchesQuery.ts'
import { MatchCard } from '../../widget/match/MatchCard.tsx'
import Skeleton from '../../shared/skeleton/Skeleton.tsx'
import styles from './Matches.module.scss'
import { MatchesHeader } from '../../widget/header/MatchesHeader.tsx'

export const Matches = () => {
	const { data: matches, isLoading, isError, isFetching } = useMatchesQuery()
	const numberOfSkeletons = Array.isArray(matches) ? matches.length : 5

	return (
		<div className={styles.root}>
			<MatchesHeader isError={isError} />
			<div className={styles.matchesContainer}>
				{isLoading || isFetching
					? new Array(numberOfSkeletons)
							.fill(null)
							.map((_, index) => <Skeleton key={index} width={'100%'} height={'87px'} />)
					: matches?.map((match) => <MatchCard {...match} key={match.title} />)}
			</div>
		</div>
	)
}
