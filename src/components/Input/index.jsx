export const Input = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        defaultValue={value}
        type={type ?? "text"}
        placeholder={placeholder}
        onChange={onChange}
        className="p-2 rounded-md bg-[#F6F6FB] border-[#9CBEB3] focus:border-[#9CBEB3] border-2"
      />
    </div>
  );
};
