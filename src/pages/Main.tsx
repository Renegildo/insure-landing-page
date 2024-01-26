import { useState } from "react";

const Main = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function handleHamburgerClick() {
		setIsMenuOpen(!isMenuOpen);
		if (!isMenuOpen) {
			document.body.classList.add("menu-open");
		} else {
			document.body.classList.remove("menu-open");
		}
	}

	return (
		<div className="font-sans">
			<header className={`flex justify-between p-7 items-center bg-white w-full fixed z-10 shadow-2xl`}>
				<a href="#">
					<img
						src="/src/assets/images/logo.svg"
						alt="logo"
						className='h-5'
					/>
				</a>
				<div className="block md:hidden">
					<button onClick={handleHamburgerClick}>
						<img
							src={`${!isMenuOpen ? '/src/assets/images/icon-hamburger.svg' : '/src/assets/images/icon-close.svg'}`}
							alt='menu'
						/>
					</button>
				</div>

				<nav className="hidden md:block">
					<ul className="flex gap-8">
						<li>
							<a href="#">HOW WE WORK</a>
						</li>
						<li>
							<a href="#">BLOG</a>
						</li>
						<li>
							<a href="#">ACCOUNT</a>
						</li>
						<li>
							<a href="#">VIEW PLANS</a>
						</li>
					</ul>
				</nav>
			</header>

			<div className={`${isMenuOpen ? "block" : "hidden"} h-[100vh] fixed bg-gray w-full translate-y-[95px] z-10`}>
				<ul className="text-white flex flex-col items-center gap-10 font-bold mt-10">
					<li>
						<a href="#">HOW WE WORK</a>
					</li>
					<li>
						<a href="#">BLOG</a>
					</li>
					<li>
						<a href="#">ACCOUNT</a>
					</li>
					<li>
						<a href="#"
							className="py-4 px-24 border-2"
						>VIEW PLANS</a>
					</li>
				</ul>


				<img
					src="/src/assets/images/bg-pattern-mobile-nav.svg"
					className="w-full translate-y-16"
				/>
			</div>

			<div className="lg:flex lg:flex-row-reverse">
				<img
					src='/src/assets/images/image-intro-mobile.jpg'
					alt='intro image'
					className='block md:hidden w-full'
				/>
				<img
					src='/src/assets/images/image-intro-desktop.jpg'
					alt='intro image'
					className='hidden md:block h-96 m-auto shadow-2xl lg:absolute lg:top-[30%] lg:right-[10%] lg:h-[450px]'
				/>

				<img
					src="/src/assets/images/bg-pattern-intro-left-mobile.svg"
					className="absolute block lg:hidden"
				/>
				<img
					src="/src/assets/images/bg-pattern-intro-left-desktop.svg"
					className="absolute hidden lg:block left-0 top-[65%] h-96"
				/>

				<section className='bg-purple text-white p-4 py-24 flex flex-col items-center w-full lg:items-start'>
					<div className="lg:w-[450px] lg:ml-24">
						<h1 className='font-serif text-[3rem] text-center font-extrabold lg:text-left lg:mt-20 '>Humanizing your insurance.</h1>
						<p className='text-center mx-5 mb-16 lg:text-left lg:mx-0'>Get your life insurance coverage easaier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected.</p>
						<a href='#' className='tracking-wider border-2 px-8 py-3'>
							VIEW PLANS
						</a>
					</div>
				</section>
			</div>

			<img
				src="/src/assets/images/bg-pattern-intro-right-mobile.svg"
				alt=""
				className="block lg:hidden absolute right-0 -translate-y-40"
			/>
			<img
				src="/src/assets/images/bg-pattern-intro-right-desktop.svg"
				alt=""
				className="hidden lg:block absolute right-0 top-[20%] -translate-y-40"
			/>


			<section className='flex flex-col items-center justify-center lg:items-start lg:mx-40'>
				<h1 className='top-line font-serif text-5xl font-bold text-gray text-center mt-32 mb-24'>We're different</h1>

				<div className="lg:flex lg:gap-20">
					<div className='flex flex-col justify-center items-center lg:items-start mx-14 text-center mb-20 lg:mx-0'>
						<img
							src='/src/assets/images/icon-snappy-process.svg'
							alt='icon snappy process'
							className='mb-4'
						/>
						<h2 className='my-3 font-semibold text-2xl text-gray'>Snappy Process</h2>
						<p className="lg:text-start">Our application process can be completed in minutes, not hours. Do not get stuck filling in tedious forms</p>
					</div>
					<div className='flex flex-col justify-start items-center lg:items-start mx-14 text-center mb-20 lg:mx-0'>
						<img
							src='/src/assets/images/icon-affordable-prices.svg'
							alt='icon snappy process'
							className='mb-4'
						/>
						<h2 className='my-3 font-semibold text-2xl text-gray'>Afoordable Prices</h2>
						<p className="lg:text-start">We don't want you worrying about high montly costs. Our prices may be low, but we still offer the best coverage possible.</p>
					</div>
					<div className='flex flex-col justify-center items-center lg:items-start mx-14 text-center mb-20 lg:mx-0'>
						<img
							src='/src/assets/images/icon-people-first.svg'
							alt='icon snappy process'
							className='mb-4'
						/>
						<h2 className='my-3 font-semibold text-2xl text-gray'>Prople First</h2>
						<p className="lg:text-start">Our plan aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
					</div>
				</div>
			</section>

			<div className='bg-purple px-10 py-20 text-white flex justify-center flex-col items-center h-96 mx-7 relative lg:flex-row lg:justify-between lg:h-auto lg:py-15 z-0'>
				<img
					src="/src/assets/images/bg-pattern-how-we-work-mobile.svg"
					alt=""
					className="block lg:hidden absolute right-0 -translate-y-[2.1rem]"
				/>
				<img
					src="/src/assets/images/bg-pattern-how-we-work-desktop.svg"
					alt=""
					className="hidden lg:block absolute right-0 -translate-y-[0rem] z-10"
				/>
				<h1 className='text-5xl text-center font-serif font-bold z-0 lg:w-[40rem] lg:text-start'>Find out more about how we work</h1>
				<a href='#'
					className='border-2 px-6 py-3 mt-10 font-semibold z-20'
				>HOW WE WORK</a>
			</div>

			<footer className='flex flex-col mt-32 bg-[#f1f1f1] p-20 gap-5 items-center w-full relative -z-10 overflow-hidden'>
				<img
					src="/src/assets/images/bg-pattern-footer-mobile.svg"
					alt="background"
					className="block lg:hidden absolute left-0 top-[-6%]"
				/>
				<img
					src="/src/assets/images/bg-pattern-footer-desktop.svg"
					alt="background"
					className="hidden lg:block absolute left-0 top-[-6%]"
				/>
				<div className='flex flex-col items-center gap-5 z-10 lg:flex-row lg:justify-between lg:w-full border-[#e9e9e9] border-b-2 pb-5'>
					<img
						src='/src/assets/images/logo.svg'
						className='w-32'
					/>
					<ul className='flex gap-5'>
						<li>
							<a>
								<img
									src='/src/assets/images/icon-facebook.svg'
								/>
							</a>
						</li>
						<li>
							<a>
								<img
									src='/src/assets/images/icon-twitter.svg'
								/>
							</a>
						</li>
						<li>
							<a>
								<img
									src='/src/assets/images/icon-pinterest.svg'
								/>
							</a>
						</li>
						<li>
							<a>
								<img
									src='/src/assets/images/icon-instagram.svg'
								/>
							</a>
						</li>
					</ul>
				</div>

				<div className="mt-10 text-center lg:flex lg:text-start lg:gap-20">
					<div>
						<h3 className="my-8 text-[#817e83] tracking-widest font-bold">OUR COMPANY</h3>
						<ul>
							<li className="my-2">
								<a href='#' className='text-gray'>HOW WE WORK</a>
							</li>
							<li className="my-2">
								<a href='#' className='text-gray'>WHY INSURE?</a>
							</li>
							<li className="my-2">
								<a href='#' className='text-gray'>CHECK PRICE</a>
							</li>
							<li className="my-2">
								<a href='#' className='text-gray'>REVIEWS</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="my-8 text-[#817e83] tracking-widest font-bold">HELP ME</h3>
						<ul>
							<li className="my-2">
								<a href='#' className='text-gray'>FAQ</a>
							</li>
							<li className="my-2">
								<a href='#' className='text-gray'>TERMS OF USE</a>
							</li>
							<li className="my-2">
								<a href='#' className='text-gray'>PRIVACY POLICY</a>
							</li>
							<li className="my-2">
								<a href='#' className='text-gray'>COOKIES</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="my-8 text-[#817e83] tracking-widest font-bold">CONTACT</h3>
						<ul>
							<li className="my-2">
								<a href='#' className='text-gray'>SALES</a>
							</li>
							<li className="my-2">
								<a href='#' className='text-gray'>SUPPORT</a>
							</li>
							<li className="my-2">
								<a href='#' className='text-gray'>LIVE CHAT</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="my-8 text-[#817e83] tracking-widest font-bold">OTHERS</h3>
						<ul>
							<li className="my-2">
								<a href='#' className='text-gray'>CAREES</a>
							</li>
							<li className="my-2">
								<a href='#' className='text-gray'>PRESS</a>
							</li>
							<li className="my-2">
								<a href='#' className='text-gray'>LICENSES</a>
							</li>
						</ul>
					</div>
				</div>

			</footer>
		</div>
	);
}

export default Main;