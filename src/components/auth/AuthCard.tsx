import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AuthCard({ children, className }: AuthCardProps) {
  return (
    <Card className={cn("w-full max-w-md backdrop-blur-sm bg-white/90 shadow-xl border-purple-100", className)}>
      <CardHeader className="space-y-1 pb-4 flex items-center justify-center">
        {/* <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
          <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-white" />
          </div>
        </div> */}
        <Sparkles className="w-8 h-8 text-purple-600 animate-pulse " />
        <p className="text-3xl font-bold text-purple-800 tracking-tight">
          Content Wizard
        </p>
      </CardHeader>
      
      <CardContent>{children}</CardContent>
    </Card>
  );
}