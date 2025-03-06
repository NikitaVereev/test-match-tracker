import { FC } from 'react'
import { RefreshIcon } from './RefreshIcon.tsx'
import { ArrowDropListDownIcon } from './ArrowDropListDownIcon.tsx'
import { AlertTriangleIcon } from './AlertTriangleIcon.tsx'

export enum EIcon {
	refresh,
	dropListDown,
	alertTriangle
}

export const ICONS: Record<EIcon, FC> = {
	[EIcon.refresh]: RefreshIcon,
	[EIcon.dropListDown]: ArrowDropListDownIcon,
	[EIcon.alertTriangle]: AlertTriangleIcon
}
