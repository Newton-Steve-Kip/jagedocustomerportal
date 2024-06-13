'use client';

import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import { SubmitHandler, Controller } from 'react-hook-form';
import { PiClock, PiEnvelopeSimple } from 'react-icons/pi';
import { Form } from '@/components/ui/form';
import { Loader, Text, Input } from 'rizzui';
import FormGroup from '@/app/shared/commons/form-group';
import FormFooter from '@/components/form-footer';
import {
  defaultValues,
  personalInfoFormSchema,
  PersonalInfoFormTypes,
} from '@/utils/validators/personal-info.schema';
import UploadZone from '@/components/ui/file-upload/upload-zone';
import { countries, roles, timezones } from '@/data/forms/my-details';
import AvatarUpload from '@/components/ui/file-upload/avatar-upload';

const Select = dynamic(() => import('rizzui').then((mod) => mod.Select), {
  ssr: false,
  loading: () => (
    <div className="grid h-10 place-content-center">
      <Loader variant="spinner" />
    </div>
  ),
});

const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
  ssr: false,
});

export default function ProfileCreation() {
  const onSubmit: SubmitHandler<PersonalInfoFormTypes> = (data) => {
    toast.success(<Text as="b">Successfully added!</Text>);
    console.log('Profile settings data ->', {
      ...data,
    });
  };

  return (
    <Form<PersonalInfoFormTypes>
      validationSchema={personalInfoFormSchema}
      // resetValues={reset}
      onSubmit={onSubmit}
      className="@container"
      useFormProps={{
        mode: 'onChange',
        defaultValues,
      }}
    >
      {({ register, control, setValue, getValues, formState: { errors } }) => {
        return (
          <>
            <FormGroup
              title="Fundi Profile Creation"
              description="Provide  Personal and Required Details below"
              className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
            />

            <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">
              <FormGroup
                title="Personal Details"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Input
                  label="Company Name"
                  placeholder="Company Name"
                  {...register('company_name')}
                  error={errors.company_name?.message}
                  className="flex-grow"
                />
                <Input
                  label="Company Email Address"
                  placeholder="Company Email Address"
                  {...register('company_email')}
                  error={errors.company_email?.message}
                  className="flex-grow"
                />

                <Input
                  label="Company Number"
                  placeholder="Company Number"
                  {...register('company_number')}
                  error={errors.company_number?.message}
                  className="flex-grow"
                />

                <Input
                  label="Contact Person First Name"
                  placeholder="Contact Person First Name"
                  {...register('contact_first_name')}
                  error={errors.contact_first_name?.message}
                  className="flex-grow"
                />

                <Input
                  label="Contact Person Last Name"
                  placeholder="Contact Person Last Name"
                  {...register('contact_last_name')}
                  error={errors.contact_last_name?.message}
                  className="flex-grow"
                />

                <Input
                  label="County"
                  placeholder="County"
                  {...register('county')}
                  error={errors.county?.message}
                  className="flex-grow"
                />

                <Input
                  label="Sub County"
                  placeholder="Sub County"
                  {...register('sub_county')}
                  error={errors.sub_county?.message}
                  className="flex-grow"
                />

                <Input
                  label="Estate"
                  placeholder="Estate"
                  {...register('estate')}
                  error={errors.estate?.message}
                  className="flex-grow"
                />
              </FormGroup>

              <FormGroup
                title="Required details"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Controller
                  control={control}
                  name="role"
                  render={({ field: { value, onChange } }) => (
                    <Select
                      label="Category*"
                      dropdownClassName="!z-10"
                      inPortal={false}
                      placeholder="Select Category*"
                      options={roles}
                      onChange={onChange}
                      value={value}
                      className="flex-grow"
                      getOptionValue={(option) => option.value}
                      displayValue={(selected) =>
                        roles?.find((r) => r.value === selected)?.label ?? ''
                      }
                      error={errors?.role?.message as string}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="role"
                  render={({ field: { value, onChange } }) => (
                    <Select
                      label="Sub Category*"
                      dropdownClassName="!z-10"
                      inPortal={false}
                      placeholder="Select Sub Category*"
                      options={roles}
                      onChange={onChange}
                      value={value}
                      className="flex-grow"
                      getOptionValue={(option) => option.value}
                      displayValue={(selected) =>
                        roles?.find((r) => r.value === selected)?.label ?? ''
                      }
                      error={errors?.role?.message as string}
                    />
                  )}
                />
                <div className="flex-grow">
                  <UploadZone
                    label="PIN Number*"
                    name="portfolios"
                    getValues={getValues}
                    setValue={setValue}
                    error={errors?.portfolios?.message as string}
                  />
                </div>{' '}
                <div className="flex-grow">
                  <UploadZone
                    label="Company Profile*"
                    name="portfolios"
                    getValues={getValues}
                    setValue={setValue}
                    error={errors?.portfolios?.message as string}
                  />
                </div>
                <div className="flex-grow">
                  <UploadZone
                    label="Business Registration*"
                    name="portfolios"
                    getValues={getValues}
                    setValue={setValue}
                    error={errors?.portfolios?.message as string}
                  />
                </div>
                <div className="flex-grow">
                  <UploadZone
                    label="Portfolio*"
                    name="portfolios"
                    getValues={getValues}
                    setValue={setValue}
                    error={errors?.portfolios?.message as string}
                  />
                </div>
                <div className="@3xl:col-span-2">
                  <UploadZone
                    label="NCA Licence*"
                    name="portfolios"
                    getValues={getValues}
                    setValue={setValue}
                    error={errors?.portfolios?.message as string}
                  />
                </div>
              </FormGroup>

              {/* bio formgroup */}
              {/* <FormGroup
                title="Bio"
                className="pt-7 @2xl:pt-9 @3xl:grid-cols-12 @3xl:pt-11"
              >
                <Controller
                  control={control}
                  name="bio"
                  render={({ field: { onChange, value } }) => (
                    <QuillEditor
                      value={value}
                      onChange={onChange}
                      className="@3xl:col-span-2 [&>.ql-container_.ql-editor]:min-h-[100px]"
                      labelClassName="font-medium text-gray-700 dark:text-gray-600 mb-1.5"
                    />
                  )}
                />
              </FormGroup> */}
            </div>

            <FormFooter
              // isLoading={isLoading}
              altBtnText="Cancel"
              submitBtnText="Save"
            />
          </>
        );
      }}
    </Form>
  );
}
