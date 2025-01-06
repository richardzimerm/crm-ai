import React from "react";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { DollarSign } from "lucide-react";

interface Deal {
  name: string;
  value: string;
  company: string;
  stage: string;
  probability: string;
  nextStep: string;
}

interface PipelineStageProps {
  stageName: string;
  deals: Deal[];
}

const PipelineStage = ({ stageName, deals }: PipelineStageProps) => {
  return (
    <div className="min-w-[250px]">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{stageName}</h3>
        <span className="text-sm text-muted-foreground">
          {deals.length} {deals.length === 1 ? "deal" : "deals"}
        </span>
      </div>
      <div className="space-y-3">
        {deals.map((deal) => (
          <HoverCard key={deal.name}>
            <HoverCardTrigger asChild>
              <Card className="p-4 cursor-pointer hover:bg-accent transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium">{deal.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {deal.value}
                    </p>
                  </div>
                </div>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">{deal.name}</h4>
                <p className="text-sm font-medium">{deal.company}</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Value: {deal.value}</span>
                  <span>Probability: {deal.probability}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Next Step: {deal.nextStep}
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default PipelineStage;