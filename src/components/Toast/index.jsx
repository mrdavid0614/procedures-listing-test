export const Toast = ({ text, isShowing }) => {
  if (isShowing)
    return (
      <div className="fixed bottom-[42px] right-[42px] text-white rounded-[4px] bg-[#306495] py-[6px] px-4">
        {text}
      </div>
    );

  return null;
};
