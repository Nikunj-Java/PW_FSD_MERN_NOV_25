
export async function generateMetadata({params}){
    const { id } = await params;
    // using mongo db
    //const product = await Product.findById(params.id);
    return {
        title: "Product"-{id}, //or title: product.name,
        description: "Product Description" // or description: product.description
    }
}
 
export default async function ProductPage({params}){
    const { id } = await params;
    return (
    <div>
        <h1>Product Page</h1>
        <p>ProductId: {id}</p>
        </div>
)}