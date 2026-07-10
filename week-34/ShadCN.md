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