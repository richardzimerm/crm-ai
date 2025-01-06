import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import PipelineStage from "./PipelineStage";

interface Pipeline {
  id: string;
  name: string;
  stages: string[];
}

interface Deal {
  name: string;
  value: string;
  company: string;
  stage: string;
  probability: string;
  nextStep: string;
}

interface PipelineViewProps {
  pipeline: Pipeline;
  deals: Deal[];
}

const PipelineView = ({ pipeline, deals }: PipelineViewProps) => {
  const dealsByStage = pipeline.stages.reduce((acc, stage) => {
    acc[stage] = deals.filter((deal) => deal.stage === stage);
    return acc;
  }, {} as Record<string, Deal[]>);

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex p-4 gap-4">
        {pipeline.stages.map((stage) => (
          <PipelineStage
            key={stage}
            stageName={stage}
            deals={dealsByStage[stage] || []}
          />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default PipelineView;