import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import './FeedbackHandlingPage.css';



const FeedbackHandlingPage = (props) => { 
   
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      productType: '',
      acceptedTerms: false,
    },
    //validate,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
        productType: Yup.string()
        .oneOf(
          ['book', 'video', 'PDF-book', 'audio-book'],
          'Invalid Product Type'
          )
        .required('Required'),
      acceptedTerms: Yup.boolean()
        .required('Required')
        .oneOf([true], 'You must accept the terms and conditions.'),
    }),
    onSubmit: (values, {setSubmitting} ) => {
      console.log('form values----',values);
      //alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    },
  });

  return (
    <div className="feedback-handling-page">   
      <p>FeedbackHandlingPage</p>
      <p>Most inputs fields here, such as:</p>
      <p>link to item(in my account)</p>
      <p>item buy day</p>
      <p>price/bonuses of item</p>
      <p>supposed delivery day</p>
      <p>when the bonuses should be booked</p>
      <p>when i sent a feedback</p>
      <p>Also here will be indicators like:</p>
      <p>did i received the bonus?</p>
      <p>list of items which will be delivered in the next 1-2 days, to not forget to send feedback</p>
    <form onSubmit={formik.handleSubmit}>
      <br/><br/>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        placeholder="Steven"
      />
      <br/><br/>
      {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        placeholder="Seagal"
      />
      <br/><br/>
      {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder="StevenSeagal@gmail.com"
      />
      <br/><br/>
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        placeholder="xxxxxxxx"
      />
      <br/><br/>
      {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

      <label htmlFor="productType">Product Type</label>
      <select
        id="productType"
        name="productType"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.productType}
      >
        <option value="">Select Product Type</option>
        <option value="book">book</option>
        <option value="video">video</option>
        <option value="PDF-book">PDF-book</option>
        <option value="audio-book">audio-book</option>
      </select>
      
      <br/><br/>
      {formik.touched.productType && formik.errors.productType ? <div>{formik.errors.productType}</div> : null}

      <input
        id="acceptedTerms"
        name="acceptedTerms"
        type="checkbox"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={String(formik.values.acceptedTerms)}
      />
      <label htmlFor="acceptedTerms">I accept the terms and conditions</label>
      <br/><br/>
      {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? <div>{formik.errors.acceptedTerms}</div> : null}


      <button type="submit">Submit</button>
      <br/><br/>
      <hr/>
      <br/><br/>
    </form>
    </div>
  )
}

export default FeedbackHandlingPage;
