// eslint-disable-next-line no-undef
module.exports = {
  async redirects() {
    return [
      {
        source: '/page',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
