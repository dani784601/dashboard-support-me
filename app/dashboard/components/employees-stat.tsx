import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  UserIcon,
  UserCheck2Icon,
  BadgeCheckIcon,
  UserRoundXIcon,
  AlertTriangleIcon,
  PartyPopperIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import cm from "@/public/images/cm.jpg";

export default function EmployeesStat() {
  const totalEmployees = 100;
  const presentEmployees = 80;
  const employeePresentPercentage = (presentEmployees / totalEmployees) * 100;

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Total employees</CardTitle>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <div className="text-5xl font-bold">{totalEmployees}</div>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/employees">View all</Link>
              </Button>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Employees present</CardTitle>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              {employeePresentPercentage > 75 ? (
                <UserCheck2Icon />
              ) : (
                <UserRoundXIcon />
              )}
              <div className="text-5xl font-bold">{presentEmployees}</div>
            </div>
          </CardContent>
          <CardFooter>
            {employeePresentPercentage > 75 ? (
              <span className="text-xs text-green-500 flex gap-1 items-center">
                <BadgeCheckIcon />
                {employeePresentPercentage}% of employees are present
              </span>
            ) : (
              <span className="text-xs text-red-500 flex gap-1 items-center">
                <AlertTriangleIcon />
                Only{employeePresentPercentage}% of employees are present
              </span>
            )}
          </CardFooter>
        </CardHeader>
      </Card>
      <Card className="border-pink-500 flex flex-col">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Employeee of the month</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 items-center">
          <Avatar>
            <Image
              src={cm}
              alt="Employee of the month avatar"
              width={40}
              height={40}
            />
            <AvatarFallback>CM</AvatarFallback>
          </Avatar>
          <span className="text-2xl">Colin Murray</span>
        </CardContent>
        <CardFooter className="mt-auto flex gap-2 items-center text-xs text-muted-foreground">
          <PartyPopperIcon className="text-pink-500" />
          <span>Congratulations, Colin!</span>
        </CardFooter>
      </Card>
    </div>
  );
}
