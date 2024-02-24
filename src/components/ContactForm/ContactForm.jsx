import css from "./ContactForm.module.css";

// библиотека для создания форм
import { Formik, Form, Field, ErrorMessage } from "formik";

// для валидации
import * as Yup from "yup";

// генерация id
import { nanoid } from "nanoid";

// хук для уникальных id
import { useId } from "react";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short name!")
    .max(50, "Too long name!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short number!")
    .max(50, "Too long number!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const fieldName = useId();
  const fieldNumber = useId();

  return (
    <Formik
      initialValues={{
        id: "",
        name: "",
        number: "",
      }}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          id: nanoid(5),
          name: values.name,
          number: values.number,
        };
        onAdd(newContact);
        resetForm();
      }}
      validationSchema={ContactFormSchema}
      validationOnBlur={false}
      validateOnChange={false}
    >
      <Form className={css.form}>
        <label htmlFor={fieldName}>Name</label>
        <Field className={css.input} type="text" name="name" id={fieldName} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={fieldNumber}>Number</label>
        <Field
          className={css.input}
          type="tel"
          name="number"
          id={fieldNumber}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}"
          placeholder="098 00 00 000"
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
