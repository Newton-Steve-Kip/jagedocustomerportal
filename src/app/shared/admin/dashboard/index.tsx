import AdminCards from './admin-cards';
import SpType from './spType';
import SummaryWidget from './summary';
import JobsWidget from '@/app/shared/admin/dashboard/promotional-sales';
import SummaryWidgetCustomers from './summaryCustomer';
import StatusCard from './status-card';
import WalletCard from './wallet';
import PendingInvoiceCard from './pendinginvoice';

export default function AdminDashboard() {
  const items = [
    { text: 'Repair broken pipe', subText: 'Yesterday' },
    { text: 'Construction materials needed', subText: '2h ago' },
    { text: 'Fix my bathtub', subText: 'Tomorrow at 10:00 AM' },
    { text: 'Paint my 3 bedroom house', subText: 'In 3 days' },
    { text: 'Repair broken pipe', subText: 'Yesterday' },
    { text: 'Construction materials needed', subText: '2h ago' },
    { text: 'Fix my bathtub', subText: 'Tomorrow at 10:00 AM' },
    { text: 'Paint my 3 bedroom house', subText: 'In 3 days' },
    { text: 'Repair broken pipe', subText: 'Yesterday' },
    { text: 'Construction materials needed', subText: '2h ago' },
    { text: 'Fix my bathtub', subText: 'Tomorrow at 10:00 AM' },
    { text: 'Paint my 3 bedroom house', subText: 'In 3 days' },
  ];
  // Wallet data
  const balance = 'KSH 1,234.56';

  // Pending invoice data
  const invoiceId = 'INV123456';
  const amount = 1234.56;
  const dueDate = '2024-06-25';

  return (
    <div className="@container">
      <div className="grid grid-cols-1 gap-4 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">

        <SpType className="py-5 @2xl:grid-cols-3  @3xl:gap-6 @4xl:col-span-2 @4xl:grid-cols-4 @7xl:col-span-8" />
        <SummaryWidgetCustomers className="h-[150px] @sm:h-[320px] @7xl:col-span-4 @7xl:col-start-9 @7xl:row-start-1 @7xl:row-end-3 @7xl:h-full" />
        <StatusCard
          className="h-[150px] @sm:h-[320px] @4xl:col-start-2 @7xl:col-span-4 @7xl:col-start-auto @7xl:row-start-auto"
          title="Status Updates"
          items={items}
          seeAllText="See All"/>
        <WalletCard className="h-[150px] @sm:h-[320px] @7xl:col-span-4 @7xl:col-start-9 @7xl:row-start-1 @7xl:row-end-3 @7xl:h-full" balance={balance} />
        <PendingInvoiceCard
          className="h-[150px] @sm:h-[320px] @4xl:col-start-2 @7xl:col-span-4 @7xl:col-start-auto @7xl:row-start-auto"
          invoiceId={invoiceId}
          amount={amount}
          dueDate={dueDate}
          />
      </div>
    </div>
  );
}

{
  /* <Link href={routes.eCommerce.createProduct} className="inline-flex">
            <Button as="span" className="h-[38px] shadow md:h-10">
              <PiPlusBold className="me-1 h-4 w-4" /> Add Product
            </Button>
          </Link> */
}
