function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function adderFile(data) {
  const myFile = Utilities.newBlob(Utilities.base64Decode(data.data), data.mimeType, data.fileName);
  const folderId = '1QmXwybN6S5MVwrh6Pcn6xWo8VcAA-krr';
  const folder = DriveApp.getFolderById(folderId);
  const fileAdded = folder.createFile(myFile);
  const response = {
    'url': fileAdded.getUrl(),
    'name': data.fileName
  };
  return response;
}
