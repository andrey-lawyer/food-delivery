import * as yup from 'yup';

const nameRegexEmail =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const nameRegexPhone = /^[\+]{0,1}380([0-9]{9})$/;

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
    .email('Invalid E-mail')
    .matches(nameRegexEmail, 'E-mail is not valid'),
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
