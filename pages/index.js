import Link from "next/link";
function HomePage() {
  return (
    <div>
      <h1>This is Homepage!!!</h1>
      <ul>
        <li>
          <Link href="/clients">Clint-Page</Link>
        </li>
      </ul>
    </div>
  );
}
export default HomePage;
