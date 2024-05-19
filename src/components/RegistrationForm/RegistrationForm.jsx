import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';
import Button from '@mui/material/Button';

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});



const initialValues = {
    name: '',
    email: '',
    password: '',
};

const RegisterForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = async (values, actions) => {
    try {
        await dispatch(register(values)).unwrap();
        actions.resetForm();
    } catch (error) {
        console.error("Registration failed:", error);
    }
};

   /*  const handleSubmit = (values, { setSubmitting }) => {
        dispatch(register(values));
        setSubmitting(false);
    }; */

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
        >
        {({ isSubmitting }) => (
            <Form className={css.form}>
            <label htmlFor="name" className={css.label}>Name</label>
            <Field name="name" type="text" className={css.field} />
            <ErrorMessage name="name" component="div"  />

            <label htmlFor="email" className={css.label}>Email</label>
            <Field name="email" type="email" className={css.field} />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="password" className={css.label}>Password</label>
            <Field name="password" type="password" className={css.field} />
            <ErrorMessage name="password" component="div" />

            <Button type="submit" disabled={isSubmitting} className={css.btn}>Register</Button>
            </Form>
        )}
        </Formik>
    );
};

export default RegisterForm;
/* export default function RegistrationForm() {
    const dispatch = useDispatch();
    const emailFieldId = useId();
    const passwordFieldId = useId();
    const nameFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(register(values));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit} 
            validationSchema={userSchema}

    >
            <Form className={css.form} autoComplete='off'>
                <label htmlFor={nameFieldId} className={css.label}>
                name
                </label>
                <Field
                className={css.field}
                type="text"
                name="name"
                placeholder="Your Name"
                id={nameFieldId}
                />
                <ErrorMessage name="name" />
                <label htmlFor={emailFieldId} className={css.label}>
                    email
                </label>
                <Field
                className={css.field}
                type="email"
                name="email"
                placeholder="Email"
                id={emailFieldId}
                />
                <ErrorMessage name="email" />
                <label htmlFor={passwordFieldId} className={css.label}>
                    password
                </label>
                <Field
                className={css.field}
                type="password"
                name="password"
                placeholder="password"
                id={passwordFieldId}
                />
                <ErrorMessage name="password" />
                <Button variant="contained" type="submit" className={css.btn}>
                    Create your account
                </Button>
            </Form>
        </Formik>
    );
}  */