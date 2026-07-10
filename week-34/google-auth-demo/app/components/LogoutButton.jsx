"use client";

import { signOut } from "next-auth/react";
import {Button} from "@/components/ui/button";

export default function LogoutButton(){
    return(
        <Button variant="destructive" onClick={() => signOut()}>
            Sign Out
        </Button>
    )
}