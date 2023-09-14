import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <hr className="my-5" />
      <div className="flex justify-evenly">
        <div>
          <Link href="https://github.com/bvsam/bvsam.github.io">Source</Link>
        </div>
        <div>
          Made by <Link href="https://github.com/bvsam/">Benjamin Sam</Link>
        </div>
      </div>
    </footer>
  );
}
