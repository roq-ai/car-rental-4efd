import * as yup from 'yup';

export const purchaseValidationSchema = yup.object().shape({
  purchase_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
