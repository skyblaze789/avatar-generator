function Button({ children, onClick, isActive, className = "" }) {
  const base =
    "px-4 py-1 font-medium rounded-full border-2 cursor-pointer transition-all duration-200";

  const active = "bg-blue-900 text-white border-blue-900";

  const inactive =
    "text-blue-400 border-blue-400 hover:text-blue-600 hover:border-blue-600";

  return (
    <button
      type="button"
      aria-pressed={isActive}
      className={`${base} ${isActive ? active : inactive} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
