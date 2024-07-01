import AdminDashboard from '@/app/shared/admin/dashboard';
import ActiveJobDetailsCard from '@/app/shared/customers/requisitions/cards/active-job';
import CompleteJobsTable from '@/app/shared/tables/complete-jobs';
import RequisitionsTable from '@/app/shared/tables/requisitions';

import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Admin'),
};

export default function ActiveJobsPage() {
  return <ActiveJobDetailsCard />;
}
