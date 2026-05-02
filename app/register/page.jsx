'use client';
import React from 'react';
import {
    Button,
    Card,
    Checkbox,
    Form,
    Input,
    Label,
    Link,
    TextField,
} from '@heroui/react';
import { useForm } from 'react-hook-form';
import { authClient } from '@/app/lib/auth-client';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    async function onSubmit(data) {

        const { data: res, error } = await authClient.signUp.email({
            name: data.name,
            email: data.email, // required
            password: data.password, // required
            rememberMe: false,
            callbackURL: "/",
        });
        console.log(res, error);

        if (error) {
            alert(error.message)
        }

        if (res) {
            alert('SignUp Successful')
        }

        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login"); // redirect to login page
                },
            },
        });
    }

    return (
        <Form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <TextField fullWidth type="text" >
                <Label>Name</Label>
                <Input placeholder="John Doe" autoComplete="name" {...register("name", { required: true })} />
                <span className='text-red-500'>{errors.name && "Name is required"}</span>
            </TextField>

            <TextField fullWidth type="email" >
                <Label>Email address</Label>
                <Input placeholder="you@dragonnews.io" autoComplete="email" {...register("email", { required: true })} />
                <span className='text-red-500'>{errors.email && "Email is required"}</span>
            </TextField>

            <TextField fullWidth type="password" >
                <Label>Password</Label>
                <Input placeholder="••••••••" {...register("password", { required: true })} autoComplete="current-password" />
                <span className='text-red-500'>{errors.password && "Password is required"}</span>
            </TextField>

            <div className="flex items-center text-sm">
                <Link href="/forgot" className="text-slate-600 hover:text-slate-900">
                    Forgot password?
                </Link>
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth>
                Continue
            </Button>
        </Form>
    );
}