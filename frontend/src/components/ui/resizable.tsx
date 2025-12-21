"use client"

import React from "react"
import { GripVertical } from "lucide-react"
import { Group, Panel, Separator } from "react-resizable-panels"
import { cn } from "@/lib/utils"

// Props type for PanelGroup
type ResizablePanelGroupProps = {
  children: React.ReactNode
  className?: string
  direction?: "horizontal" | "vertical"
}

const ResizablePanelGroup = ({
  children,
  className,
  direction = "horizontal",
}: ResizablePanelGroupProps) => (
  <Group
    orientation={direction}
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
  >
    {children}
  </Group>
)

// Props type for Panel
type ResizablePanelProps = {
  children?: React.ReactNode
  defaultSize?: number
  minSize?: number
  maxSize?: number
}

const ResizablePanel = ({ children, ...props }: ResizablePanelProps) => (
  <Panel {...props}>{children}</Panel>
)

// Props type for ResizeHandle
type ResizableHandleProps = {
  withHandle?: boolean
  className?: string
}

const ResizableHandle = ({ withHandle, className, ...props }: ResizableHandleProps) => (
  <Separator
    {...props}
    className={cn(
      "relative flex items-center justify-center bg-border " +
        "data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full",
      className
    )}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </Separator>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }


