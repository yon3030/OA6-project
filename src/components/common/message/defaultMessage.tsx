
import FadeAction from "./fadeAction"
import Button from "@/components/common/button"
interface MessageProps {
  addClass?: string,
  width?: string,
  align?: string,
  justify?: "start" | "center" | "end" | "between",
  bgColor?: string,
  exceptRounded?: string,
  content?: string,
  date?: string,
  dateColor?: string,
  innerColor?: string,
  prefix?: React.ReactNode,
  suffix?: React.ReactNode,
}

const defaultMessage: React.FC<MessageProps> = ({ addClass, align, bgColor, exceptRounded, content, date, dateColor, width, justify, prefix, suffix, innerColor }) => {
  return (
    <>
      <FadeAction>
        <div className={`flex flex-col items-${align} ${addClass}`}>
          <Button
            roundedSize="full"
            border={{ color: "transparent", width: 0 }}
            prefix={prefix}
            suffix={suffix}
            className={`flex-row w-${width == "full" ? "full" : width} justify-${justify} bg-${bgColor} text-${innerColor} py-1 px-3 rounded-${exceptRounded}`}
          >
            {content ? <p className={`text-[14px] leading-5 py-[10px] px-5`}>{content}</p> : ""}
          </Button>
          <p className={`${dateColor} text-[12px] leading-[14px] pt-[5px]`}>{date}</p>
        </div >
      </FadeAction >
    </>
  )
}

export default defaultMessage