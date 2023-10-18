const plans = [
  // 1
  {
    name: 'eb6e20eeP',
    price: 100,
    period: 'monthly',
    status: 'A',
    features: {
      videos: true,
      audio: true,
      download: true,
      streaming: true,
      customize: true
    }

  },
  // 2
  {
    name: '8b257cdaG',
    price: 70,
    period: 'monthly',
    status: 'D',
    features: {
      videos: true,
      audio: true,
      download: false,
      streaming: true,
      customize: true
    }
  },

  // 3

  {
    name: '1d41fa7eS',
    price: 50,
    period: 'monthly',
    status: 'D',
    features: {
      videos: true,
      audio: true,
      download: false,
      streaming: false,
      customize: true
    }
  },

  // 4

  {
    name: 'de261f75B',
    price: 30,
    period: 'monthly',
    status: 'A',
    features: {
      videos: true,
      audio: true,
      download: false,
      streaming: false,
      customize: false
    }
  },
  // 5
  {
    name: '78209086F',
    price: 0,
    period: 'monthly',
    status: 'A',
    features: {
      videos: false,
      audio: true,
      download: false,
      streaming: false,
      customize: false
    }
  }

]

module.exports = plans
