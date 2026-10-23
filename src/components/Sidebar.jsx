export function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <div>
      <div
        className={`dark:bg-night fixed top-0 right-0 z-50 h-screen w-full transform overflow-y-auto bg-white p-5 shadow-lg transition duration-300 md:w-[50%] lg:w-[35%] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClickClose}
          className="absolute top-4 right-4 p-2 font-bold text-black dark:text-white"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 z-20 h-full w-full bg-black opacity-50" />
      )}
    </div>
  );
}
