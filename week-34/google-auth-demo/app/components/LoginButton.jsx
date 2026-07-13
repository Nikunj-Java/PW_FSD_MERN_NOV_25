"use client";
import { Button } from "@/components/ui/button";

import { signIn } from "next-auth/react";

import { Input } from "@/components/ui/input";
import { Card,CardHeader,CardTitle,CardContent,CardFooter } from "@/components/ui/card";

export default function LoginButton() {
    return (
        <div>
            <h1>This is ShadCN Demo</h1>
            <Input placeholder="Enter Your Email ID"/>

            <Card>
                <CardHeader>
                    <CardTitle>Laptop</CardTitle>
                </CardHeader>
                <CardContent>
                    Hello this is Card Content
                </CardContent>
                <CardFooter>
                    Designed By: Nikunj Soni
                </CardFooter>
            </Card>

            <Button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
                <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    width="18"
                    height="18"
                    style={{ marginRight: "8px" }}
                />
                Sign In With Google
            </Button>
            <br />
            <h1>ShadCN Buttons</h1>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <h1>Buttons with size</h1>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button size="default">Default</Button>
            <Button size="icon">+</Button>


        </div>
    )
}