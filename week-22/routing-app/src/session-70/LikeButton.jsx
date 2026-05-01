import { useOptimistic, useTransition } from "react";

export default function LikeButton() {
    // Optimistic UI: Update the UI immediately while the actual update happens in the background
  const [isPending, startTransition] = useTransition();

  const [likes, addLike] = useOptimistic(0,(current, value) => current + value);

  function handleLike() {
    startTransition(() => {
      addLike(1);
    });

    // simulate API
    setTimeout(() => {
      console.log("Saved to server");
    }, 1000);
  }

  return (
    <button onClick={handleLike}>
      👍 Likes: {likes} {isPending && "Updating..."}
    </button>
  );
}