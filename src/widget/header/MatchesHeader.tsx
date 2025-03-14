import React from 'react'
import styles from './MatchesHeader.module.scss'
import { Button, Toast } from '../../shared'
import { useQueryClient } from '@tanstack/react-query'
import { MATCHES_QUERY } from '../../entities/api/query.cons.ts'

interface IMatchesHeaderProps {
	isError?: boolean,
	isLoading?: boolean
}

export const MatchesHeader: React.FC<IMatchesHeaderProps> = ({ isError, isLoading }) => {
	const queryClient = useQueryClient()
	const refetchMatches = () => queryClient.invalidateQueries({ queryKey: [MATCHES_QUERY] })

	return (
		<div className={styles.root}>
			<div className={styles.logo}>
				<h1 className={styles.text}>Match Tracker</h1>
			</div>
			<div className={styles.content}>
				{isError && <Toast text={'Ошибка: не удалось загрузить информацию'} />}
				<Button disabled={isLoading} text={'Обновить'} onClick={refetchMatches} />
			</div>
		</div>
	)
}
