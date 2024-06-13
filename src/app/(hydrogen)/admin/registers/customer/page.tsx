import CustomerRegister from '@/app/shared/admin/dashboard/tables/customer-register';
import Register from '@/app/shared/registers/individual';
import CustomersPage from '@/app/shared/registers/customers';

import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Customer Register'),
};

export default function CustomerPage() {
  return <CustomersPage />;
}
