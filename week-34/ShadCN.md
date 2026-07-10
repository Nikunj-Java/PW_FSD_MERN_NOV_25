# ShadCN
- before the use of ShadCN we were using Bootstrap
- so we need to rely on Bootstrap/React-BootStrap Library
- bit while we use ShadCN it download it locally the component/library you want to use and you have full control on it

## How to Install ShadCN ?
```
npx shadcn@latest init
```
- You Will Be Ask Few Questions
1. Which preset would you like to use ?
    - Choose Anything You Like
2. you can see Components/ui and lib/utils.js Folder
```
rootfolder(app)
│
├── components
│     └── ui
│
├── lib
│     └── utils.ts
│
```
3. Add a Button
```
npx shadcn@latest add button
```
this will create button.jsx
```
components
│
└── ui
      button.jsx
```
## LoginPage With ShadCN
- Let's Redesign the Login page
- LoginButton.jsx
```
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
```
- LogoutButton.jsx
```
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
```