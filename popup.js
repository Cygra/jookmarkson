var exportBtn = document.getElementById("export");

exportBtn.onclick = function() {
  chrome.bookmarks.getTree(function(items) {
    chrome.downloads.download({
      url: "data:application/json," + escape(JSON.stringify(items)),
      filename: 'bookmarks.json'
    });
  });
};
