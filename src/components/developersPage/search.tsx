
import Icon from '@mui/icons-material/Search';
import Button from "@/components/common/button";

const Search = () => {
  return (
    <Button
      prefix={<Icon />}
      border={{ color: "transparent", width: 0 }}
      className="w-[178px] h-[48px] bg-white items-center justify-center"
    >
      <span className="text-[16px] font-semibold capitalize pl-[2px]">developers</span>
    </Button>
  )
};

export default Search;
