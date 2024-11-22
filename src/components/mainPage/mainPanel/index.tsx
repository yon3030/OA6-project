import { usePathname } from 'next/navigation';
import { MainPanelProps } from "./type"
const MainPanel: React.FC<MainPanelProps> = ({ children }) => {
    const gradientBorder = "gradient-border gradient-default-border";

    return (
        // <div className={`relative w-full gradient-border-rounded-30px rounded-[30px] bg-primary-default space-y-4 ${gradientBorder}`}>
        <div className={`relative w-[calc(100vw-480px)] gradient-border-rounded-30px rounded-[30px] bg-primary-default space-y-4 ${gradientBorder}`}>
            {children}
        </div >
    );
    
}

export default MainPanel