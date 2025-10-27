

export default function GradientBtn({ text }: { text: string }) {
    return (
        <button className="relative h-12 px-8 rounded-full overflow-hidden transition-all duration-500 group cursor-pointer">
            <div className="absolute inset-0 rounded-full p-0.5 bg-primary-color">
                <div className="absolute inset-0 bg-primary-color rounded-full opacity-90" />
            </div>
            <div className="absolute inset-0.5 bg-[#ffffff] rounded-lg opacity-95" />
            <div className="absolute inset-0.5 bg-linear-to-r from-[#938557] via-[#9d926c] to-[#a69b73] rounded-lg opacity-90" />
            <div className="absolute inset-0.5 bg-linear-to-r from-[#706232] via-primary-color to-[#4c411b]/30 rounded-lg opacity-80" />
            <div className="absolute inset-0.5 bg-linear-to-r from-[#5f5123] via-[#584b1d] to-[#4c411b]/50 rounded-lg" />
            <div className="absolute inset-0.5 shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg" />
            <div className="relative flex items-center justify-center gap-2">
                <span className="text-lg font-normal linear-to-b from-[#50451f] to-[#53471e] bg-clip-text  drop-shadow-[0_0_12px_rgba(199,135,246,0.4)] tracking-tighter text-white cursor-pointer">
                    {text}
                </span>
            </div>
            <div className="absolute inset-0.5 opacity-0 transition-opacity duration-300 bg-linear-to-r from-[#6b4682]/20 via-[#836897]/10 to-[#2A1736]/20 group-hover:opacity-100 rounded-lg" />
        </button>
    )
}
