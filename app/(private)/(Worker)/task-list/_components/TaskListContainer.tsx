"use client"
import { TaskCard } from '@/components/cards/TaskCard/TaskCard'
import Container from '@/components/shared/Container'
import PaginationSection from '@/components/shared/PaginationSection'
import { Input } from '@/components/ui/input'
import { assignments } from '@/data/dummyData'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'


export default function TaskListContainer() {
    const router = useRouter()
    return (
        <Container className=" px-0.5 md:px-0.5 lg:px-0.5   xl:px-0.5 py-0.5  bg-linear-to-r from-[#fdf6da] via-[#f5e6b0] to-[#D2B450]">
            <div className=" bg-white  px-2 md:px-6 lg:px-8   xl:px-16 lg:py-14 py-5  flex flex-col lg:flex-row gap-5 ">
                {/* dashboard  navLinks */}
                <div className="lg:w-[25%]">
                    {/* <DashboardNavLinks data={navLinks} /> */}
                </div>
                {/* children */}
                <div className="flex-1 space-y-5">
                    <div>
                        <h4 className="section-title">Task List</h4>
                        <div className="flex items-center gap-x-5 mt-2">
                            <hr className="flex-1" />
                            <div className="size-4 bg-primary-color/40 rounded-full">
                            </div>
                            <hr className="flex-1" />
                        </div>
                    </div>

                    <div className="relative">
                        <Search color="#5c5656" className="absolute  top-1/2 left-2 -translate-y-1/2" />
                        <Input placeholder="Search task..." className="bg-slate-50 h-12 pl-9" />
                    </div>
                    <div className="space-y-4">
                        {assignments.map((assignment, index) => (
                            <div key={index} className="cursor-pointer" onClick={() => router.push("/student/task-management/1")}>
                                <TaskCard
                                    {...assignment}
                                    onReject={() => console.log("Rejected:", assignment.id)}
                                    onAccept={() => console.log("Accepted:", assignment.id)}
                                />
                            </div>
                        ))}
                        <PaginationSection />
                    </div>
                </div>
            </div>
        </Container>
    )
}
