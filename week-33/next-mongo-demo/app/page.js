import { connectDB } from "@/lib/db";

export default async function Home() {
  await connectDB();

  return (
    <div>
      <h1>MongoDB Connected Successfully!</h1>
    </div>
  );
}