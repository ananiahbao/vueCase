import moment from "moment";

const timeForamt = (str) => {
  return moment(str).format("lll");
};
export default timeForamt;
