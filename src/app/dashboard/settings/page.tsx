
'use client';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useUser } from "@/firebase"
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  const { user } = useUser();

  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Profile</CardTitle>
            <CardDescription>
              Manage your account settings and personal information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue={user?.displayName || "Nigran User"} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue={user?.email || "user@nigran.tech"} disabled />
            </div>
             <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="Parent" disabled />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Notifications</CardTitle>
            <CardDescription>
              Choose how you receive alerts from your assets.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                    <Label htmlFor="web-alerts">Web Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                        Receive alerts directly in the web dashboard.
                    </p>
                </div>
                <Switch id="web-alerts" defaultChecked />
            </div>
            <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                        Receive alerts via your registered email address. (Coming Soon)
                    </p>
                </div>
                <Switch id="email-notifications" disabled />
            </div>
            <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                    <Label htmlFor="sms-notifications">SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                        Receive critical alerts via SMS on your phone. (Coming Soon)
                    </p>
                </div>
                <Switch id="sms-notifications" disabled />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Preferences</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
