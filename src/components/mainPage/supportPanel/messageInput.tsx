import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const MessageInput: React.FC = () => (
  <div className="absolute bottom-[13px] w-[calc(100%-30px)] h-[50px] flex flex-row items-center px-[10px] border-secondary-light border-[1px] rounded-[164px]">
    <div className="flex flex-row items-center justify-start">
      <div className="flex justify-center items-center bg-secondary-default w-[24px] h-[24px] rounded-full p-2">
        <AddIcon fontSize="small" />
      </div>
      <input
        type="text"
        className="w-full mr-[11px] p-2 border-r border-solid border-secondary-light text-white bg-transparent outline-none placeholder:text-white text-[14px]"
        placeholder="Type Message"
      />
    </div>
    <div className="flex flex-row items-center justify-end space-x-[10.5px]">
      <div className="flex justify-center items-center bg-secondary-default w-[24px] h-[24px] rounded-full p-2">
        <KeyboardVoiceIcon fontSize="small" />
      </div>
    </div>
  </div>
);

export default MessageInput;