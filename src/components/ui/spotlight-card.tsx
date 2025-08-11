import * as React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string; // rgba string
}

const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ className, children, spotlightColor = "rgba(0,0,0,0.10)", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden transition-transform duration-200 will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
          className
        )}
        {...props}
      >
        {/* Spotlight sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
          style={{
            background: `radial-gradient(600px circle at var(--spot-x,50%) var(--spot-y,50%), ${spotlightColor}, transparent 60%)`,
          }}
        />
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);
SpotlightCard.displayName = "SpotlightCard";

export default SpotlightCard;
