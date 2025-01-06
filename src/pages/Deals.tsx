import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { DollarSign } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const deals = [
  {
    name: "Enterprise Solution Package",
    value: "$125,000",
    company: "TechCorp Solutions",
    stage: "Negotiation",
    probability: "80%",
    nextStep: "Contract review scheduled for next week",
    owner: "Sarah Johnson",
    lastActivity: "2 days ago",
    expectedCloseDate: "2024-04-15",
    notes: "Client is particularly interested in the analytics module. Need to prepare detailed ROI analysis.",
  },
  {
    name: "Cloud Migration Project",
    value: "$85,000",
    company: "MarketPro Inc",
    stage: "Proposal",
    probability: "60%",
    nextStep: "Technical requirements review",
    owner: "Michael Chen",
    lastActivity: "1 day ago",
    expectedCloseDate: "2024-05-01",
    notes: "Competing with two other vendors. Our unique security features could be the differentiator.",
  },
  {
    name: "Digital Transformation Initiative",
    value: "$250,000",
    company: "IndustryTech",
    stage: "Final Review",
    probability: "90%",
    nextStep: "Executive presentation",
    owner: "Emily Rodriguez",
    lastActivity: "3 hours ago",
    expectedCloseDate: "2024-03-30",
    notes: "Board approval pending. Previous implementation success stories have been well received.",
  },
  {
    name: "Software Integration Project",
    value: "$75,000",
    company: "Global Services Ltd",
    stage: "Discovery",
    probability: "40%",
    nextStep: "Solution demonstration",
    owner: "David Kim",
    lastActivity: "5 days ago",
    expectedCloseDate: "2024-06-15",
    notes: "Budget constraints might be an issue. Preparing scaled-down alternative proposal.",
  },
];

const Deals = () => {
  const [timePeriod, setTimePeriod] = useState("all");

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Deals Pipeline</h1>
            <p className="text-muted-foreground mt-2">
              Track and manage your active deals and opportunities.
            </p>
          </div>
          <Select value={timePeriod} onValueChange={setTimePeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Deals</SelectItem>
              <SelectItem value="thisMonth">This Month</SelectItem>
              <SelectItem value="thisQuarter">This Quarter</SelectItem>
              <SelectItem value="thisYear">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6">
          {deals.map((deal) => (
            <HoverCard key={deal.name}>
              <HoverCardTrigger asChild>
                <Card className="p-6 hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium">{deal.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {deal.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{deal.value}</p>
                      <p className="text-sm text-success">{deal.stage}</p>
                    </div>
                  </div>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-96">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">{deal.name}</h4>
                    <p className="text-sm text-muted-foreground">{deal.company}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="font-medium">Value:</p>
                      <p className="text-muted-foreground">{deal.value}</p>
                    </div>
                    <div>
                      <p className="font-medium">Probability:</p>
                      <p className="text-muted-foreground">{deal.probability}</p>
                    </div>
                    <div>
                      <p className="font-medium">Owner:</p>
                      <p className="text-muted-foreground">{deal.owner}</p>
                    </div>
                    <div>
                      <p className="font-medium">Last Activity:</p>
                      <p className="text-muted-foreground">{deal.lastActivity}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Next Step:</p>
                    <p className="text-sm text-muted-foreground">{deal.nextStep}</p>
                  </div>
                  <div>
                    <p className="font-medium">Notes:</p>
                    <p className="text-sm text-muted-foreground">{deal.notes}</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Deals;