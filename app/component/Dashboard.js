import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
    const data = [1];
    return (
        <div className="max-w-7xl px-4 sm:px-8 xl:px-0 m-auto py-20 space-y-16">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
                <div className="flex flex-col">
                    <span
                        style={{ fontFamily: 'RecklessNeue' }}
                        className="text-[28px]"
                    >Release</span>
                    <span
                        style={{ fontFamily: 'RecklessNeue' }}
                        className="text-lg text-[#565656] italic"
                    >Videos that you upload in collaboration with aBit appear here.</span>
                </div>
                <div className="grid grid-cols-2 xs:grid-cols-4 gap-4 sm:gap-16 text-[#565656]">
                    <div className="flex flex-col gap-2 justify-between border-l border-[#7A7A7A] ps-4">
                        <span className="font-bold">1</span>
                        <span className="whitespace-pre leading-tight">Shared{'\n'}Videos</span>
                    </div>
                    <div className="flex flex-col gap-2 justify-between border-l border-[#7A7A7A] ps-4">
                        <span className="font-bold">$9510</span>
                        <span className="whitespace-pre leading-tight">Funds{'\n'}Raised</span>
                    </div>
                    <div className="flex flex-col gap-2 justify-between border-l border-[#7A7A7A] ps-4">
                        <span className="font-bold">317</span>
                        <span className="whitespace-pre leading-tight">Co-owner{'\n'}Community</span>
                    </div>
                    <div className="flex flex-col gap-2 justify-between border-l border-[#7A7A7A] ps-4">
                        <span className="font-bold">$3804</span>
                        <span className="whitespace-pre leading-tight">Co-owner{'\n'}Earnings</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-8">
                <div className="bg-[#EDEDED] w-72 max-w-72 h-80 rounded-3xl p-5 relative flex justify-center items-center hover:translate-y-[-8px] transition-all cursor-pointer">
                    <Image src={'/addition.svg'} alt={'addition'} width='32' height='32' />
                    <p className="text-[#A0A0A0] text-sm text-center tracking-wider whitespace-pre absolute bottom-5">You haven’t uploaded any {'\n'} videos with aBit yet. Add now!</p>
                </div>
                {
                    data.map((item, index) => (
                        <Link href={'/'} className='group'>
                            <div
                                key={index}
                                style={{ backgroundImage: 'url(\'/releasecover.png\')', backgroundSize: '320px', backgroundPosition: 'center' }}
                                className="bg-[#EDEDED] w-72 max-w-72 h-80 rounded-3xl p-5 relative flex flex-col justify-between shadow-release group-hover:translate-y-[-8px] transition-all"
                            >
                                <p className="text-white font-bold text-xl">The Sound of Silence</p>
                                <div className="bg-white text-white bg-opacity-20 backdrop-blur-2xl rounded-xl px-6 py-2 flex justify-between">
                                    <div className="flex flex-col items-center">
                                        <span className="text-xs">Shares</span>
                                        <span className="text-sm font-bold">317</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-xs">Offered</span>
                                        <span className="text-sm font-bold">75%</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-xs">Raised</span>
                                        <span className="text-sm font-bold">$9510</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }

            </div>
        </div>
    );
}