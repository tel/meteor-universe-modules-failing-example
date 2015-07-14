Package.describe({
  name: 't:t',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use("universe:modules");
  api.addFiles('t.import.js');
  api.addFiles('a/t.import.js');
  api.addFiles('a/a/t.import.js');
  api.addFiles('a/a/a/t.import.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use("universe:modules");
  api.use('t:t');
  api.addFiles('tests.import.js');
  api.addFiles('t-tests.js');
});
