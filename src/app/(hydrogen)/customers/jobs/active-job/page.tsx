import AdminDashboard from '@/app/shared/admin/dashboard';
import ActiveJobsTable from '@/app/shared/tables/active-jobs';
import CompleteJobsTable from '@/app/shared/tables/complete-jobs';
import RequisitionsTable from '@/app/shared/tables/requisitions';

import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Admin'),
};

export default function CompleteJobsPage() {
  return (
    <ActiveJobsTable className="relative @container  @4xl:col-span-2 @7xl:col-span-12" />
  );
}
