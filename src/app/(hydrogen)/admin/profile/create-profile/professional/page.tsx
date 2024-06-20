import Link from 'next/link';
import { metaObject } from '@/config/site.config';
import PageHeader from '@/app/shared/commons/page-header';
import { Button } from 'rizzui';
import { routes } from '@/config/routes';
import CreateEditProduct from '@/app/shared/admin/product/create-edit';
import CreateProfessionalForm from '@/app/shared/admin/profile/create-profile/professional/page';

export const metadata = {
  ...metaObject('Professional Profile'),
};

const pageHeader = {
  title: 'Professional Profile Creation',
  breadcrumb: [
    {
      href: routes.admin.dashboard,
      name: 'Service Providers',
    },
    {
      href: routes.admin.createProfessionalProfile,
      name: 'Fundi',
    },
    {
      name: 'Create profile',
    },
  ],
};

export default function CreateProfessionalPage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <CreateProfessionalForm />
    </>
  );
}
