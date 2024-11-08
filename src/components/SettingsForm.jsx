import React, { useState } from 'react'

export default function SettingsForm() {
	const [selectedImage, setSelectedImage] = useState(null)

	const inputUI =
		'text-sm py-[10px] px-5 w-full bg-[#FAFAFB] border focus:border-[#030229] font-normal text-[#030229] rounded-[5px] focus:outline-none'

	const labelUI =
		'text-[#030229] text-[16px] leading-[22px] font-semibold block mb-[5px]'

	const handleImageChange = e => {
		const file = e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = e => {
				setSelectedImage(e.target.result)
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<div className='mt-[9px]'>
			<form onSubmit={(e) => e.preventDefault()}>
				<div className='flex justify-center mb-[50px]'>
					<label
						htmlFor='imageInput'
						className='w-32 h-32 rounded-full flex justify-center items-center cursor-pointer overflow-hidden'
						style={{
							backgroundImage: selectedImage ? `url(${selectedImage})` : 'none',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundColor: selectedImage ? 'transparent' : '#eeeeee',
						}}
					>
						{!selectedImage && (
							<span className='text-indigo-600'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='29'
									height='26'
									viewBox='0 0 29 26'
									fill='none'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M21.8733 4.58491C21.93 4.68396 22.0292 4.75472 22.1567 4.75472C25.5567 4.75472 28.3333 7.5283 28.3333 10.9245V19.3302C28.3333 22.7264 25.5567 25.5 22.1567 25.5H6.17667C2.7625 25.5 0 22.7264 0 19.3302V10.9245C0 7.5283 2.7625 4.75472 6.17667 4.75472C6.29 4.75472 6.40333 4.69811 6.44583 4.58491L6.53083 4.41509C6.57968 4.31228 6.62982 4.20667 6.68072 4.09946C7.04313 3.33611 7.44406 2.49161 7.6925 1.99528C8.34417 0.721698 9.44917 0.0141509 10.8233 0H17.4958C18.87 0.0141509 19.9892 0.721698 20.6408 1.99528C20.864 2.44107 21.2039 3.15916 21.5316 3.85126C21.5992 3.99401 21.6663 4.13566 21.7317 4.27358L21.8733 4.58491ZM20.8391 10.0188C20.8391 10.7264 21.4058 11.2924 22.1141 11.2924C22.8225 11.2924 23.4033 10.7264 23.4033 10.0188C23.4033 9.31129 22.8225 8.73111 22.1141 8.73111C21.4058 8.73111 20.8391 9.31129 20.8391 10.0188ZM11.7157 12.2122C12.3815 11.5471 13.2457 11.1934 14.1665 11.1934C15.0873 11.1934 15.9515 11.5471 16.6032 12.1981C17.2548 12.849 17.609 13.7122 17.609 14.632C17.5948 16.5283 16.0648 18.0707 14.1665 18.0707C13.2457 18.0707 12.3815 17.7169 11.7298 17.066C11.0782 16.4151 10.724 15.5518 10.724 14.632V14.6179C10.7098 13.7264 11.064 12.8632 11.7157 12.2122ZM18.0906 18.566C17.0848 19.5707 15.6965 20.1934 14.1665 20.1934C12.679 20.1934 11.2906 19.6132 10.2281 18.566C9.1798 17.5047 8.59896 16.1179 8.59896 14.6321C8.5848 13.1604 9.16563 11.7736 10.214 10.7122C11.2765 9.65092 12.679 9.07073 14.1665 9.07073C15.654 9.07073 17.0565 9.65092 18.1048 10.6981C19.1531 11.7594 19.734 13.1604 19.734 14.6321C19.7198 16.1745 19.0965 17.5613 18.0906 18.566Z'
										fill='#202492'
									/>
								</svg>
							</span>
						)}
					</label>
					<input
						type='file'
						id='imageInput'
						accept='image/*'
						className='hidden'
						onChange={handleImageChange}
					/>
				</div>

				<div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-5 mb-[25px]'>
					<div>
						<label className={`${labelUI}`}>Familiya</label>
						<input type='text' placeholder='Kamilov' className={`${inputUI}`} />
					</div>

					<div>
						<label className={`${labelUI}`}>Ismi</label>
						<input type='text' placeholder='Bobur' className={`${inputUI}`} />
					</div>

					<div>
						<label className={`${labelUI}`}>Login</label>
						<input type='text' placeholder='Bobur' className={`${inputUI}`} />
					</div>
				</div>

				<div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5 mb-[25px]'>
					<div>
						<label className={`${labelUI}`}>Email</label>
						<input type='email' placeholder='Example@gmail.com' className={`${inputUI}`}/>
					</div>
					<div>
						<label className={`${labelUI}`}>Kasb</label>
						<input type='text' placeholder='Ustoz' className={`${inputUI}`} />
					</div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5'>
					<div>
						<label className={`${labelUI}`}>Date of birth</label>
						<input type='date' placeholder='01/02/2005' className={`${inputUI}`} />
					</div>
				</div>

				<div className='flex pb-5 sm:pb-0 justify-end mt-10 space-x-4'>
					<button type='button' className='w-[200px] py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 active:scale-95'>
						Chiqish
					</button>

					<button
						type='submit'
						className='w-[200px] py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 active:scale-95'
					>
						Saqlab qo'shish
					</button>
				</div>
			</form>
		</div>
	)
}
