import TaskManagementContainer from "./_component/TaskManagementContainer"

export default function TaskManagementPage() {

    return (
        <div className="space-y-5">
            <div>
                <h4 className="section-title">Task Management</h4>
                <div className="flex items-center gap-x-5 mt-2">
                    <hr className="flex-1" />
                    <div className="size-4 bg-primary-color/40 rounded-full">

                    </div>
                    <hr className="flex-1" />
                </div>
            </div>
            <TaskManagementContainer />
        </div>
    )
}
