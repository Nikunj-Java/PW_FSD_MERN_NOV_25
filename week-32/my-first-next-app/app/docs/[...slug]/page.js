

export default async function DocsPage({params}) {
    const {slug}= await params;

    return(
        <>
            <h1>Documentation</h1>
            <p>{slug.join(" / ")}</p>
        </>
    )
    
}