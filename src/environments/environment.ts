// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  local: true,
  // api: 'http://127.0.0.1:3000/'
  api: 'http://ec2-15-160-240-109.eu-south-1.compute.amazonaws.com:3000/'
  // api: 'http://ec2-15-160-2-192.eu-south-1.compute.amazonaws.com:3000/' andrea
  // api: 'http://ec2-35-152-51-18.eu-south-1.compute.amazonaws.com:3000/' Multiclienti
  // OLD ACCOUNT
  // api: 'http://ec2-15-160-2-188.eu-south-1.compute.amazonaws.com:3000/' --AndreaP
  // api: 'http://ec2-35-152-50-80.eu-south-1.compute.amazonaws.com:3000/' -- Mattia
  // api: 'http://ec2-35-152-99-6.eu-south-1.compute.amazonaws.com:3000/' -- LeoNardo Ancellotti
  // api: 'http://ec2-15-160-23-179.eu-south-1.compute.amazonaws.com:3000/' -- MarcoP
  // api: 'http://ec2-15-161-58-222.eu-south-1.compute.amazonaws.com:3000/' -- AnnalisaP
  // api: 'http://ec2-15-161-134-114.eu-south-1.compute.amazonaws.com:3000/' -- CapocciaMarco
  // api: 'http://ec2-15-161-146-7.eu-south-1.compute.amazonaws.com:3000/' -- AlessiaRoberti
  // api: 'http://ec2-35-152-51-132.eu-south-1.compute.amazonaws.com:3000/' -- DanieleRotella -50-127

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
