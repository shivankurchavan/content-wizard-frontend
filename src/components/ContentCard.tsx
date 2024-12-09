import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ContentForm } from "./ContentForm";
import axios from "axios";

export function ContentCard() {
  const [inputType, setInputType] = useState("blog");
  const [outputType, setOutputType] = useState("tweets");
  const [content, setContent] = useState("");
  const [res, setRes] = useState("");

  const handleGenerate = async () => {
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
      
    } catch (error) {
      console.error("Error while generating content:", error);
    }
  }


  return (
    <Card className="w-full max-w-2xl backdrop-blur-sm bg-white/90 shadow-xl border-purple-100">
      <CardContent className="p-6">
        <ContentForm
          inputType={inputType}
          outputType={outputType}
          content={content}
          onInputTypeChange={setInputType}
          onOutputTypeChange={setOutputType}
          onContentChange={setContent}
          onGenerate={handleGenerate}
        />
        <div>
          <p>output</p>
          <p>{res}</p>
        </div>
      </CardContent>
    </Card>
  );
}