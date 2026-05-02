'use client';
import React, { useState } from 'react';
import {
    Button,
    Card,
    Form,
    Input,
    InputGroup,
    Label,
    Link,
    TextField,
} from '@heroui/react';
import { useForm } from 'react-hook-form';
import { authClient } from '@/app/lib/auth-client';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Eye } from 'lucide-react';
import { Bounce, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [pToggle, setPToggle] = useState(false)
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    async function onSubmit(data) {
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: false,
        });
        console.log(res, error);

        if (error) {
            toast.error(`${error.message}`, {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return
        }

        if (res) {
            router.push("/")
            toast.success('Sign in successful', {
                position: "top-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-display font-bold text-text mb-2">Welcome back</h1>
                    <p className="text-sm text-surface-alt">Sign in to your account</p>
                </div>

                <Card className="bg-surface border border-white/10 p-8 space-y-6">
                    <Form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        <TextField fullWidth type="email">
                            <Label className="text-text font-medium">Email address</Label>
                            <Input
                                placeholder="you@example.com"
                                autoComplete="email"
                                {...register("email", { required: true })}
                            />
                            <span className='text-error text-xs'>{errors.email && "Email is required"}</span>
                        </TextField>

                        <TextField fullWidth name="password">
                            <Label className="text-text font-medium">Password</Label>
                            <InputGroup>
                                <InputGroup.Input
                                    type={pToggle ? "text" : "password"}
                                    {...register("password", { required: true })}
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                />
                                <InputGroup.Suffix className="pr-0">
                                    <Button
                                        size="sm"
                                        variant='ghost'
                                        className="text-surface-alt hover:text-accent"
                                        onPress={() => setPToggle(!pToggle)}
                                    >
                                        {pToggle ? <Eye className="size-4" /> : <FaEyeSlash className="size-4" />}
                                    </Button>
                                </InputGroup.Suffix>
                            </InputGroup>
                            <span className='text-error text-xs'>{errors.password && "Password is required"}</span>
                        </TextField>

                        <Button
                            type="submit"
                            size="lg"
                            fullWidth
                            className="bg-accent text-bg font-semibold hover:bg-accent/90"
                        >
                            Sign in
                        </Button>
                    </Form>
                </Card>

                <p className="text-center text-sm text-surface-alt/60 mt-6">
                    Don&apos;t have an account?{' '}
                    <Link href="/register" className="text-accent hover:text-accent/80">
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    );
}