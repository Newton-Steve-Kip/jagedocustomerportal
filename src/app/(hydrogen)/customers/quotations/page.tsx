import AdminDashboard from '@/app/shared/admin/dashboard';
import QuotationsTable from '@/app/shared/tables/quotations';
import QuotationReports from '@/app/shared/tables/quotations';
import RequisitionsTable from '@/app/shared/tables/requisitions';

import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Admin'),
};

export default function Admin() {
  return (
    <QuotationsTable className="relative @container  @4xl:col-span-2 @7xl:col-span-12" />
  );
}
