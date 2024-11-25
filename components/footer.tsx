import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-32 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex space-x-6">
          <Link
            href="#"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Twitter
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Figma
          </Link>
        </div>
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Paco Coursey
        </div>
      </div>
    </footer>
  );
}
