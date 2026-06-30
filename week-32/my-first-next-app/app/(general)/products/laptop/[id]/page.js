export default async function LaptopPage({ params }) {
    const {id} = await params; // for next.js 15 it will work
    return (
    <div>
        <h1>Welcome to Laptop Page</h1>
        <p> Product ID: {id}</p>
    </div>

    )
}