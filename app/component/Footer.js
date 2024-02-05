import Link from "next/link";

export default function Footer() {
    return (
        <header className="">
            <nav className="max-w-7xl px-4 sm:px-8 xl:px-0 m-auto flex flex-col lg:flex-row justify-between lg:items-center pb-20 gap-8">
                <div className="flex flex-col gap-2">
                    <span>
                        <Link href={'/'} className="text-[40px] font-bold">aBit</Link>
                    </span>
                    <span
                        style={{ fontFamily: 'RecklessNeue' }}
                        className="whitespace-pre text-xl capitalize"
                    >Changing the way in which {'\n'}creators and fans interact.</span>
                </div>
                <div>
                    <ul className="flex flex-col gap-4  border-l border-[#9F9D9D] ps-4">
                        <li className="text-sm font-bold hover:translate-y-[-2px] transition-all">
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className="text-sm font-bold hover:translate-y-[-2px] transition-all">
                            <Link href={'https://getabit.co/creatorpage.html'}>Are you a Creator?</Link>
                        </li>
                        <li className="text-sm font-bold hover:translate-y-[-2px] transition-all">
                            <Link href={'/'}>Support</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header >
    );
}