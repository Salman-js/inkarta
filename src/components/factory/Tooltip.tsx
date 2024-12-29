import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import React from 'react';
type tooltipProps = {
  children: React.ReactElement;
  content: string | React.ReactNode;
};
export const ToolTip: React.FC<tooltipProps> = ({ children, content }) => {
  return (
    <TooltipProvider>
      <Tooltip disableHoverableContent>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
