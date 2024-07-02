import { z } from 'zod';
import { messages } from '@/config/messages';
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from '@/utils/validators/common-rules';

// form zod validation schema
// export const signUpFormSchema = z.object({
//   firstName: z.string().min(1, { message: messages.firstNameRequired }),
//   lastName: z.string().min(1, { message: messages.lastNameRequired }),
//   email: validateEmail,
//   password: validatePassword,
//   confirmPassword: validateConfirmPassword,
//   skill: z.string().min(1, { message: messages.skillIsRequired}),
//   phoneNo: z.string().min(1, { message: messages.phoneNumberIsRequired }),
//   idNo: z.string().min(1, { message: messages.idNoIsRequired }),
//   gender: z.string().min(1, { message: messages.genderIsRequired }),
//   dob: z.string().min(1, { message: messages.dobIsRequired }),
//   country: z.string().min(1, { message: messages.countryIsRequired }),
//   county: z.string().min(1, { message: messages.countyIsRequired }),
//   subCounty: z.string().min(1, { message: messages.subCountyIsRequired }),
//   estate: z.string().min(1, { message: messages.estateIsRequired }),
//   accountVerification: z.string().min(1, { message: messages.accountVerificationIsRequired }),
//   termsAndConditions: z.boolean(),
//   privacyPolicy: z.boolean(),
// });

export const customerSignUpFormSchema = z.object({
  firstName: z.string().min(1, { message: messages.firstNameRequired }),
  lastName: z.string().min(1, { message: messages.lastNameRequired }),
  email: validateEmail,
  password: validatePassword,
  confirmPassword: validateConfirmPassword,
  type: z.string().min(1, { message: messages.typeIsRequired }),
  organizationName: z
    .string()
    .min(1, { message: messages.organizationIsRequired }),
  phoneNo: z.string().min(1, { message: messages.phoneNumberIsRequired }),
  // idNo: z.string().min(1, { message: messages.idNoIsRequired }),
  // gender: z.string().min(1, { message: messages.genderIsRequired }),
  dob: z.string().min(1, { message: messages.dobIsRequired }),
  country: z.string().min(1, { message: messages.countryIsRequired }),
  county: z.string().min(1, { message: messages.countyIsRequired }),
  subCounty: z.string().min(1, { message: messages.subCountyIsRequired }),
  estate: z.string().min(1, { message: messages.estateIsRequired }),
  accountVerification: z
    .string()
    .min(1, { message: messages.accountVerificationIsRequired }),
  termsAndConditions: z.boolean(),
  privacyPolicy: z.boolean(),
});

// generate form types from zod validation schema
// export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
export type CustomerSignUpFormSchema = z.infer<typeof customerSignUpFormSchema>;
