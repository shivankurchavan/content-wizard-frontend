import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ContentForm } from "./ContentForm";
import axios from "axios";
import { Label } from "@/components/ui/label";

export function ContentCard() {
  const [inputType, setInputType] = useState("blog");
  const [outputType, setOutputType] = useState("tweets");
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");
  const [res, setRes] = useState("");

  const handleGenerate = async () => {
    setIsLoading(true);
    console.log("Generating content...", { inputType, outputType, content });

    // Build the request payload dynamically
    const payload: { outputType: string; blogContent?: string; script?: string } = {
      outputType,
    };

    // Add inputType-specific content
    switch (inputType) {
      case "blog":
        payload.blogContent = content;
        break;
      default:
        payload.script = content; // Fallback for other input types
    }
    try {
      // Send the POST request with the constructed payload
      const response = await axios.post(
        "https://contentwizard.shivankurchavan.workers.dev/api/v1/generate/response",
          payload,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setRes(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error while generating content:", error);
      setIsLoading(false);
    }
  }


  return (
    <Card className="w-full max-w-2xl backdrop-blur-sm bg-white/90 shadow-xl border-purple-100">
      <CardContent className="p-6">
        <ContentForm
          inputType={inputType}
          outputType={outputType}
          content={content}
          isLoading={isLoading}
          onInputTypeChange={setInputType}
          onOutputTypeChange={setOutputType}
          onContentChange={setContent}
          onGenerate={handleGenerate}
        />
        
          <div className="space-y-2 py-2">
            <Label htmlFor="output" className="text-base font-medium">
              Your Output
            </Label>
            <div
              id="output"
              className="min-h-[20px] h-auto p-2 border rounded bg-gray-100 text-sm"
              style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
              {res || "Your Output will be shown here."}
            </div>
          </div>
      </CardContent>
    </Card>
  );
}