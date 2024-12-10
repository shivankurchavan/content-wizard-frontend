import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Wand2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContentFormProps {
  inputType: string;
  outputType: string;
  content: string;
  isLoading: boolean;
  onInputTypeChange: (value: string) => void;
  onOutputTypeChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onGenerate: () => void;
}

export function ContentForm({
  inputType,
  outputType,
  content,
  isLoading,
  onInputTypeChange,
  onOutputTypeChange,
  onContentChange,
  onGenerate,
}: ContentFormProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label className="text-base font-medium">Input Type</Label>
          <Select value={inputType} onValueChange={onInputTypeChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select input type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blog">Blog Post</SelectItem>
              <SelectItem value="script">Script</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-base font-medium">Output Type</Label>
          <Select value={outputType} onValueChange={onOutputTypeChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select output type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tweets">3 Tweets</SelectItem>
              <SelectItem value="linkedin">LinkedIn Post</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="content" className="text-base font-medium">
          Your Content
        </Label>
        <Textarea
          id="content"
          placeholder={`Paste your ${inputType} content here...`}
          className="min-h-[200px] resize-none"
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
        />
      </div>

      <Button
        className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-200 transform hover:scale-[1.02]"
        size="lg"
        onClick={onGenerate}
        disabled={isLoading || !content.trim()}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Wand2 className="mr-2 h-5 w-5" />
            Generate Content
          </>
        )}
      </Button>
    </div>
  );
}