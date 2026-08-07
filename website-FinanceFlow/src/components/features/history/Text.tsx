import type { PropsWithChildren } from "react"

export function Text({children}:PropsWithChildren){

    return (
        <span className="text-foreground font-semibold truncate">{children}</span>
    )
}

export function Category({children}:PropsWithChildren){

    return (
        <span className="text-muted-foreground text-sm">{children}</span>
    )
    
}