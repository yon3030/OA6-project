import FadeAction from "./fadeAction"
interface AIMessageProps {
  addClass?: string,
  height?: string,
  content?: string,
  roundedSize?: string,
  exceptRounded?: string,
  bgColor?: string,
  innerColor?: string,
  prefix?: React.ReactNode
}

const SpecialMessage: React.FC<AIMessageProps> = ({ addClass, height, content, roundedSize, exceptRounded, bgColor, innerColor, prefix }) => {
  return (
    <FadeAction>
      <div className={`${addClass}`}>
        <div className={`relative ${height}`}>
          <div className={`relative ${roundedSize} rounded-only-bottom-left bg-primary-dark ${height} z-10`}>
          </div>
          <div className={`absolute inset-0 bg-secondary-default ${height} ${roundedSize} rounded-except-bottom-left`}></div>
        </div>

        <div className={`flex flex-row items-center justify-start w-full ${bgColor} ${roundedSize} ${exceptRounded} space-x-[26px] py-[21.78px] px-[6.7px]`}>
          {prefix}
          <span className={`${innerColor} text-[12px] leading-[14px]`}>
            ${content}
          </span>
        </div>
      </div>
    </FadeAction >
  )
}

export default SpecialMessage