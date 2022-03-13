export default function Footer() {
  return (
    <footer className="bg-blue-600">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          Created by{" "}
          <a
            href="https://github.com/douglasmaringa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Douglas Maringa
          </a>
        </li>

        <li>
          <a
            href="https://github.com/douglasmaringa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
