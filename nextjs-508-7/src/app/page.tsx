
import Link from "next/link";
// /app/page.tsx
export default function HomePage() {
    return (
      <div>
      <h1>Landing Page</h1>
      <p>This is a first page.</p>
      <Link href="/student">Go to student</Link>
    </div>
    );
  }