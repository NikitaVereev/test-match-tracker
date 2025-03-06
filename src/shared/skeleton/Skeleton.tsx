import React from 'react'
import styles from './Skeleton.module.scss'

interface SkeletonProps {
	width?: string | number
	height?: string | number
	radius?: string
	className?: string
}

const Skeleton: React.FC<SkeletonProps> = ({
	width = '100%',
	height = '20px',
	radius = '4px',
	className = ''
}) => {
	return (
		<div
			className={`${styles.skeleton} ${className}`}
			style={{ width, height, borderRadius: radius }}
		></div>
	)
}

export default Skeleton
