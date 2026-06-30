

export default async function DocsPage({params}) {
    const {slug}= await params;
    
    if(!slug){
        return <h1>Welcome to Documentation</h1>
    }

    return(
        <>
            <h1>Documentation</h1>
            <p>{slug.join(" / ")}</p>
        </>
    )
    
}