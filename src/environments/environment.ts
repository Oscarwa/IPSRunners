// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAzEtoQ34d_sGs56aqphJBpjQQyEFyt9ZA",
    authDomain: "ips-world.firebaseapp.com",
    databaseURL: "https://ips-world.firebaseio.com",
    projectId: "ips-world",
    storageBucket: "ips-world.appspot.com",
    messagingSenderId: "533693252147"
  }
};
