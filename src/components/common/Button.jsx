import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",

    secondary:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",

    dark: "bg-gray-900 text-white hover:bg-black",
  };

  const styles = `${base} ${variants[variant]} ${className}`;

  // Internal Route
  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  // External Link
  if (href) {
    return (
      <a
        href={href}
        className={styles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // Normal Button
  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
