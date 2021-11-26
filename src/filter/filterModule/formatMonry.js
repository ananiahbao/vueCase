const formatMoney = (str) => {
  let a = Number(str).toFixed(0) + "元";
  return a;
};

export default formatMoney;
