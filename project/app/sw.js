/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// import workbox from cdn
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

//
if (workbox) {
  console.log(`workbox loaded!`);
  workbox.precaching.precacheAndRoute([]);
  // set up workbox-background-sync
  const bgSyncPlugin = new workbox.backgroundSync.Plugin('dashboardr-queue');
  // add plugin to the config of handler
  const networkWithBackgroundSync = new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin],
  });
  // create and register route using handler and api endpoint
  workbox.routing.registerRoute(
    /\/api\/add/,
    networkWithBackgroundSync,
    'POST'
  );
} else {
  console.log(`oops! workbox didn't load.`);
}
