
import { Gloria_Hallelujah } from 'next/font/google'

const gloriaHallelujah = Gloria_Hallelujah({ weight: '400', subsets: ['latin'] })

export default function ProfileSection() {
    return (
        <section className='pb-40 xs:pb-20'>
            <div
                style={{ backgroundImage: 'url(\'/cover.png\')', backgroundSize: 'cover', backgroundPosition: 'center' }}
                className="w-full h-[424px] bg-no-repeat size"
            ></div>
            <div className='relative'>
                <div className="bg-[#292828] absolute left-0 right-0">
                    <p className={`${gloriaHallelujah.className} text-white text-2xl whitespace-nowrap overflow-hidden py-6`}>John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now</p>
                </div>
                <div className='max-w-7xl px-4 sm:px-8 xl:px-0 m-auto relative h-20'>
                    <div className='absolute min-h-56 w-[calc(100%-32px)] max-w-[572px] bottom-1/2 translate-y-1/2 bg-gray-50 rounded-3xl flex flex-col xs:flex-row shadow-profile'>
                        <div
                            style={{ backgroundImage: 'url(\'/profilebig.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center' }}
                            className="min-w-56 min-h-56 bg-no-repeat size border-b xs:border-r border-black rounded-t-3xl xs:rounded-tr-none xs:rounded-l-3xl brightness-75"
                        ></div>
                        <div className='p-6 xs:p-8 space-y-4'>
                            <div className='flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center'>
                                <span className='uppercase text-2xl font-bold'>Dan Mace</span>
                                <span className='text-[#696969]'>/Johny_Films/</span>
                            </div>
                            <div className='flex flex-col text-[#696969]'>
                                <span className='text-sm font-bold'>Bio</span>
                                <span className='text-sm'>Simply a film fan creating original content for YouTube. Let’s Collaborate.</span>
                            </div>
                            <div className='rounded relative h-8 max-w-full'>
                                <div
                                    style={{ fontFamily: 'RecklessNeue' }}
                                    className='bg-white w-1/2 rounded border border-black absolute inset-0 z-10 flex justify-center items-center'>
                                    Creator
                                </div>
                                <div className='w-full rounded border border-black bg-black bg-opacity-65 absolute inset-0'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}