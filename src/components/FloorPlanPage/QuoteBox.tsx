
interface Item {
  iconUrl: string;
  value: number | string;
  type?: string;
}

const QuoteBox = ({ items }: { items: Item[] }) => {
  return (
    <div className="relative bg-primary-light px-4 py-3 rounded-lg shadow-md backdrop-blur-[30px]">
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div key={index} className="flex items-center mb-2 space-x-3 justify-items-center">
            <img src={item.iconUrl} alt={item.type} className="w-[18px] h-[18px] mr-2" />
            <div className="flex flex-row">
              <span className="text-[14px] font-medium text-white">{item.value}&nbsp;&nbsp;{item.type}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Triangle part */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-100 transform rotate-180 -translate-y-2">
        <div className="w-full h-full bg-gray-100 clip-triangle"></div>
      </div> */}
    </div>
  );
};

export default QuoteBox;