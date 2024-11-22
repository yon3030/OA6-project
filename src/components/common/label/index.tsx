import { LabelProps } from "./type";
import Image from "next/image";

const Label: React.FC<LabelProps> = ({ className, icon, text, font, color, size }) => {
    return (
        <p className={`text-left items-center inline-flex  text-[${size}px] ${color ? `text-${color}` : `text-white`} ${font && `font-${font}`}`}>
            {icon && <>
                <Image src={`/svgs/${icon.url}`} alt={icon.alt} width={icon.width} height={icon.height} />
            </>}
            <span className="pl-[5px]">{text}</span>
        </p>
    )
}

export default Label