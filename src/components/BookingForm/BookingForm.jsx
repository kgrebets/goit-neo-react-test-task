import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./BookingForm.module.css";
import clsx from "clsx";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Please put name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please put valid email"),
  date: Yup.string().required("Please choose booking date"),
  comment: Yup.string(),
});

const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

export default function BookingForm({ camper }) {
  const handleSubmit = (values, { resetForm }) => {
    alert(
      `You booking for ${camper.name} was accepted\n` +
        `Name: ${values.name}\n` +
        `Email: ${values.email}\n` +
        `Booking date: ${values.date}\n` +
        `Comment: ${values.comment}`
    );
    resetForm();
  };

  return (
    <div className={styles.bookingForm}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
        validateOnMount={true}
      >
        <Form className={styles.form}>
          <Field
            className={styles.input}
            name="name"
            type="text"
            placeholder="Name*"
          />
          <ErrorMessage component="div" className={styles.error} name="name" />

          <Field
            className={styles.input}
            name="email"
            type="email"
            placeholder="Email*"
          />
          <ErrorMessage component="div" className={styles.error} name="email" />

          <Field
            className={styles.input}
            name="date"
            type="date"
            placeholder="Booking date*"
          />
          <ErrorMessage component="div" className={styles.error} name="date" />

          <Field
            as="textarea"
            className={styles.textarea}
            name="comment"
            placeholder="Comment"
            rows={3}
          />
          <ErrorMessage
            component="div"
            className={styles.error}
            name="comment"
          />

          <button type="submit" className={clsx("button", styles.submitBtn)}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
