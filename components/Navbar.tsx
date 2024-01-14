"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen((old) => !old);
	};

	return (
		<nav className="flexBetween max-container padding-container  z-30 py-5 sticky top-0 bg-white">
			<Link href="/">
				<Image src="/logo.png" alt="logo" width={160} height={160} />
			</Link>

			<ul className="hidden h-full gap-12 lg:flex ">
				<button
					onClick={toggle}
					className="regular-18 text-red-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
				>
					Cities
					{!isOpen ? (
						<AiOutlineCaretDown className="inline-block ml-2" />
					) : (
						<AiOutlineCaretUp className="inline-block ml-2" />
					)}
				</button>

				{isOpen && (
					<div className="pl-3 absolute top-20 flex flex-col items-start rounded-xl p-2 w-[15%] border-solid border bg-white ">
						<li className="w-full  text-center hover:text-white hover:bg-red-500 cursor-pointer rounded-lg border-transparent pb-2">
							<a href="/cities/Barcelona">Barcelona </a>
						</li>
						<li className="w-full  text-center hover:text-white hover:bg-red-500 cursor-pointer rounded-lg border-transparent pb-2">
							<a href="/cities/Salou">Salou </a>
						</li>
						<li className="w-full text-center hover:text-white hover:bg-red-500 cursor-pointer rounded-lg border-transparent pb-2">
							<a href="/cities/Benidorm">Benidorm </a>
						</li>
						<li className="w-full text-center hover:text-white hover:bg-red-500 cursor-pointer rounded-lg border-transparent pb-2">
							<a href="/cities/Zaragoza">Zaragoza </a>
						</li>
						<li className="w-full text-center hover:text-white hover:bg-red-500 cursor-pointer rounded-lg border-transparent pb-2">
							<a href="/cities/Seville">Seville </a>
						</li>
						<li className="w-full text-center hover:text-white hover:bg-red-500 cursor-pointer rounded-lg border-transparent pb-2">
							<a href="/cities/Santander">Santander </a>
						</li>
					</div>
				)}
				{NAV_LINKS.map((link) => (
					<Link
						href={link.href}
						key={link.key}
						className="regular-20 text-red-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
					>
						{link.label}
					</Link>
				))}
			</ul>

			<div className="lg:flexCenter hidden">
				<Button
					type="button"
					title="Login"
					icon="/user.svg"
					variant="btn_dark_green"
				/>
			</div>

			<Image
				src="menu.svg"
				alt="menu"
				width={32}
				height={32}
				className="inline-block cursor-pointer lg:hidden"
			/>
		</nav>
	);
};

export default Navbar;
