//Check if Kahf file Exists in user storage if exists play it if not download/stream

function checkKahFile() {

var permissions = cordova.plugins.permissions;
permissions.checkPermission(permissions.WRITE_EXTERNAL_STORAGE, openFile(), permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE));

}

function openFile() {
	$.ajax({
url:'file:///storage/emulated/0/Download/Surah Al-Kahf.mp4',
type:'HEAD',
error: function()
{
    //file not exists
function onConfirm(buttonIndex) {
  if (buttonIndex==1) {
window.open('https://www.dropbox.com/s/ttsk9m2ttb8idsl/Surah%20Al-Kahf.mp4?dl=1','_system')
} else if (buttonIndex==2) {
 $("#popupKahfVideo").popup("open");
 AdMob.showAd(false);
} else {

};
    
};
navigator.notification.confirm(
    'Would you like to download the file so as its available offline next time or Just play without downloading?', // message
     onConfirm,            // callback to invoke with index of button pressed
    'Download/Play (Abdurrahman As-Sudais',           // title
    ['Download (49.5MB)','Play without downloading']     // buttonLabels
);
},
success: function()
{
    //file exists
window.plugins.toast.showLongBottom('Starting player please wait...');window.plugins.streamingMedia.playVideo("file:///storage/emulated/0/Download/Surah Al-Kahf.mp4");
}
});

}

