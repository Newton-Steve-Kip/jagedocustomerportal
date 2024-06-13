import Register from '@/app/shared/registers/individual';
import OrganizationPage from '@/app/shared/registers/organization';

import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Customer Register'),
};

export default function OrgPage() {
  return <OrganizationPage />;
}
