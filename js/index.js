var admobid = {
  banner: 'ca-app-pub-6981212130280607/2899891177',
    interstitial: 'ca-app-pub-6981212130280607/4376624370',
 };

document.addEventListener('deviceready', this.onDeviceReady, false);
     function onDeviceReady() {
        admob.banner.config({
        id: admobid.banner,
        isTesting: true,
        autoShow: true,
          })
        admob.banner.prepare()
        AdMob.createBannerView();
        welcomeScreen();
        AppRate.preferences.storeAppURL.android = 'market://details?id=com.ihyausunnah.surahalkahf';
        AppRate.preferences.openStoreInApp = true;
        AppRate.preferences.displayAppName = 'Surah Al Kahf App';
        AppRate.preferences.usesUntilPrompt = 10;
        AppRate.preferences.promptAgainForEachNewVersion = false;
        AppRate.promptForRating(false);
        

        
     }

    