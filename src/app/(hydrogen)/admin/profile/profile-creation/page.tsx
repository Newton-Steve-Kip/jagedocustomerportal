import { metaObject } from '@/config/site.config';
import ProfileCreation from '@/app/shared/admin/profile/profile-creation';

export const metadata = {
  ...metaObject('Profile Settings'),
};

export default function ProfileSettingsFormPage() {
  return <ProfileCreation />;
}
