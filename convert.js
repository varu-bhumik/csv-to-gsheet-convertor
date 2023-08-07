
function convert() {

  
  var folder = DriveApp.getFolderById('XX'); // replace XX with whatever occurs at the end of your drive link, //https://drive.google.com/drive/folders/XX

  var files = folder.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    if (file.getMimeType() == MimeType.CSV && file.getDescription() != "copied") {  // Added
      file.setDescription("copied");  // Added
      Drive.Files.copy({}, file.getId(), {convert: true});
      file.setTrashed(true) //Added
    }
  }
}

convert()
