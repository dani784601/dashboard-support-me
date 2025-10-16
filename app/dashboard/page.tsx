import EmployeesStat from "./components/employees-stat";
``;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
        <TabsContent value="teams">teams stats</TabsContent>
      </Tabs>
    </>
  );
}
