import {DefaultChildProps} from "@/components/childProps";

export interface ButtonProps extends DefaultChildProps {
  border?: {
    color: string,
    width: number
  }
  roundedSize?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  handleClick?: () => void;
}

export const defaultButtonProps: ButtonProps = {
  border: {
    color: 'default',
    width: 1
  },
  roundedSize: 'full',
};
