module.exports = {
  name: 'new-api',
  exposes: {
    './Module': 'apps/new-api/src/app/remote-entry/entry.module.ts',
  },
};
