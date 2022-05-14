const $changeFontBtn = document.getElementById('change-font-btn');

$changeFontBtn.onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    if (!tabs.length) {
      return;
    }
    const currentTab = tabs[0];

    const message = {
      fontUrl: chrome.runtime.getURL('fonts/NotoSansTaiTham.ttf')
    };

    const callback = () => {
      $changeFontBtn.disabled = true;
    }

    chrome.tabs.sendMessage(currentTab.id, message, null, callback);
  });
};
