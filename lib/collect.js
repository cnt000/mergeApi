const fetch = require("node-fetch")

const collect = (api, metric) => {
  let responseData = {}
  return fetch(api)
    .then(response => response.json())
    .then(data => {
      responseData.aggregator = data
      return Promise.all(
        data[metric].map(url =>
          fetch(url)
            .then(response => response.json())
            .then(singleData => {
              responseData[singleData.name] = singleData
            })
            .catch(error => console.log(error))
        )
      )
        .then(() => responseData)
        .catch(error => console.log(error))
    })
}

module.exports = collect
