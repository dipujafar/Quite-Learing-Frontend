import TransactionContainer from "./_component/transaction/TransactionContainer";
import WalletStat from "./_component/WalletStat";


export default function WalletPage() {
    return (
        <div className="space-y-4">
            <div>
                <h1 className="lg:text-3xl text-2xl ">Wallet</h1>
                <p className="md:text-lg text-[#717182]">Manage your earnings and view transaction history</p>
            </div>
            <WalletStat />
            <TransactionContainer />
        </div>
    )
}
