import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/commons/page-header';
import { Button } from 'rizzui';
import { routes } from '@/config/routes';
import CreateEditProduct from '@/app/shared/admin/product/create-edit';

export const metadata = {
  ...metaObject('Fundi Profile'),
};

const pageHeader = {
  title: 'Fundi Profile Creation',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Service Providers',
    },
    {
      href: routes.eCommerce.products,
      name: 'Fundi',
    },
    {
      name: 'Create profile',
    },
  ],
};

export default function CreateProductPage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <CreateEditProduct />
    </>
  );
}
