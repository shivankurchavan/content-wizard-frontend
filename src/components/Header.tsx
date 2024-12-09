import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <div className="text-center space-y-6">
      <div className="flex items-center justify-center space-x-2">
        <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
        <h1 className="text-4xl font-bold text-purple-800 tracking-tight">
          Content Wizard
        </h1>
      </div>
      <p className="text-purple-600 max-w-2xl mx-auto leading-relaxed">
        Transform your blog posts and scripts into engaging social media content.
        Select your input type, choose your desired output format, and let our
        wizard do the magic!
      </p>
    </div>
  );
}