// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_Link: 'http://localhost:3000',
  firebase : {
    apiKey: "AIzaSyCeBKRyfV6o5c5jEcSt4ZihhGpnE7CKJ94",
    authDomain: "rest-firestore-api.firebaseapp.com",
    projectId: "rest-firestore-api",
    storageBucket: "rest-firestore-api.appspot.com",
    messagingSenderId: "38469763527",
    appId: "1:38469763527:web:8de4cb7c2f9a72402e59e2"
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
