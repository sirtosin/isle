import { toast } from "react-hot-toast";
import classNames from "classnames";

type Props = {
  title: string;
  error: boolean;
};

export const Toast = ({ title, error }: Props): any =>
  toast.custom((t) => (
    <div
      className={classNames(
        "capitalize px-6 py-4 shadow-md rounded-lg flex items-center space-x-2 z-[30000]",
        {
          "animate-enter": t.visible,
          "animate-leave": !t.visible,
          "bg-[#029247]": !error,
          "bg-[#FF3B30]": error,
        }
      )}
    >
      <span className="text-[#fff] !text-xs">{title}</span>
    </div>
  ));
