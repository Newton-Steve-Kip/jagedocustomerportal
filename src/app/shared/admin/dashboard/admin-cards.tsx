'use client';

import MetricCard from '@/components/cards/metric-card';
import { Text } from 'rizzui';
import cn from '@/utils/class-names';
import {
  PiCaretDoubleUpDuotone,
  PiCaretDoubleDownDuotone,
  PiGiftDuotone,
  PiBankDuotone,
  PiChartPieSliceDuotone,
  PiEnvelopeDuotone,
  PiBasketDuotone,
  PiShoppingBagDuotone,
  PiWrenchDuotone,
  PiFolderDuotone,
  PiTrolleyDuotone,
  PiMoneyDuotone,
} from 'react-icons/pi';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import CategoriesCard from '@/components/cards/categories-card';
import { title } from 'process';
import { routes } from '@/config/routes';
import Link from 'next/link';

const orderData = [
  {
    day: 'Sunday',
    sale: 4000,
    cost: 2400,
  },
  {
    day: 'Monday',
    sale: 3000,
    cost: 1398,
  },
  {
    day: 'Tuesday',
    sale: 2000,
    cost: 9800,
  },
  {
    day: 'Wednesday',
    sale: 2780,
    cost: 3908,
  },
  {
    day: 'Thursday',
    sale: 1890,
    cost: 4800,
  },
  {
    day: 'Friday',
    sale: 2390,
    cost: 3800,
  },
  {
    day: 'Saturday',
    sale: 3490,
    cost: 4300,
  },
];

const revenueData = [
  {
    day: 'Sunday',
    sale: 2000,
    cost: 2400,
  },
  {
    day: 'Monday',
    sale: 2800,
    cost: 1398,
  },
  {
    day: 'Tuesday',
    sale: 3500,
    cost: 9800,
  },
  {
    day: 'Wednesday',
    sale: 2780,
    cost: 3908,
  },
  {
    day: 'Thursday',
    sale: 1890,
    cost: 4800,
  },
  {
    day: 'Friday',
    sale: 2390,
    cost: 3800,
  },
  {
    day: 'Saturday',
    sale: 3490,
    cost: 4300,
  },
];

const eComDashboardStatData = [
  {
    id: '1',
    icon: <PiEnvelopeDuotone className="h-6 w-6" />,
    title: 'Projects',
    metric: 'My Projects',
    increased: true,
    decreased: false,
    percentage: '+32.40',
    style: 'text-[#3872FA]',
    fill: '#3872FA',
    chart: orderData,
  },
  {
    id: '2',
    icon: <PiWrenchDuotone className="h-6 w-6" />,
    title: 'Workspace',
    metric: 'My Workspace',
    increased: true,
    decreased: false,
    percentage: '+32.40',
    style: 'text-[#3872FA]',
    fill: '#3872FA',
    chart: orderData,
  },
  {
    id: '3',
    icon: <PiMoneyDuotone className="h-6 w-6" />,
    title: 'Sales Dashboard',
    metric: 'Sales',
    increased: true,
    decreased: false,
    percentage: '+32.40',
    style: 'text-[#3872FA]',
    fill: '#3872FA',
    chart: orderData,
  },
  {
    id: '4',
    icon: <PiTrolleyDuotone className="h-6 w-6" />,
    title: 'Shop Dashboard',
    metric: 'My Shop',
    percentage: '+32.40',
    style: 'text-[#3872FA]',
    fill: '#3872FA',
    chart: orderData,
  },
];

export default function AdminCards({ className }: { className?: string }) {
  return (
    <div
      className={cn('grid grid-cols-1 gap-5 3xl:gap-8 4xl:gap-9', className)}
    >
      {eComDashboardStatData.map((stat) => (
        <Link key={stat.title + stat.id} href={routes.eCommerce.createProduct}>
          <CategoriesCard
            // title={stat.title}
            metric={stat.metric}
            metricClassName="lg:text-[22px]"
            icon={stat.icon}
            iconClassName={cn(
              '[&>svg]:w-10 [&>svg]:h-8 lg:[&>svg]:w-11 lg:[&>svg]:h-9 w-auto h-auto p-0 bg-transparent -mx-1.5',
              stat.id === '1' &&
                '[&>svg]:w-9 [&>svg]:h-7 lg:[&>svg]:w-[42px] lg:[&>svg]:h-[34px]',
              stat.style
            )}
            // chart={
            //   <ResponsiveContainer width="100%" height="100%">
            //     <BarChart barSize={5} barGap={2} data={stat.chart}>
            //       <Bar dataKey="sale" fill={stat.fill} radius={5} />
            //     </BarChart>
            //   </ResponsiveContainer>
            // }
            chartClassName="hidden @[200px]:flex @[200px]:items-center h-14 w-24"
            className="@container [&>div]:items-center"
          >
            <Text className="mt-5 flex items-center border-t border-dashed border-muted pt-4 leading-none text-gray-500">
              <Text
                as="span"
                className={cn(
                  'me-2 inline-flex items-center font-medium',
                  stat.increased ? 'text-green' : 'text-red'
                )}
              >
                {stat.increased ? (
                  <PiCaretDoubleUpDuotone className="me-1 h-4 w-4" />
                ) : (
                  <PiCaretDoubleDownDuotone className="me-1 h-4 w-4" />
                )}
                {stat.percentage}%
              </Text>
              <Text as="span" className="me-1 hidden @[240px]:inline-flex">
                {stat.increased ? 'Increased' : 'Decreased'}
              </Text>{' '}
            </Text>
          </CategoriesCard>
        </Link>
      ))}
    </div>
  );
}
