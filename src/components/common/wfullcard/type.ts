import { DefaultChildProps, ImageProps, } from "@/components/childProps";
import { LabelProps } from "../label/type";

interface CardProps extends DefaultChildProps {
    direction?: string,
    link?: string,
    cardImage?: ImageProps,
    title?: LabelProps,
    description?: LabelProps,
    extraInfos?: LabelProps[],
    isSelected?: boolean,
}

export default CardProps