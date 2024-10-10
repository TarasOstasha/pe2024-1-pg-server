const yup = require('yup');

module.exports.CREATE_USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .min(2)
    .max(50)
    .matches(/^[A-Z][a-z]{1,49}$/, 'Name must starts with capital letter')
    .required(),
  lastName: yup
    .string()
    .min(2)
    .max(50)
    .matches(/^[A-Z][a-z]{1,49}$/, 'Name must starts with capital letter')
    .required(),
  email: yup.string().email(),
  tel: yup
    .string()
    .matches(/^\+380\d{9}$/)
    .required(),
});

module.exports.CREATE_PHONE_VALIDATION_SCHEMA = yup.object({
  brand: yup
    .string()
    .min(2)
    .max(50)
    .matches(/^[A-Z][a-zA-Z0-9\s]{1,49}$/, 'Brand must start with a capital letter and only contain letters, numbers, and spaces')
    .required(),
  model: yup
    .string()
    .min(2)
    .max(100)
    .required(),
  os: yup
    .string()
    .min(2)
    .max(50)
    .required(),
  screen_size: yup
    .number()
    .min(3)
    .max(10)  
    .required(),
  ram: yup
    .number()
    .min(1) 
    .max(64) 
    .required(),
  storage_capacity: yup
    .number()
    .min(8) 
    .max(1024) 
    .required(),
  battery_capacity: yup
    .number()
    .min(1000) 
    .max(10000) 
    .required(),
  camera_megapixels: yup
    .number()
    .min(1) 
    .max(108) 
    .required(),
  price: yup
    .number()
    .min(1)
    .max(10000) 
    .required(),
  release_date: yup
    .date()
    .required(),
  color: yup
    .string()
    .min(3)
    .max(30)
    .matches(/^[A-Za-z\s]+$/, 'Color must only contain letters and spaces')
    .required(),
  is_dual_sim: yup
    .boolean()
    .required(),
});

module.exports.PAGE_VALIDATION_SCHEMA = yup.number().min(1).integer();
module.exports.RESULTS_VALIDATION_SCHEMA = yup
  .number()
  .min(5)
  .max(50)
  .integer();
