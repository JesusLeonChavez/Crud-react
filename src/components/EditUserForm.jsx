import React, {Fragment} from 'react'
import { useForm } from 'react-hook-form'

function EditUserForm(props) {

    // console.log(props.currentUser);

    const {register, handleSubmit, formState: { errors }, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data, e) => {
        console.log(data);

        data.id = props.currentUser.id

        props.updateUser(props.currentUser.id, data)

        //clear
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name"  {...register("name", {
                required: {value: true, message: 'Campo Requerido'}
            })} />
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input type="text" name="username" {...register("username", {
                required: {value: true, message: 'Campo Requerido'}
            })} />
            <div>
                {errors?.username?.message}
            </div>
            <button>Edit user</button>
        </form>
    );
}

export default EditUserForm;
