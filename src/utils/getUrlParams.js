// 获取url参数 ?之后
const getUrlParams = url => {
  let theRequest = {}
  url = decodeURI(url)
  if (url.indexOf("?") !== -1) {
    const str = url.substr(1);
    const strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
export default getUrlParams