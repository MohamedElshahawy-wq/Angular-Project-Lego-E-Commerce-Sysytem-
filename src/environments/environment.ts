// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_Link: 'http://localhost:3000',
  firebase : {
    apiKey: "AIzaSyB2sQC2aN45hmqPjzRlNltv0mIm5LcslYw",
    authDomain: "legoangularproject.firebaseapp.com",
    projectId: "legoangularproject",
    storageBucket: "legoangularproject.appspot.com",
    messagingSenderId: "547576791402",
    appId: "1:547576791402:web:2ae0e0d06dad406625e513"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
