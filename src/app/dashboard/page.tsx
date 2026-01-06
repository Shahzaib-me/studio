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
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Car, Baby, PawPrint, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function Dashboard() {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'map');

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Assets
            </CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,254</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nigran-Tifl</CardTitle>
            <Baby className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+23</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nigran-Anaam</CardTitle>
            <PawPrint className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nigran-Motor</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+658</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Real-Time Map</CardTitle>
            <CardDescription>
              Live location of all your tracked assets.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 rounded-lg overflow-hidden">
            {mapImage && (
              <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                width={1600}
                height={900}
                className="w-full h-[400px] object-cover"
                data-ai-hint={mapImage.imageHint}
              />
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Recent Alerts</CardTitle>
              <CardDescription>
                Critical notifications from your assets.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="#">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Asset</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Child-01</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      Left School Zone
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="destructive">SOS</Badge>
                  </TableCell>
                  <TableCell className="text-right">2m ago</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Van-03</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      Speeding Alert
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Warning</Badge>
                  </TableCell>
                  <TableCell className="text-right">10m ago</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Cow-112</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      Low Battery
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">Info</Badge>
                  </TableCell>
                  <TableCell className="text-right">30m ago</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Child-02</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      Entered Safe Zone
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="default" className="bg-green-600 hover:bg-green-600/80">Safe</Badge>
                  </TableCell>
                  <TableCell className="text-right">1h ago</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Truck-A1</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      Geofence Breach
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="destructive">Alert</Badge>
                  </TableCell>
                  <TableCell className="text-right">2h ago</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
