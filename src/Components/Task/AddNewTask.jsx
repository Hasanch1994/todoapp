import React, { useContext, useEffect, useRef } from 'react';
import TaskContext from '../../Contexts/TaskContext';
const AddNewTask = () => {



    const select_focus = useRef(null);
    const context = useContext(TaskContext);


    useEffect(() => {
        select_focus.current.focus();

    }, [])

    return (

        <div className="card w-50 addcard">
            <form class="card-body">
                <select onChange={context.setCatName} ref={select_focus} dir="rtl" class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>انتخاب دسته بندی...</option>
                    <option value="1">کارهای شخصی</option>
                    <option value="2">ورزش</option>
                    <option value="3">سرکار</option>
                </select>


                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="btn btn-success" type="button" onClick={context.handleAddNewTask}>ثبت</span>
                    </div>
                    <input type="text" onSubmit={e => e.preventDefault()} onChange={context.setTaskName} class="form-control" placeholder="عنوانی برای وظیفه خود انتخاب کنید" aria-label="" aria-describedby="basic-addon1" />
                </div>

            </form>
        </div>
    );
}

export default AddNewTask;