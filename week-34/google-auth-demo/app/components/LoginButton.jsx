"use client";
import {Button} from "@/components/ui/button";

import { signIn } from "next-auth/react";

export default function LoginButton(){
    return(
        <div>
        <Button onClick={() => signIn("google",{callbackUrl:"/dashboard"})}>Sign In With Google</Button>
        <br/>
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