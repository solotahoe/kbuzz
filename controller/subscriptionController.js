/* eslint-disable new-cap */
/* eslint-disable camelcase */
const subModel = require('../model/subscriptonSchema')
const platinumsubscriptions = require('../dataSource/platinum')
const goldsubscriptions = require('../dataSource/gold')
const { v4: uuidv4 } = require('uuid')
const getTotalRecords = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const platinum_id = 'eb6e20eeP'
    const gold_id = '8b257cdaG'
    const silver_id = '1d41fa7eS'
    const bronze_id = 'de261f75B'
    const freemium_id = '78209086F'
    const totalRecords = await subModel.countDocuments()
    console.log(`Total number of subscriptions is ----${totalRecords}----`)
    const totalPlatinumRecords = await subModel.find({ plan_id: platinum_id })
    console.log(`Total number of platinum records is ----${totalPlatinumRecords.length}----`)
    const totalGoldRecords = await subModel.find({ plan_id: gold_id })
    console.log(`Total number of gold records is ----${totalGoldRecords.length}----`)
    const totalSilverRecords = await subModel.find({ plan_id: silver_id })
    console.log(`Total number of silver records is ----${totalSilverRecords.length}----`)
    const totalBronzeRecords = await subModel.find({ plan_id: bronze_id })
    console.log(`Total number of bronze records is ----${totalBronzeRecords.length}----`)
    const totalfreemuimRecords = await subModel.find({ plan_id: freemium_id })
    console.log(`Total number of freemium records is ----${totalfreemuimRecords.length}----`)
    res.status(200).send({ totalRecords, totalPlatinumRecords, totalGoldRecords, totalSilverRecords, totalBronzeRecords, totalfreemuimRecords })
  } catch (error) {
    console.error(error)
  }
}
const addPlatinumSubscription = async (req, res) => {
  try {
    const platinum_id = 'eb6e20eeP'

    // function to generate unique ids using idv4 starts here;
    const UniqueId = () => {
      return uuidv4()
    }
    // function to generate unique ids using idv4 ends here;

    const randomSubscriptionData = platinumsubscriptions[Math.floor(Math.random() * platinumsubscriptions.length)]

    // insert all 5000 records here start
    for (let i = 0; i < 5000; i++) {
      const newSubscription = new subModel({
        business_id: UniqueId(),
        email: randomSubscriptionData.email,
        plan_id: randomSubscriptionData.plan_id,
        payment_platform: randomSubscriptionData.payment_platform
      })

      await newSubscription.save()
    }
    // insert all 5000 records here ends

    // show total number of recorders
    const totalPlatinumRecords = await subModel.find({ plan_id: platinum_id })
    console.log(`Total number of platinum records is ----${totalPlatinumRecords.length}----`)
    res.status(201).send('added records to db')
  } catch (error) {
    console.error(error)
    res.status(500).send('Error inserting records please retry')
  }
}

const addGoldSubscription = async (req, res) => {
  try {
    const gold_id = '8b257cdaG'
    // function to generate unique ids using idv4;
    const UniqueId = () => {
      return uuidv4()
    }
    // function to generate unique ids using idv4 ends here;

    const randomSubscriptionData = goldsubscriptions[Math.floor(Math.random() * platinumsubscriptions.length)]

    // insert all 5000 records here start
    for (let i = 0; i < 8000; i++) {
      const newSubscription = new subModel({
        business_id: UniqueId(),
        email: randomSubscriptionData.email,
        plan_id: gold_id,
        payment_platform: randomSubscriptionData.payment_platform
      })

      await newSubscription.save()
    }
    // insert all 5000 records here ends

    // show total number of recorders
    const totalGoldRecords = await subModel.find({ plan_id: gold_id })
    console.log(`Total number of gold records is ----${totalGoldRecords.length}----`)
    res.status(201).send('added records to db')
  } catch (error) {
    console.error(error)
    res.status(500).send('Error inserting records please retry')
  }
}

const addSilverSubscription = async (req, res) => {
  try {
    const silver_id = '1d41fa7eS'
    // function to generate unique ids using idv4;
    const UniqueId = () => {
      return uuidv4()
    }
    // function to generate unique ids using idv4 ends here;

    const randomSubscriptionData = goldsubscriptions[Math.floor(Math.random() * platinumsubscriptions.length)]

    // insert all 5000 records here start
    for (let i = 0; i < 12000; i++) {
      const newSubscription = new subModel({
        business_id: UniqueId(),
        email: randomSubscriptionData.email,
        plan_id: silver_id,
        payment_platform: randomSubscriptionData.payment_platform
      })
      await newSubscription.save()
    }
    // insert all 5000 records here ends

    // show total number of recorders
    const totalSilverRecords = await subModel.find({ plan_id: silver_id })
    console.log(`Total number of silver records is ----${totalSilverRecords.length}----`)
    res.status(201).send('added records to db')
  } catch (error) {
    console.error(error)
    res.status(500).send('Error inserting records please retry')
  }
}

const addBronzeSubscription = async (req, res) => {
  try {
    const bronze_id = 'de261f75B'
    // function to generate unique ids using idv4;
    const UniqueId = () => {
      return uuidv4()
    }
    // function to generate unique ids using idv4 ends here;

    const randomSubscriptionData = goldsubscriptions[Math.floor(Math.random() * platinumsubscriptions.length)]

    // insert all 5000 records here start
    for (let i = 0; i < 7000; i++) {
      const newSubscription = new subModel({
        business_id: UniqueId(),
        email: randomSubscriptionData.email,
        plan_id: bronze_id,
        payment_platform: randomSubscriptionData.payment_platform
      })
      await newSubscription.save()
    }
    // insert all 5000 records here ends

    // show total number of recorders
    const totalBronzeRecords = await subModel.find({ plan_id: bronze_id })
    console.log(`Total number of bronze records is ----${totalBronzeRecords.length}----`)
    res.status(201).send('added records to db')
  } catch (error) {
    console.error(error)
    res.status(500).send('Error inserting records please retry')
  }
}

const addFremiuimSubscription = async (req, res) => {
  try {
    console.log('fremium subscriptions')
    const freemium_id = '78209086F'
    // function to generate unique ids using idv4;
    const UniqueId = () => {
      return uuidv4()
    }
    // function to generate unique ids using idv4 ends here;

    const randomSubscriptionData = goldsubscriptions[Math.floor(Math.random() * platinumsubscriptions.length)]

    // insert all 5000 records here start
    for (let i = 0; i < 500; i++) {
      const newSubscription = new subModel({
        business_id: UniqueId(),
        email: randomSubscriptionData.email,
        plan_id: freemium_id,
        payment_platform: randomSubscriptionData.payment_platform
      })
      await newSubscription.save()
    }
    // insert all 5000 records here ends

    // show total number of recorders
    const totalfreemuimRecords = await subModel.find({ plan_id: freemium_id })
    console.log(`Total number of bronze records is ----${totalfreemuimRecords.length}----`)
    res.status(201).send('added records to db')
  } catch (error) {
    console.error(error)
    res.status(500).send('Error inserting records please retry')
  }
}

module.exports = {
  addPlatinumSubscription,
  addGoldSubscription,
  addSilverSubscription,
  addBronzeSubscription,
  addFremiuimSubscription,
  getTotalRecords
}
