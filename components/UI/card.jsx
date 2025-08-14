import { cva } from 'class-variance-authority';
import { cn } from '../lib/utiles';

// Define card variants using `cva`
const cardVariants = cva(
  "flex flex-col min-w-full gap-6 rounded-xl py-6", // Common styles
  {
    variants: {
      variant: {
        outline: "bg-surface border border-outline-variant", // Outline variant
        elevated: "bg-surface-low shadow-[0px_1px_2px_rgba(0,0,0,0.3),_0px_1px_3px_1px_rgba(0,0,0,0.15)]", // Elevated variant
        filled: "bg-surface-highest",  // Filled variant
      },
    },
    defaultVariants: {
      variant: "outline", // Default to filled variant
    },
  }
)

function Card({ className, variant, size, ...props }) {
  return (
    <div
      data-slot={`card-${variant}`}
      className={cardVariants({ variant, className })}
      {...props}
    />
  )
}

function CardHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props} />
  );
}

function CardTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props} />
  );
}

function CardDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

function CardAction({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props} />
  );
}

function CardContent({
  className,
  ...props
}) {
  return (<div data-slot="card-content" className={cn("px-6", className)} {...props} />);
}

function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props} />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter }
