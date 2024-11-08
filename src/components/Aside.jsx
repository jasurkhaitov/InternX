import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Sidebar, SidebarBody, SidebarLink } from '../components/ui/sidebar'

import { RxDashboard } from "react-icons/rx";
import { BiCalendar } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import { GrBook } from "react-icons/gr";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { TbLogout } from "react-icons/tb";

import userImage from '../assets/user.webp'
import LogoIcon from '../assets/logo.webp'

export default function Aside() {
	const links = [
		{
			label: 'Dashboard',
			href: '/dashboard',
			icon: <RxDashboard className='h-5 w-5 flex-shrink-0' />,
		},
		{
			label: 'Jadval',
			href: '/table',
			icon: <BiCalendar className='h-5 w-5 flex-shrink-0' />,
		},
		{
			label: 'Imtihonlar',
			href: '/exams',
			icon: <CgFileDocument className='h-5 w-5 flex-shrink-0' />,
		},
		{
			label: 'Darslar',
			href: '/courses',
			icon: <GrBook className='h-5 w-5 flex-shrink-0' />,
		},
		{
			label: 'Chat email',
			href: '/email',
			icon: <MdOutlineMarkEmailUnread className='h-5 w-5 flex-shrink-0' />,
			num: 49,
		},
		{
			label: 'Notification',
			href: '/notifications',
			icon: <IoIosNotifications className='h-5 w-5 flex-shrink-0' />,
		},
		{
			label: 'Sozlamalar',
			href: '/settings',
			icon: <IoMdSettings className='h-5 w-5 flex-shrink-0' />,
		},
	]

	const [open, setOpen] = useState(false)

	return (
		<Sidebar open={open} setOpen={setOpen} animate={false}>
			<SidebarBody className='justify-between gap-10'>
				<div className='flex flex-col flex-1 overflow-y-hidden overflow-x-hidden'>
					<Link to={'/table'} className='px-[25px]'>
						<img
							className='max-w-[76px] max-h-[76px] md:mx-auto'
							src={LogoIcon}
							alt=''
						/>
					</Link>

					<div className='mt-[30px] flex flex-col gap-2'>
						{links.map((link, idx) => (
							<SidebarLink key={idx} link={link} />
						))}
					</div>
				</div>

				<Link
					to={'/profile'}
					className='flex px-[25px] items-center justify-between'
				>
					<div className='flex items-center gap-[10px]'>
						<img
							className='bg-[#FFC7D4] rounded-xl'
							src={userImage}
							alt='	Teacher: Bobur'
						/>

						<div className='flex flex-col items-start gap-[1px]'>
							<p className='text-[12px] leading-4 font-semibold'>Bobur</p>
							<p className='text-[10px] leading-[13px] font-normal'>Ustoz</p>
						</div>
					</div>

					<TbLogout className='h-5 w-5' />
				</Link>
			</SidebarBody>
		</Sidebar>
	)
}
