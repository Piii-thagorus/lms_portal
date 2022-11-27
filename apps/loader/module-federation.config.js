module.exports = {
  name: 'loader',
  exposes: {
    './Module': 'apps/loader/src/app/remote-entry/entry.module.ts',
  },
};
