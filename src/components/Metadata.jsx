import { Helmet } from "react-helmet";

const Metadata = ({ children }) => {
  return <Helmet>{children}</Helmet>;
};

export default Metadata;
