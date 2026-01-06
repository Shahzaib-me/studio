import { ModulePage } from '@/components/module-page';

const motorAssets = [
  { id: 'Van-03', status: 'Active', lastUpdate: '1 min ago', battery: 'N/A' },
  { id: 'Truck-A1', status: 'Alert', lastUpdate: '5 mins ago', battery: 'N/A' },
  { id: 'Car-Personal', status: 'Inactive', lastUpdate: '8 hours ago', battery: 'N/A' },
  { id: 'Fleet-B-07', status: 'Active', lastUpdate: '12 mins ago', battery: 'N/A' },
];

export default function MotorPage() {
  return (
    <ModulePage
      title="Nigran-Motor"
      description="Manage and monitor all vehicle tracking devices."
      assets={motorAssets}
    />
  );
}
