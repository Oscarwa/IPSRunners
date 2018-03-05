// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD0psKuXrm6y9X5pXcBhLwitw4WznbsrwA",
    authDomain: "ipsrunners.firebaseapp.com",
    databaseURL: "https://ipsrunners.firebaseio.com",
    projectId: "ipsrunners",
    storageBucket: "ipsrunners.appspot.com",
    messagingSenderId: "1026124199593"
  }
};
