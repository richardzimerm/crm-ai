import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PipelineView from "@/components/pipeline/PipelineView";
import { Plus } from "lucide-react";

// Sample data - in a real app, this would come from your backend
const defaultPipeline = {
  id: "default",
  name: "Sales Pipeline",
  stages: ["Lead", "Negotiation", "Proposal", "Contract", "Closed"],
};

const sampleDeals = [
  {
    name: "Project Alpha",
    value: "$25,000",
    company: "TechCorp Solutions",
    stage: "Negotiation",
    probability: "80%",
    nextStep: "Contract review scheduled for next week",
  },
  {
    name: "Beta Enhancement",
    value: "$15,000",
    company: "MarketPro Inc",
    stage: "Proposal",
    probability: "60%",
    nextStep: "Follow up on technical requirements",
  },
  {
    name: "Gamma Integration",
    value: "$35,000",
    company: "IndustryTech",
    stage: "Contract",
    probability: "90%",
    nextStep: "Executive presentation scheduled",
  },
  {
    name: "Delta Project",
    value: "$50,000",
    company: "MegaCorp",
    stage: "Lead",
    probability: "40%",
    nextStep: "Initial meeting scheduled",
  },
];

const Deals = () => {
  const [pipelines, setPipelines] = useState([defaultPipeline]);
  const [selectedPipeline, setSelectedPipeline] = useState(defaultPipeline);
  const [newPipelineName, setNewPipelineName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreatePipeline = () => {
    if (newPipelineName.trim()) {
      const newPipeline = {
        id: `pipeline-${pipelines.length + 1}`,
        name: newPipelineName,
        stages: ["Lead", "Negotiation", "Proposal", "Contract", "Closed"], // Default stages
      };
      setPipelines([...pipelines, newPipeline]);
      setNewPipelineName("");
      setIsDialogOpen(false);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Deals</h1>
            <p className="text-muted-foreground">
              Manage your deals and pipelines
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Pipeline
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Pipeline</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Pipeline Name</Label>
                  <Input
                    id="name"
                    value={newPipelineName}
                    onChange={(e) => setNewPipelineName(e.target.value)}
                    placeholder="Enter pipeline name..."
                  />
                </div>
                <Button onClick={handleCreatePipeline}>Create Pipeline</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            {pipelines.map((pipeline) => (
              <Button
                key={pipeline.id}
                variant={selectedPipeline.id === pipeline.id ? "default" : "outline"}
                onClick={() => setSelectedPipeline(pipeline)}
              >
                {pipeline.name}
              </Button>
            ))}
          </div>

          <PipelineView pipeline={selectedPipeline} deals={sampleDeals} />
        </div>
      </div>
    </Layout>
  );
};

export default Deals;