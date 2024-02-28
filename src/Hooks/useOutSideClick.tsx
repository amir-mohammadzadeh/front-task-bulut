import { Dispatch, SetStateAction, useEffect, useRef } from "react"
type action = Dispatch<SetStateAction<boolean>>;

export const useOutsideClick = ( closeAction:action ) => {
    const Element_Ref = useRef<HTMLDivElement>(null)
    useEffect(() => {

        const outside_clickHandler = (event:MouseEvent) => {
            if (Element_Ref.current && !Element_Ref.current.previousSibling?.contains(event.target as Node) && !Element_Ref.current.contains(event.target as Node)) {
                closeAction(preventValue => !preventValue)
                
            }
        }
        document.addEventListener('mousedown', outside_clickHandler);
        return () => document.removeEventListener('mousedown', outside_clickHandler)
    }, [])

    return Element_Ref
}