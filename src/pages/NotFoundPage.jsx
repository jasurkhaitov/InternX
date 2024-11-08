import React from 'react'
import { cn } from '@/lib/utils'

import Aside from '@/components/Aside'

export function NotFoundPage({ title }) {
	return (
		<div
			className={cn(
				'flex flex-col md:flex-row bg-gray-100 w-full flex-1 mx-auto overflow-hidden',
				'h-screen'
			)}
		>
			<Aside />

			<div className='w-full px-5 pt-10 flex flex-col items-center justify-center text-center'>
				<h1 className='text-4xl font-bold text-red-500 mb-4'>
					{title} Sahifasi Topilmadi
				</h1>
				<p className='text-xl text-gray-600 mb-6'>
					Siz qidiryotgan sahifa mavjud emas.
				</p>
			</div>
		</div>
	)
}
