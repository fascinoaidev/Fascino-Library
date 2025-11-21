import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Video } from "lucide-react";
import { toast } from "sonner";

interface Highlight {
  id: string;
  title: string;
  thumbnail: string;
}

export default function Highlights() {
  const [highlights, setHighlights] = useState<Highlight[]>([
    { id: "1", title: "Product Demo", thumbnail: "" },
    { id: "2", title: "Behind the Scenes", thumbnail: "" },
  ]);

  const handleDelete = (id: string) => {
    setHighlights(highlights.filter((h) => h.id !== id));
    toast.success("Highlight deleted");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Highlights</h1>
          <p className="mt-2 text-muted-foreground">
            Upload and manage your video highlights
          </p>
        </div>

        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Highlight
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((highlight) => (
          <Card key={highlight.id} className="shadow-card transition-smooth hover:shadow-elevated">
            <CardContent className="p-6">
              <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gradient-subtle">
                <Video className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{highlight.title}</h3>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(highlight.id)}
                  className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-card">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Preview Carousel</h3>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {highlights.map((highlight) => (
              <div
                key={highlight.id}
                className="flex-none w-40 h-24 rounded-lg bg-gradient-subtle flex items-center justify-center border border-border"
              >
                <Video className="h-8 w-8 text-muted-foreground" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
