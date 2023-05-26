import * as yup from 'yup';

const nameRegexPhone = /^[+]{0,1}380([0-9]{9})$/;

export let schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name is too short')
    .max(60, 'Name is too long')
    .required('Name is required'),
  email: yup
    .string()
    .required('E-mail is required')
    .min(2, 'E-mail is too short')
    .max(100, 'E-mail is too long')
    .email('Invalid E-mail'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(nameRegexPhone, 'Phone is not valid'),
  address: yup
    .string()
    .min(2, 'address is too short')
    .max(80, 'Address is too long')
    .required('Address is required'),
});
