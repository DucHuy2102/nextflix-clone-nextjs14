import { ReactNode } from 'react';
import BackgroundImage from '../../public/login_background.jpg';
import NetflixLogo from '../../public/netflix_logo.svg';
import Image from 'next/image';

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className='flex flex-col relative h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent'>
            {/* background */}
            <Image
                src={BackgroundImage}
                alt='Background-Image-Netflix-HomePage'
                className='hidden sm:flex sm:object-cover -z-10 brightness-50'
                fill
                priority
            />

            {/* logo */}
            <Image
                src={NetflixLogo}
                alt='Logo-Netflix-HomePage'
                width={120}
                height={120}
                className='absolute left-4 top-4 object-contain md:left-10 md:top-6'
                priority
            />

            {/* children */}
            {children}
        </div>
    );
}
