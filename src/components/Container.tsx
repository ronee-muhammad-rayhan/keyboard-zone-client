import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}
const Container = ({ children }: Props) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
