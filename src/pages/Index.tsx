import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Users, DollarSign, TrendingUp, Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState } from "react";

const stats = [
  {
    title: "Total Contacts",
    value: "1,234",
    icon: Users,
    change: "+12%",
    changeType: "positive",
    summary: "234 new contacts added this month. Most active sectors: Technology and Healthcare.",
  },
  {
    title: "Revenue",
    value: "$52,000",
    icon: DollarSign,
    change: "+8%",
    changeType: "positive",
    summary: "Monthly recurring revenue: $42,000. One-time purchases: $10,000. Top product: Enterprise Plan.",
  },
  {
    title: "Active Deals",
    value: "24",
    icon: TrendingUp,
    change: "-3%",
    changeType: "negative",
    summary: "8 deals in negotiation, 12 in proposal stage, 4 pending closure. Average deal size: $15,000.",
  },
  {
    title: "Recent Activities",
    value: "89",
    icon: Clock,
    change: "+24%",
    changeType: "positive",
    summary: "45 emails sent, 23 meetings scheduled, 15 calls made, 6 proposals sent in the last 7 days.",
  },
];

const Index = () => {
  const [timePeriod, setTimePeriod] = useState("7d");

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Welcome back</h1>
              <p className="text-muted-foreground mt-2">
                Here's what's happening with your contacts today.
              </p>
            </div>
            <Select value={timePeriod} onValueChange={setTimePeriod}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">Last 24 hours</SelectItem>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="12m">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <HoverCard key={stat.title}>
              <HoverCardTrigger asChild>
                <Card className="p-6 glass-card hover-scale transition-all duration-200 cursor-pointer">
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
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">{stat.title} Overview</h4>
                  <p className="text-sm text-muted-foreground">
                    {stat.summary}
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
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