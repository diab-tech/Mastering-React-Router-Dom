import { useLocation } from "react-router-dom";
import TextArea from "../Ui/TextArea";

interface IProps {}

const Contribute = ({}: IProps) => {
  const { state } = useLocation();

  return (
    <>
      <h3>{state ? `Post Your Issue ${state.data}` : "Post Your Issue Man "}</h3>
      <TextArea />
    </>
  );
};

export default Contribute;
