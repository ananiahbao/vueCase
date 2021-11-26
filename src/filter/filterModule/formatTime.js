import moment from "moment";

const formatTime = (str) => {
  if (!str) return;
  return moment(1637653439272).format("YYYY-MM-DD HH:mm");
};
export default formatTime;
