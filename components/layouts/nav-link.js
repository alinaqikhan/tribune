import Link from "next/link";
import { useRouter } from "next/router";

export const NavLink = ({ id, title, href }) => {

  const router = useRouter();

  return (
      <li key={id} className={`font-medium opacity-75 hover:opacity-100 transition-opacity px-1 flex items-center nav-link ${router.pathname == href ? "active-nav-link" : ""}`}>
        <Link href={`${href}`}>
          <a>{title}</a>
        </Link>
      </li>
  );
};
