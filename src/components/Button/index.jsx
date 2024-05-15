export const Button = ({
  text,
  onClick,
  icon,
  variant = "primary",
  className,
}) => {
  const colorVariants = {
    primary: "bg-indigo-700 hover:bg-indigo-800 text-white text-sm",
    secondary:
      "bg-white border-[#D6D6EB] hover:bg-slate-100 border-2 text-[#6E6D8C] text-sm",
    terciary: "text-[#07B284] text-base",
  };

  return (
    <button
      onClick={onClick}
      className={`p-2 px-4 rounded-md flex leading-4 items-center font-bold justify-center gap-2 ${
        colorVariants[variant]
      } ${className || ""}`}
    >
      {icon}
      {text}
    </button>
  );
};
