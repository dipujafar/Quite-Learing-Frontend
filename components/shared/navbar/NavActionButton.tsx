

export default function NavActionButton() {
  return (
    <div className="flex items-center gap-x-2">
      <button className="relative h-12 px-8 rounded-full overflow-hidden transition-all duration-500 group cursor-pointer">
        <div className="absolute inset-0 rounded-full p-[2px] bg-[#584c22]">
          <div className="absolute inset-0 bg-[#584c22] rounded-full opacity-90" />
        </div>
        <div className="absolute inset-[2px] bg-[#ffffff] rounded-lg opacity-95" />
        <div className="absolute inset-[2px] bg-gradient-to-r from-[#938557] via-[#9d926c] to-[#a69b73] rounded-lg opacity-90" />
        <div className="absolute inset-[2px] bg-gradient-to-r from-[#706232] via-[#584c22] to-[#4c411b]/30 rounded-lg opacity-80" />
        <div className="absolute inset-[2px] bg-gradient-to-r from-[#5f5123] via-[#584b1d] to-[#4c411b]/50 rounded-lg" />
        <div className="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg" />
        <div className="relative flex items-center justify-center gap-2">
          <span className="text-lg font-normal bg-gradient-to-b from-[#50451f] to-[#53471e] bg-clip-text  drop-shadow-[0_0_12px_rgba(199,135,246,0.4)] tracking-tighter text-white cursor-pointer">
            Post An Assignment
          </span>
        </div>
        <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#6b4682]/20 via-[#836897]/10 to-[#2A1736]/20 group-hover:opacity-100 rounded-lg" />
      </button>

      <button className="flex justify-center gap-2 items-center border-primary-color mx-auto relative px-4 py-2 cursor-pointer overflow-hidden rounded-[30px] border-2 bg-transparent text-primary-color font-bold  transition-all duration-1000 ease-in-out hover:shadow-[1px_1px_200px_#584c22] hover:text-white hover:border-none after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[10px] after:w-[10px] after:rounded-[30px] after:bg-primary-color after:invisible after:transition-all after:duration-1000 after:ease-in-out hover:after:visible hover:after:scale-[100] hover:after:translate-x-[2px] after:-z-10 z-10 group">
        <span>Become a Worker</span>
        <svg
          className="w-8 h-8 justify-end bg-primary-color group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-500 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            className="fill-primary-white group-hover:fill-gray-800"
          />
        </svg>
      </button>
    </div>
  );
}
