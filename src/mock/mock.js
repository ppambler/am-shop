import Mock from "mockjs";
import data from "./data.json";

Mock.mock("http://www.tangxt.cn/getList", { data: data.list });
