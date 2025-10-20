import EmployeesStat from "./components/employees/employees-stat";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TeamsStats from "./components/teams/teams-stat";

export default function DashboardPage() {
  return (
    <>
      <Tabs defaultValue="employees">
        <TabsList className="mb-4">
          <TabsTrigger value="employees">Employees stats</TabsTrigger>
          <TabsTrigger value="teams">Teams stats</TabsTrigger>
        </TabsList>
        <TabsContent value="employees">
          <EmployeesStat />
        </TabsContent>
        <TabsContent value="teams">
          <TeamsStats />
        </TabsContent>
      </Tabs>
    </>
  );
}
