import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  availability: yup.boolean().required(),
  user_id: yup.string().nullable().required(),
  marketplace_id: yup.string().nullable().required(),
});
