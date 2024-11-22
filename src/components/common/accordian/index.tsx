// components/Accordion.tsx
import { useState, useRef, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type AccordionProps = {
  title: string;
  content: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  handleTransitionEnd: () => void;
  value: string | null;
};

const Accordion: React.FC<AccordionProps> = ({ title, content, isActive, onClick, handleTransitionEnd, value }) => {
  const [height, setHeight] = useState<string>('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeight(isActive ? `${contentRef.current?.scrollHeight}px` : '0px');
  }, [isActive]);

  return (
    <div className={`relative bg-primary-default gradient-border gradient-default-border gradient-border-rounded-16px rounded-[16px] transition-transform duration-200 glass-stroke`}>
      <button
        className="w-full flex justify-between items-center p-4 text-left z-30"
        onClick={onClick}
        style={{ position: 'relative', zIndex: 30 }}
      >
        <span className="text-[24px] font-medium text-white font-sans">{title}</span>
        {!isActive && (value ? <p className="text-[#20d795]">{value}</p> : <KeyboardArrowDownIcon className=" text-[#20d795] transition-opacity duration-200" />)}
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`overflow-hidden transition-max-height duration-200 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
        onTransitionEnd={handleTransitionEnd}
      >
        {title === "Where" ? content : <div className='flex flex-row justify-center pb-4'>
          <div className="gradient-border relative gradient-default-border gradient-border-rounded-16px rounded-[16px] bg-primary-light shadow-search-box-btn z-10 ">
            {content}
          </div>
        </div>}
      </div>
    </div>

  );
};

export default Accordion;
