import FundisPage from '@/app/shared/registers/fundis';

import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Customer Register'),
};

export default function AddToServiceProvidersPage() {
  return <FundisPage />;
}
