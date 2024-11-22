import { DefaultChildProps } from "@/components/childProps";

export interface ItemListPanelProps extends DefaultChildProps {
    title: string,
    expandVisible?: boolean,
}

export interface ItemListFullPanelProps extends ItemListPanelProps {
    isExpanded: boolean,
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}