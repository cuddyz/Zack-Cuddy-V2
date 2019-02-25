// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

const accessToken = '90542dc69f6d39e262ac6d0ae8a79ce4c8918e0a8104f3dbff9fdab1c613b432'
const spaceId = 'yg0u7ppb2cxm'

module.exports = function (api) {
  api.loadSource(async store => {

    const promises = []
    promises.push(axios.get(`https://cdn.contentful.com/spaces/${spaceId}/assets?access_token=${accessToken}`))
    promises.push(axios.get(`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}`))

    await Promise.all(promises).then(res => {
      const assets = res[0].data.items

      const projects = res[1].data.items

      const assetType = store.addContentType({
        typeName: 'ProjectAssets'
      })

      for (const item of assets) {
        assetType.addNode({
          id: item.sys.id,
          title: item.fields.title,
          fields: {
            url: item.fields.file.url,
          }
        })
      }

      const projectType = store.addContentType({
        typeName: 'Projects'
      })


      for (const item of projects) {
        projectType.addNode({
          id: item.sys.id,
          title: item.fields.title,
          fields: {
            url: item.fields.url,
            image: store.createReference('ProjectAssets', item.fields.image.sys.id)
          }
        })
      }
    })
    .catch(e => {
      console.log(e)
    })
  })
}