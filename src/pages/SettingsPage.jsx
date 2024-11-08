import React from 'react'
import { cn } from '@/lib/utils'

import Aside from '@/components/Aside'
import Settings from '@/components/Settings'

export function SettingsPage() {

	return (
		<div
			className={cn(
				'flex flex-col md:flex-row bg-gray-100 w-full flex-1 mx-auto md:overflow-hidden',
				'h-screen'
			)}
		>
			<Aside/>

			<Settings/>
		</div>
	)
}