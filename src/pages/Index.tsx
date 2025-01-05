import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Users, DollarSign, TrendingUp, Clock } from "lucide-react";

const stats = [
  {
    title: "Total Contacts",
    value: "1,234",
    icon: Users,
    change: "+12%",
    changeType: "positive",
  },
  {
    title: "Revenue",
    value: "$52,000",
    icon: DollarSign,
    change: "+8%",
    changeType: "positive",
  },
  {
    title: "Active Deals",
    value: "24",
    icon: TrendingUp,
    change: "-3%",
    changeType: "negative",
  },
  {
    title: "Recent Activities",
    value: "89",
    icon: Clock,
    change: "+24%",
    changeType: "positive",
  },
];

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground mt-2">
            Here's what's happening with your contacts today.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.title}
              className="p-6 glass-card hover-scale transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <stat.icon className="h-6 w-6 text-muted-foreground" />
                <span
                  className={`text-sm font-medium ${
                    stat.changeType === "positive"
                      ? "text-success"
                      : "text-coral"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 glass-card">
            <h3 className="text-lg font-semibold mb-4">Recent Contacts</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Users className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium">John Doe</h4>
                    <p className="text-sm text-muted-foreground">
                      Added 2 hours ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 glass-card">
            <h3 className="text-lg font-semibold mb-4">Active Deals</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium">Project Alpha</h4>
                      <p className="text-sm text-muted-foreground">$25,000</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-success">
                    In Progress
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;