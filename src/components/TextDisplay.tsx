import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown, RotateCcw, Type } from "lucide-react";

const MAX_CHARS = 100;

const TextDisplay = () => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_CHARS) {
      setText(value);
    }
  };

  const charCount = text.length;
  const isNearLimit = charCount > MAX_CHARS * 0.8;

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Type className="h-6 w-6 text-primary" />
            Live Text Display
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Type something and watch it appear instantly
          </p>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="text-input" className="text-sm font-medium text-foreground">
                Your text
              </label>
              <Badge
                variant={isNearLimit ? "destructive" : "secondary"}
                className="text-xs tabular-nums"
              >
                {charCount}/{MAX_CHARS}
              </Badge>
            </div>
            <Input
              id="text-input"
              value={text}
              onChange={handleChange}
              placeholder="Start typing here..."
              className="text-base"
              autoFocus
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setText(text.toUpperCase())}
              disabled={!text}
            >
              <ArrowUp className="mr-1 h-3.5 w-3.5" />
              Uppercase
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setText(text.toLowerCase())}
              disabled={!text}
            >
              <ArrowDown className="mr-1 h-3.5 w-3.5" />
              Lowercase
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setText("")}
              disabled={!text}
            >
              <RotateCcw className="mr-1 h-3.5 w-3.5" />
              Clear
            </Button>
          </div>

          {/* Live display */}
          <div className="rounded-lg border bg-secondary/50 p-4">
            <span className="text-sm font-medium text-muted-foreground">You typed →</span>
            <p className="mt-1 min-h-[1.5rem] text-lg font-semibold text-foreground break-words">
              {text || (
                <span className="font-normal text-muted-foreground/60 italic">
                  Nothing yet...
                </span>
              )}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TextDisplay;
