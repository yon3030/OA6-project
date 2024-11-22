import { DefaultChildProps, ImageProps } from "@/components/childProps";

export interface ParallelImagesProps extends DefaultChildProps {
    leftImgUrl: string,
    rightImgUrl: string,
    isMobile: boolean
}