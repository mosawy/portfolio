import { Button } from "@/components/ui/button";

const Resume = () => {
  const resumeUrl = "/MohamedElsawyCV.pdf";
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Resume</h1>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <a href={resumeUrl} download>
                Download PDF
              </a>
            </Button>
            <Button asChild>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Open in New Tab
              </a>
            </Button>
          </div>
        </div>
        <div className="rounded-xl border border-border overflow-hidden bg-card shadow-sm">
          <object data={resumeUrl} type="application/pdf" className="w-full" style={{ height: "80vh" }}>
            <p className="p-6 text-muted-foreground">
              Your browser couldn’t display the PDF. You can
              {" "}
              <a className="underline" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                open it in a new tab
              </a>
              {" "}
              or download it.
            </p>
          </object>
        </div>
      </div>
    </div>
  );
};

export default Resume;
