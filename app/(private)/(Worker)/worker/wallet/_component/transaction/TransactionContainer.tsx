import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import { TransactionHistory } from './TransactionHistory'
import { WithdrawalHistory } from './WithdrawalHistory'

export default function TransactionContainer() {
    return (
        <Tabs defaultValue="transactionHistory" className="w-full">
            <TabsList className='w-full'>
                <TabsTrigger value="transactionHistory">Transaction History</TabsTrigger>
                <TabsTrigger value="withdrawal_history">Withdrawal History</TabsTrigger>
            </TabsList>
            <TabsContent value="transactionHistory"><TransactionHistory />
            </TabsContent>
            <TabsContent value="withdrawal_history"><WithdrawalHistory /></TabsContent>
        </Tabs>
    )
}
