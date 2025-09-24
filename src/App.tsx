import { useState } from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

export default function App() {
	const [step, setStep] = useState(1);

	const handleNext = () => {
		if (step === messages.length) return;
		setStep(step + 1);
	};

	const handlePrev = () => {
		if (step === 1) return;
		setStep(step - 1);
	};

	return (
		<main className='flex items-center justify-center h-screen'>
			<div className='p-20 rounded-lg w-xl bg-slate-200'>
				<div className='flex justify-between'>
					<div
						className={`${
							step >= 1 ? 'active' : ''
						} flex items-center justify-center w-10 h-10 text-lg rounded-full bg-slate-300`}
					>
						1
					</div>
					<div
						className={`${
							step >= 2 ? 'active' : ''
						} flex items-center justify-center w-10 h-10 text-lg rounded-full bg-slate-300`}
					>
						2
					</div>
					<div
						className={`${
							step >= 3 ? 'active' : ''
						} flex items-center justify-center w-10 h-10 text-lg rounded-full bg-slate-300`}
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
		</main>
	);
}
