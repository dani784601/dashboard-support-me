import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UsersIcon, ListChecksIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import cm from "@/public/images/cm.jpg";
import tf from "@/public/images/tf.jpg";
import rl from "@/public/images/rl.jpg";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const teamLeaders = [
  {
    id: 0,
    firstName: "Colin",
    lastName: "Murray",
    avatar: cm,
  },
  {
    id: 1,
    firstName: "Tom",
    lastName: "Phillips",
  },
  {
    id: 2,
    firstName: "Liam",
    lastName: "Fuentes",
  },
  {
    id: 3,
    firstName: "Tina",
    lastName: "Fey",
    avatar: tf,
  },
  {
    id: 4,
    firstName: "Katie",
    lastName: "Johnson",
  },
  {
    id: 5,
    firstName: "Tina",
    lastName: "Jones",
  },
  {
    id: 6,
    firstName: "Amy",
    lastName: "Adams",
  },
  {
    id: 7,
    firstName: "Ryan",
    lastName: "Lopez",
    avatar: rl,
  },
  {
    id: 8,
    firstName: "Jenny",
    lastName: "Jones",
  },
];

export default function TeamsStats() {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total teams</CardTitle>
            <CardContent className="flex justify-between items-center">
              <div className="flex gap-2">
                <UsersIcon />
                <div className="text-5xl font-bold">8</div>
              </div>
              <div>
                <Button size="xs" asChild>
                  <Link href="/dashboard/teams">View all</Link>
                </Button>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
            <CardContent className="flex flex-wrap gap-2">
              {teamLeaders.map((teamLeaders) => (
                <TooltipProvider key={teamLeaders.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Avatar>
                        {!!teamLeaders.avatar && (
                          <Image
                            src={teamLeaders.avatar}
                            alt={`${teamLeaders.firstName} ${teamLeaders.lastName} avatar`}
                          />
                        )}
                        <AvatarFallback>
                          {teamLeaders.firstName.at(0)}
                          {teamLeaders.lastName.at(0)}
                        </AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      {teamLeaders.firstName} {teamLeaders.lastName}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Team distribution</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center"></CardContent>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center text-lg">
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">line graph</CardContent>
      </Card>
    </>
  );
}
