
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

export default function Restricted() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/50 rounded-full blur-[120px]" />
            </div>

            <div className="relative flex flex-col items-center justify-center gap-10 z-10 text-center max-w-lg">

                <h2 className="text-3xl font-display font-semibold text-text mb-4">
                    You Must Login To See The Contents
                </h2>
                <p className="text-surface-alt text-lg mb-2">
                    Sign up or login to see the contents.
                </p>

                <div className="flex items-center justify-center gap-4">
                    <Link
                        href="/register"
                        className="inline-flex max-sm:text-sm items-center gap-2 px-6 py-3 bg-accent text-bg font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                    >
                        Register
                    </Link>
                    <Link href={`/login`}>
                        <button
                            className="px-6 flex items-center gap-1 py-3 border border-surface-alt/30 text-surface-alt rounded-lg hover:border-accent/50 hover:text-accent cursor-pointer transition-all duration-300"
                        >
                            <span>Log In</span>
                            <ArrowRightIcon></ArrowRightIcon>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}