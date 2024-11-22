import { DefaultChildProps, ImageProps } from "@/components/childProps";
export interface LabelProps extends DefaultChildProps {
    icon?: ImageProps,
    text?: string;
    font?: string;
    color?: string;
    size?: number;
}