import React, { useContext } from 'react';
import TaskContext from '../../Contexts/TaskContext';
const TaskItem = () => {
    const context = useContext(TaskContext);
    const { tasks, handleDelete, handlesetread } = context;

    return (
        <div>
            {
                tasks.length > 0 ?
                    tasks.map((task, index) => (
                        <div className="input-group mb-3 taskitem" key={task.uuid}>
                            <div className="input-group-prepend">
                                <span className="btn btn-danger" onClick={() => handleDelete(task.id)}>حذف</span>{" "}
                                <span className="btn btn-info" onClick={() => handlesetread(task.id)}>اتمام</span>
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
                    :
                    <div className="card w-100 p-5 align-center">
                        <p className="text-center">هنوز رویدادی ثبت نشده است</p>
                    </div>
            }

        </div>

    );
}

export default TaskItem;