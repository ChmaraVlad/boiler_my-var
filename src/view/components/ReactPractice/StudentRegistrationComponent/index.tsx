// Core
import React, { FC } from 'react';
import {  useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const schema = yup.object({
    firstName: yup.string().required()
        .max(16),
    lastName: yup.string().required()
        .max(16),
    email: yup.string().required()
        .email(),
    sex:        yup.string(),
    speciality: yup.string(),
    age:        yup.number().positive()
        .integer()
        .max(99)
        .min(16),
}).required();


interface  IFormValues {
    firstName:  string,
    lastName:    string,
    age:        number,
    email:      string,
    sex:        string,
    speciality: string,
}

export const StudentRegistrationComponent: FC<PropTypes> = () => {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>({
        mode:     'onChange',
        resolver: yupResolver(schema) });

    const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);


    return (
        <S.Container>
            <h1>Student Registration Form</h1>
            <S.Form onSubmit = { handleSubmit(onSubmit) }>
                <div>
                    <label htmlFor = 'firstName'>First Name
                        <input
                            placeholder = 'firstName'
                            { ...register('firstName',  { required: true, maxLength: 10 }) }
                        />
                        <S.ErrorMsg>{errors.firstName?.message}</S.ErrorMsg>
                    </label>
                </div>
                <div>
                    <label htmlFor = 'lastName'>Last Name
                        <input
                            placeholder = 'lastName'
                            { ...register('lastName', { required: true, maxLength: 10 }) }
                        />
                        <S.ErrorMsg>{errors.lastName?.message}</S.ErrorMsg>
                    </label>
                </div>
                <div>
                    <label htmlFor = 'age'>Age
                        <input
                            placeholder = 'age'
                            type = 'number'
                            { ...register('age', { min: 6, max: 60 }) }
                        />
                        <S.ErrorMsg>{errors.age?.message}</S.ErrorMsg>
                    </label>
                </div>
                <div>
                    <label htmlFor = 'speciality'>Speciality</label> <br />
                    <select
                        { ...register('speciality') }>
                        <option value = 'designer'>designer</option>
                        <option value = 'developer'>developer</option>
                        <option value = 'writer'>writer</option>
                    </select>
                </div>

                <div>
                    <label htmlFor = 'email'>Email</label> <br />
                    <input
                        placeholder = 'test@hotmail.com'
                        type = 'email'
                        { ...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i }) }
                    />
                    <S.ErrorMsg>{errors.email?.message}</S.ErrorMsg>
                </div>
                <div>
                    <label>
                        Male
                        <input
                            { ...register('sex') }
                            type = 'radio'
                            value = 'Male'
                        />
                    </label>
                    <label>
                        Female
                        <input
                            { ...register('sex') }
                            type = 'radio'
                            value = 'Female'
                        />
                    </label>
                </div>
                <input type = 'submit' />
            </S.Form>
        </S.Container>
    );
};
