import { useState } from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

export default function App() {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	const handleNext = () => {
		if (step === messages.length) return;
		setStep((step) => step + 1);
	};

	const handlePrev = () => {
		if (step === 1) return;
		setStep((step) => step - 1);
	};

	return (
		<main className='flex items-center justify-center h-screen'>
			<button
				type='button'
				className='fixed flex items-center justify-center text-4xl font-semibold duration-500 cursor-pointer top-5 right-5 hover:text-indigo-400 size-6'
				onClick={() => setIsOpen((prev) => !prev)}
			>
				&times;
			</button>
			{isOpen && (
				<div className='p-20 rounded-lg w-xl bg-slate-200'>
					<div className='flex justify-between'>
						<div
							className={`${
								step >= 1 ? 'bg-indigo-400 text-white' : 'bg-slate-300'
							} flex items-center justify-center w-10 h-10 text-lg rounded-full`}
						>
							1
						</div>
						<div
							className={`${
								step >= 2 ? 'bg-indigo-400 text-white' : 'bg-slate-300'
							} flex items-center justify-center w-10 h-10 text-lg rounded-full`}
						>
							2
						</div>
						<div
							className={`${
								step >= 3 ? 'bg-indigo-400 text-white' : 'bg-slate-300'
							} flex items-center justify-center w-10 h-10 text-lg rounded-full`}
						>
							3
						</div>
					</div>
					<p className='flex flex-col items-center my-10 text-xl text-center'>
						Step {step}: {messages[step - 1]}
					</p>
					<div className='flex justify-between'>
						<button
							type='button'
							onClick={handlePrev}
							className='flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-indigo-400 cursor-pointer rounded-4xl'
						>
							Prev
						</button>
						<button
							type='button'
							onClick={handleNext}
							className='flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-indigo-400 cursor-pointer rounded-4xl'
						>
							Next
						</button>
					</div>
				</div>
			)}
		</main>
	);
}
