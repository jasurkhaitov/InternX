import React from 'react'
import { RiTimeFill } from 'react-icons/ri'
import { PiStudentFill, PiBuildingFill } from 'react-icons/pi'
import { GiBookCover } from 'react-icons/gi'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

export default function Weekly() {
	const informationType = [
		{
			id: 1,
			icon: <RiTimeFill />,
			name: '12:30',
		},
		{
			id: 2,
			icon: <PiStudentFill />,
			name: '1 kurs',
		},
		{
			id: 3,
			icon: <GiBookCover />,
			name: 'Algebra',
		},
		{
			id: 4,
			icon: <PiStudentFill />,
			name: '1 guruh',
		},
		{
			id: 5,
			icon: <PiBuildingFill />,
			name: '25 kabinet',
		},
	]

	const weeklyActions = [
		{
			id: 1,
			day: 'Seshanba',
			date: 'Oct 27',

			card: [
				{
					id: 0,
					time: '12:30',
					describtion: 'Lorem ipsum dolor sit amet consectetur.',
				},
			],
		},
		{
			id: 2,
			day: 'Seshanba',
			date: 'Oct 27',

			card: [
				{
					id: 0,
					time: '12:30',
					describtion: 'Lorem ipsum dolor sit amet consectetur.',
				},
			],
		},
		{
			id: 3,
			day: 'Seshanba',
			date: 'Oct 27',

			card: [
				{
					id: 0,
					time: '12:30',
					describtion: 'Lorem ipsum dolor sit amet consectetur.',
				},
			],
		},
		{
			id: 4,
			day: 'Seshanba',
			date: 'Oct 27',

			card: [
				{
					id: 0,
					time: '12:30',
					describtion: 'Lorem ipsum dolor sit amet consectetur.',
				},
			],
		},
		{
			id: 5,
			day: 'Seshanba',
			date: 'Oct 27',

			card: [
				{
					id: 0,
					time: '12:30',
					describtion: 'Lorem ipsum dolor sit amet consectetur.',
				},
			],
		},
		{
			id: 6,
			day: 'Seshanba',
			date: 'Oct 27',

			card: [
				{
					id: 0,
					time: '12:30',
					describtion: 'Lorem ipsum dolor sit amet consectetur.',
				},
			],
		},
	]

	return (
		<div className='flex flex-col xsm:flex-row items-start justify-between gap-5'>
			<div className='py-[30px] bg-white px-[17px] w-full xsm:max-w-[350px] lg:max-w-[400px] rounded-[10px]'>
				<div className='flex items-center justify-between mb-[1px] px-[9px]'>
					<p className='text-xl font-bold text-black'>Dushanba</p>

					<AlertDialog>
						<AlertDialogTrigger>
							<button className='w-[26px] h-[26px] rounded-full bg-[#027AFF] text-white text-2xl flex items-center justify-center'>
								{' '}
								+{' '}
							</button>
						</AlertDialogTrigger>

						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Jadval Yaratish mavjud emas</AlertDialogTitle>
							</AlertDialogHeader>

							<AlertDialogFooter>
								<AlertDialogCancel>Chiqish</AlertDialogCancel>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</div>

				<p className='text-[#6F6F6F] text-4xl px-[9px] font-medium mb-[20px]'>
					Oct 27
				</p>

				<div className='bg-[#027AFF] px-[16px] py-[22px] rounded-[20px] mb-[25px]'>
					<div className='flex items-center flex-wrap gap-[15px] mb-[30px]'>
						{informationType.map(item => (
							<div className='flex items-center gap-[2px]' key={item.id}>
								<span className='h-[30px] w-[30px] rounded-full bg-white text-[#027AFF] flex items-center justify-center text-xl'>
									{item.icon}
								</span>

								<span className='px-[11px] py-1 text-[14px] leading-[19px] font-bold text-black bg-white rounded-[23px]'>
									{item.name}
								</span>
							</div>
						))}
					</div>

					<h3 className='mb-[10px] text-2xl text-white font-bold'>
						Lorem ipsum dolo
					</h3>

					<p className='text-white opacity-80 text-sm font-medium'>
						Lorem ipsum dolor sit amet consectetur. Condimentum senectus nunc
						rhoncus integer turpis dignissim tempor.
					</p>
				</div>

				<div className='px-[18px] py-5 bg-[#EEC947] rounded-[15px]'>
					<div className='flex items-center gap-2 mb-[11px]'>
						<RiTimeFill className='text-2xl text-white text-bold' />

						<p className='text-2xl text-white text-bold'>12:30</p>
					</div>

					<p className='text-white text-sm font-bold'>
						Lorem ipsum dolor sit amet consectetur. Condimentum senectus nunc
						rhoncus integer turpis dignissim tempor.
					</p>
				</div>
			</div>

			<div className='gap-5 xsm:rounded-[10px] h-auto xsm:h-[85vh] xl:h-auto overflow-y-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full'>
				{weeklyActions.map(item => (
					<div key={item.id} className='p-5 rounded-[10px] bg-white'>
						<p className='text-xl font-bold text-black'>{item.day}</p>

						<p className='text-[#6F6F6F] text-3xl font-bold mb-[30px]'> {item.date} </p>

						<div>
							{item.card.map(child => (
								<div className='p-4 bg-[#027AFF] rounded-[16px]' key={child.id}>
									<div className='flex items-center gap-2 mb-[11px]'>
										<RiTimeFill className='text-lg text-white text-bold' />

										<p className='text-xl text-white text-bold'>{child.time}</p>
									</div>

									<p className='text-white text-[10px] leading-[13px] font-normal'>{child.describtion}</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}