import clsx from "clsx";
import styles from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  const getNavLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };

  return (
    <header className={styles.header}>
      <div className={clsx("container", styles.headerContainer)}>
        <Link to="/">
          <img alt="Site logo" src="/logo.png" />
        </Link>
        <nav className={styles.nav}>
          <NavLink to="/" end className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/catalog" end className={getNavLinkClass}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
