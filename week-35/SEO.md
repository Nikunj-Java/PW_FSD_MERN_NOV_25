# SEO in Next.js (Step-by-Step)

## Learning Objectives

-   Understand SEO in Next.js
-   Metadata API
-   Dynamic Metadata
-   Open Graph Images

## Why SEO?

SEO improves search engine visibility.

## Metadata Example

``` js
export const metadata={title:'Employee Management',description:'Manage employees'}
```

## Dynamic Metadata

``` js
export async function generateMetadata({params}){
 return {title:`Product ${params.id}`}
}
```
