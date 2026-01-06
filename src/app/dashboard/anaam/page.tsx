import { ModulePage } from '@/components/module-page';

const anaamAssets = [
  { id: 'Cow-112', status: 'Active', lastUpdate: '5 mins ago', battery: '78%' },
  { id: 'Sheep-204', status: 'Active', lastUpdate: '25 mins ago', battery: '92%' },
  { id: 'Herd-03', status: 'Inactive', lastUpdate: '5 hours ago', battery: '15%' },
  { id: 'Camel-01', status: 'Active', lastUpdate: '30 mins ago', battery: '88%' },
];

export default function AnaamPage() {
  return (
    <ModulePage
      title="Nigran-Anaam"
      description="Manage and monitor all animal and livestock tracking devices."
      assets={anaamAssets}
    />
  );
}
