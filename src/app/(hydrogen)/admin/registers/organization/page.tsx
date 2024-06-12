import Register from '@/app/shared/register';

import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Customer Register'),
};

export default function Admin() {
  return <Register />;
}
