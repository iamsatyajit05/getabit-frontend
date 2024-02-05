'use client'
import { headers } from "@/next.config";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
    const [nav, setNav] = useState(false);

    return (
        <header className={`bg-white border-b border-b-black top-0 z-20 ${nav ? 'sticky' : ''}`}>
            <nav className="max-w-7xl px-4 xs:px-8 xl:px-0 m-auto flex justify-between items-center py-8">
                <div>
                    <Link href={'/'} className="text-2xl font-bold">aBit</Link>
                </div>

                <div className="hidden xs:block">
                    <ul className="flex items-center gap-6">
                        <li className="cursor-pointer border-2 border-[#764CC2] text-[#764CC2] px-6 py-3 rounded-full text-xs font-bold hover:bg-[#764CC2] hover:text-white transition-all">Share new video</li>
                        <li className="cursor-pointer opacity-30 hover:opacity-50 transition-all"><Image src={'/wallet.png'} alt={'wallet icon'} width='24' height='24' /></li>
                        <li className="cursor-pointer opacity-30 hover:opacity-50 transition-all"><Image src={'/notification.png'} alt={'notification icon'} width='24' height='24' /></li>
                        <ul className="flex items-center gap-2">
                            <li className="cursor-pointer"><Image src={'/profilepic.png'} alt={'profile icon'} width='28' height='28' /></li>
                            <li className="cursor-pointer opacity-30 hover:opacity-50 transition-all"><Image src={'/dropdown.png'} alt={'dropdown icon'} width='24' height='11' /></li>
                        </ul>
                    </ul>
                </div>

                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer z-10 text-black xs:hidden h-5 w-5 opacity-80"
                >
                    {nav ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>}
                </div>
            </nav>
            {nav && (
                <div className="absolute h-screen top-24 left-0 right-0 bottom-0 border-t border-black bg-white z-30">
                    <ul className="flex flex-col justify-center gap-4 p-4">
                        <li className="cursor-pointer transition-all flex gap-4 items-center border-l-2 ps-4 hover:border-black">
                            <Image src={'/wallet.png'} alt={'wallet icon'} width='24' height='24' className="opacity-30 hover:opacity-50 " />
                            <span className="opacity-80">Wallet</span>
                        </li>
                        <li className="cursor-pointer transition-all flex gap-4 items-center border-l-2 ps-4 hover:border-black" >
                            <Image src={'/notification.png'} alt={'notification icon'} width='24' height='24' className="opacity-30 hover:opacity-50" />
                            <span className="opacity-80">Notification</span>
                        </li>
                        <li className="flex items-center gap-4 border-l-2 ps-4 hover:border-black">
                            <Image src={'/profilepic.png'} alt={'profile icon'} width='28' height='28' />
                            <span className="opacity-80">Profile</span>
                        </li>
                        <li className="cursor-pointer border-2 border-[#764CC2] text-[#764CC2] px-6 py-3 rounded-full text-xs font-bold hover:bg-[#764CC2] hover:text-white transition-all">Share new video</li>
                    </ul>
                </div>
            )}
        </header>
    );
}