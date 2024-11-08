import React from 'react'
import { cn } from '@/lib/utils'

import Table from '@/components/Table'
import Aside from '@/components/Aside'

export function TablePage() {

	return (
		<div className={cn('flex flex-col md:flex-row bg-gray-100 w-full flex-1 mx-auto md:overflow-hidden', 'h-screen')}>
			<Aside/>

			<Table/>
		</div>
	)
}