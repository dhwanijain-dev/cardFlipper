import * as React from "react"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef(({ className, value, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn("relative h-2 w-full overflow-hidden rounded-full bg-slate-200", className)}
            {...props}
        >
            <div
                className="h-full w-full flex-1 bg-slate-900 transition-all"
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </div>
    )
})
