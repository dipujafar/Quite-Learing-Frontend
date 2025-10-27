import { DownloadIcon, GrowthIcon, WalletIcon } from "@/components/icons";

const statData = [
  {
    label: "Total Earnings",
    value: "3,456.78",
    icon: <GrowthIcon />,
    iconBg: "#F0FDF4"
  },
  {
    label: "Available Balance",
    value: "1,206.78",
    icon: <WalletIcon />,
    iconBg: "#EFF6FF"
  },
  {
    label: "Total Withdrawn",
    value: "2,250.00",
    icon: <DownloadIcon />,
    iconBg: "#FAF5FF"
  }
]

export default function WalletStat() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-2.5">
      {
        statData?.map((item, index) => (
          <div key={index} className="border border-black/10 bg-white lg:p-4 p-2 rounded-2xl ">
            <div className="flex justify-between">
              <h5 className="text-lg text-[#717182]">{item.label}</h5>
              <div style={{ background: item?.iconBg }} className=" p-2 rounded-md">
                {item.icon}
              </div>
            </div>
            <h5 className="md:text-2xl text-xl font-semibold">${item.value}</h5>
          </div>
        ))
      }

    </div>
  )
}
