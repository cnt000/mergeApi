let fetch = require("node-fetch")

async function collectAsync(api, metric) {
  let responseData = {}
  try {
    let response = await fetch(api)
    let data = await response.json()
    responseData.aggregator = data
    let dataCollected = await Promise.all(
      data[metric].map(async url => {
        let res = await fetch(url)
        let result = await res.json()
        responseData[result.name] = result
        return result
      })
    )
    return responseData
  } catch (error) {
    console.log("error: ", error)
  }
}

module.exports = collectAsync
