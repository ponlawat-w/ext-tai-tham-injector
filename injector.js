const injectTaiTham = (fontUrl) => {
  if (document.getElementById('tai-tham-injector-styling-block')) {
    document.getElementById('tai-tham-injector-styling-block').remove();
  }

  const $style = document.createElement('style');
  $style.id = 'tai-tham-injector-styling-block';
  $style.innerHTML = `@font-face{font-family:tai-tham-injector-font;src:url(${fontUrl});unicode-range:U+1A20-1AAF}body,*{font-family:tai-tham-injector-font !important;}`;
  document.head.appendChild($style);
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  injectTaiTham(message.fontUrl);
  sendResponse();
});
