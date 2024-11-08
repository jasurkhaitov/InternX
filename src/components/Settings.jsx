import React from 'react'
import SettingsForm from './SettingsForm'

export default function Settings() {
	return (
		<div className='flex flex-1'>
			<div className='p-2 md:py-[25px] md:px-7 bg-neutral-100 flex flex-col gap-2 flex-1 w-full h-full'>
				<h2 className="text-2xl text-[#030229] font-bold mb-1 sm:mb-[25px]">Jadval</h2>

				<div className='bg-white p-5 sm:p-[30px] border border-[rgba(77, 76, 104, 0.5)] rounded-[10px] md:h-[90vh]'>
					<div className='flex items-center gap-[9px]'>
						<button className='flex text-sm font-bold py-[10px] w-[110px] bg-[#202492] shadow-[1px 5px 50px 0 rgba(0, 0, 0, 0.05)] items-center justify-center gap-[7px] text-white rounded-[8px] outline-none active:scale-95'>
							<span>Profile</span>

							<svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none">
								<path d="M3.59953 0.188916C3.62833 0.217373 3.75157 0.324925 3.85286 0.425013C4.4902 1.01212 5.52938 2.53927 5.84422 3.33695C5.89486 3.45811 6.00169 3.76428 6.00753 3.9275C6.00642 4.08386 5.96936 4.23265 5.89535 4.37436C5.79209 4.55093 5.63059 4.69201 5.44054 4.7686C5.30869 4.81784 4.91464 4.89297 4.90764 4.89292C4.4766 4.9678 3.77681 5.00569 3.00383 5.0002C2.26735 4.99496 1.59667 4.94733 1.16014 4.88042C1.15319 4.87307 0.664754 4.79166 0.497864 4.70523C0.192982 4.5467 0.0051572 4.23995 0.00747941 3.91312L0.00768014 3.88487C0.0166925 3.67207 0.209868 3.2258 0.216868 3.22585C0.543207 2.47559 1.55223 0.998063 2.21995 0.406105C2.21995 0.406105 2.39164 0.239274 2.49866 0.166968C2.65246 0.0540789 2.84236 -0.00107604 3.03186 0.000270375C3.24335 0.0017731 3.43989 0.0669801 3.59953 0.188916Z" fill="#CDCCD4"/>
							</svg>
						</button>

						<button className='border active:scale-95 border-[#F1F1F1] bg-white rounded-[8px] text-sm py-[10px] w-[110px] text-center font-bold text-[#030229]'>CVV</button>
					</div>

					<SettingsForm/>
				</div>
			</div>
		</div>
	)
}