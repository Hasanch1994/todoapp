import React, { useContext } from 'react';
import TaskContext from '../../Contexts/TaskContext';
const TaskItem = () => {
    const context = useContext(TaskContext);


    return (
        <div>
            {
                context.tasks.map((task, index) => (

                    <div className="input-group mb-3 taskitem" key={task.uuid}>
                        <div className="input-group-prepend">
                            <span className="btn btn-danger" onClick={() => context.handleDelete(task.id)}>حذف</span>{" "}
                            <span className="btn btn-info" onClick={() => context.handlesetread(task.id)}>اتمام</span>
                            <button className="btn btn-primary" data-toggle="collapse" data-target="#taskcollapse">نمایش</button>
                        </div>
                        {
                            !task.read ?
                                <p type="text" dir="rtl" className="form-control" aria-label="" aria-describedby="basic-addon1">{task.taskname}  { }</p>
                                :
                                <del type="text" dir="rtl" className="form-control" aria-label="" aria-describedby="basic-addon1">{task.taskname}  { }</del>
                        }

                        {/* <p className="badge badge-pill badge-warning text-center counterp">{index + 1}</p> */}

                    </div>


                ))
            }

        </div>

    );
}

export default TaskItem;