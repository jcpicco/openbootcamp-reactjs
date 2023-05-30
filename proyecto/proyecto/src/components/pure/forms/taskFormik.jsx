import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Models
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const TaskFormik = ({ add, length }) => {
    const initialValues = {
        name: '',
        description: '',
        completed: '',
        level: LEVELS.NORMAL
    };

    const taskSchema = Yup.object().shape({
        name: Yup.string()
            .max(64, 'Username too long')
            .required('Task name is required'),
        description: Yup.string()
            .max(512, 'Description too long'),
        level: Yup.string()
            .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select a level: NORMAL, URGENT, BLOCKING')
            .required('Level is required')
    });

    return (
        <div>
            <Formik
                initialValues={ initialValues }
                validationSchema={ taskSchema }
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    const newTask = new Task(
                        values.name,
                        values.description,
                        false,
                        values.level
                    );
                    add(newTask);
                }}
            >

            {({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur }) => (
                    <Form>
                        <Field className='form-control form-control-lg' id="name" type="text" name="name" placeholder="Task name"/>

                        { errors.name && touched.name && (
                            <ErrorMessage name="name" component='div'></ErrorMessage>
                        )}

                        <Field className='form-control form-control-lg' id="description" type="text" name="description" placeholder="Task description"/>

                        { errors.description && touched.description && (
                            <ErrorMessage name="description" component='div'></ErrorMessage>
                        )}

                        <Field className='form-control form-control-lg' id="level" as="select" name="level">
                            <option value={ LEVELS.NORMAL }>Normal</option>
                            <option value={ LEVELS.URGENT }>Urgent</option>
                            <option value={ LEVELS.BLOCKING }>Blocking</option>
                        </Field>
                        <button type="submit" className='btn btn-success btn-lg ms-2'>{length > 0 ? 'Add new task' : 'Create your first task'}</button>
                        {isSubmitting ? (<p>Creating task...</p>): null}
                    </Form>
                )
            }

            </Formik>
        </div>
    );
}


export default TaskFormik;
