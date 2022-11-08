import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import "../imports/ui/routes";

Meteor.startup(() => {
  render("", document.getElementById('react-target'));
});
