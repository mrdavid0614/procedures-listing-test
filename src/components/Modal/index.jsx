export const Modal = ({ children, open }) => {
  if (open) {
    return (
      <>
        <div className="fixed justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
          <div className="relative my-6 max-w-80 xl:max-w-6xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl overflow-y-auto max-h-[92%]">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  }

  return null;
};
