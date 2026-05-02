'use client';
import React, { useState } from 'react';
import {
    Button,
    Card,
    Checkbox,
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

export default function LoginPage() {
    const [pToggle, setPToggle] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    async function onSubmit(data) {

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: false,
            callbackURL: "/",
        });
        console.log(res, error);
    }

    return (
        <Form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <TextField fullWidth type="email" >
                <Label>Email address</Label>
                <Input placeholder="you@dragonnews.io" autoComplete="email" {...register("email", { required: true })} />
                <span className='text-red-500'>{errors.email && "Email is required"}</span>
            </TextField>

            <TextField className="w-full max-w-[280px]" name="password">
                <Label>Password</Label>
                <InputGroup>
                    <InputGroup.Input
                        className="w-full max-w-[280px]"
                        type={pToggle ? "text" : "password"}
                        {...register("password", { required: true })}
                        placeholder="••••••••"
                        autoComplete="current-password"

                    />
                    <InputGroup.Suffix className="pr-0">
                        <Button
                            isIconOnly
                            aria-label={pToggle ? "Hide password" : "Show password"}
                            size="sm"
                            variant="ghost"
                            onPress={() => setPToggle(!pToggle)}
                        >
                            {pToggle ? <Eye className="size-4" /> : <FaEyeSlash className="size-4" />}
                        </Button>
                    </InputGroup.Suffix>
                </InputGroup>
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