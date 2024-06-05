import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import GoogleIcon from '../../../public/google.svg';
import Image from 'next/image';

export default function SignUp() {
    return (
        <div className='mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14'>
            {/* form */}
            <form>
                <h1 className='text-3xl font-semibold text-white'>Sign Up</h1>
                <div className='space-y-4 mt-5'>
                    <Input
                        type='email'
                        name='email'
                        placeholder='Email'
                        className='bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block'
                    />
                    <Button type='submit' variant='destructive' className='w-full bg-[#e50914]'>
                        Sign Up
                    </Button>
                </div>
            </form>

            {/* already have account */}
            <div className='text-gray-500 text-sm mt-2'>
                Already have an account?{' '}
                <Link className='text-white hover:underline' href='/login'>
                    Log in now!
                </Link>
            </div>

            {/*  */}
            <div className='flex w-full justify-center items-center gap-x-3 mt-6'>
                {/* github icon */}
                <Button variant='outline' size='icon'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        className='lucide lucide-github'
                    >
                        <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                        <path d='M9 18c-4.51 2-5-2-7-2' />
                    </svg>
                </Button>

                {/* google icon */}
                <Button variant='outline' size='icon'>
                    <Image src={GoogleIcon} alt='Google-Icon' className='h6 w-6' />
                </Button>
            </div>
        </div>
    );
}
