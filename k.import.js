/* global Meteor */
/* global Session */
/* global Template */

import * as blob from "a/index";

a = blob;

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter() {
      return Session.get("counter");
    },

    blob() {
      return JSON.stringify(blob);
    },
  });

  Template.hello.events({
    "click button"() {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
