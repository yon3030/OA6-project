import { ButtonProps, defaultButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    border = defaultButtonProps.border,
    roundedSize = defaultButtonProps.roundedSize,
    prefix,
    suffix,
    handleClick,
}) => {
    return (
        <button className={`${className} 
        flex 
        ${roundedSize == "full" ? "rounded-full" : `rounded-[${roundedSize}px]`}
        relative
        gradient-border
        gradient-border-rounded-${roundedSize == "full" ? "full" : `${roundedSize}px`}
        ${border?.color == "default" ?
                ` gradient-default-border ` :
                ` gradient-${border?.color}`
            }
`}
            onClick={handleClick}
        >
            {prefix && prefix}
            {children}
            {suffix && suffix}
        </button >
    );
};

export default Button;