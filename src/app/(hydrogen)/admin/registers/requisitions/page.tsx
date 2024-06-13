import Requisitions from '@/app/shared/admin/dashboard/tables/requisitions-register';
import RequisitionsPage from '@/app/shared/registers/requisitions';

import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Customer Register'),
};

export default function Admin() {
  return <RequisitionsPage />;
}
