import { ModulePage } from '@/components/module-page';

const tiflAssets = [
  { id: 'Child-01', status: 'Alert', lastUpdate: '2 mins ago', battery: '95%' },
  { id: 'Child-02', status: 'Active', lastUpdate: '15 mins ago', battery: '80%' },
  { id: 'Child-03', status: 'Active', lastUpdate: '1 hour ago', battery: '99%' },
  { id: 'Child-04', status: 'Inactive', lastUpdate: '3 hours ago', battery: '20%' },
];

export default function TiflPage() {
  return (
    <ModulePage
      title="Nigran-Tifl"
      description="Manage and monitor all child tracking devices."
      assets={tiflAssets}
    />
  );
}
