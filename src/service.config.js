// 如果有了真实地址，直接把MOCKURL改为SERVERURL就好了

const MOCKURL = "http://www.tangxt.cn/"; // mock模拟
const SERVERURL = "http://localhost:3000/"; //真实URL

const URL = {
  getVarietyItem: MOCKURL + "getVarietyItem",
  // getHotProduct: MOCKURL + "getHotProduct",
  registerUser: SERVERURL + "user/registerUser",
  loginUser: SERVERURL + "user/loginUser",
  getTypes: SERVERURL + "type/getTypes",
  getProductsByType: SERVERURL + "product/getProductsByType",
  getDetail: SERVERURL + "product/getDetail",
  addCart: SERVERURL + "cart/addCart",
  getCart: SERVERURL + "cart/getCart",
  delCart: SERVERURL + "cart/delCart"
};

export default URL;
