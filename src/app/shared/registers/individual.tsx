import Image from 'next/image';

import WelcomeBanner from '@/components/banners/welcome';

import welcomeImg from '@public/shop-illustration.png';
import HandWaveIcon from '@/components/icons/hand-wave';
import RegisterTable from '../ecommerce/dashboard/register';

export default function IndividualPage() {
  return (
    <div className="@container">
      <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">
        <WelcomeBanner
          title={
            <>
              Individuals Register <br />{' '}
            </>
          }
          // description={
          //   'Here’s What happening on your store today. See the statistics at once.'
          // }
          contentClassName="@2xl:max-w-[calc(100%-340px)]"
          className="border border-none border-muted bg-gray-0 pb-4 @4xl:col-span-2 @7xl:col-span-8 dark:bg-gray-100/30 lg:pb-4"
        ></WelcomeBanner>

        <RegisterTable className="relative @4xl:col-span-2 @7xl:col-span-12" />
      </div>
    </div>
  );
}
