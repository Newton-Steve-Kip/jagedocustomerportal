import dayjs from 'dayjs';
import JobDetailsCard from './job-details';
import CustomerDetailsCard from '@/app/shared/logistics/dashboard/cutomer-details';
import { Controller, Form } from 'react-hook-form';
import FormGroup from '../../commons/form-group';
import QuillEditor from '@/components/ui/quill-editor';
import CustomTextArea from '../../account-settings/custom-text-area';
import { Card } from '../../file/manager/file-grid/grid';
const thisMonth = dayjs(new Date()).format('MMMM YYYY');

export default function JobDetailsDashboard() {
  return (
    <div className="@container">
      <div className="grid grid-cols-12 gap-6 3xl:gap-8">
        <CustomerDetailsCard className="col-span-full" />
        <JobDetailsCard className="col-span-full" />
      </div>
      <CustomTextArea />
    </div>
  );
}
