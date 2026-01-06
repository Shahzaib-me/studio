
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const notifications = [
    {
        asset: 'Child-01',
        message: 'Left School Zone',
        type: 'SOS',
        typeVariant: 'destructive',
        time: '2m ago',
    },
    {
        asset: 'Van-03',
        message: 'Speeding Alert',
        type: 'Warning',
        typeVariant: 'outline',
        time: '10m ago',
    },
    {
        asset: 'Cow-112',
        message: 'Low Battery',
        type: 'Info',
        typeVariant: 'secondary',
        time: '30m ago',
    },
    {
        asset: 'Child-02',
        message: 'Entered Home Safe Zone',
        type: 'Safe',
        typeVariant: 'default',
        time: '1h ago',
    },
    {
        asset: 'Truck-A1',
        message: 'Geofence Breach on Route 66',
        type: 'Alert',
        typeVariant: 'destructive',
        time: '2h ago',
    },
    {
        asset: 'Child-01',
        message: 'SOS Alert manually triggered',
        type: 'SOS',
        typeVariant: 'destructive',
        time: '3h ago',
    },
    {
        asset: 'Herd-03',
        message: 'Device disconnected',
        type: 'Warning',
        typeVariant: 'outline',
        time: '5h ago',
    }
];


export default function NotificationsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Notifications</CardTitle>
        <CardDescription>View and manage all your recent alerts.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notifications.map((notification, index) => (
                <TableRow key={index}>
                    <TableCell>
                        <div className="font-medium">{notification.asset}</div>
                    </TableCell>
                    <TableCell>{notification.message}</TableCell>
                    <TableCell>
                        <Badge variant={notification.typeVariant as any}>{notification.type}</Badge>
                    </TableCell>
                    <TableCell className="text-right">{notification.time}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
