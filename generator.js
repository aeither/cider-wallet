const pwaAssetGenerator = require('pwa-asset-generator')

// Generate images over a module function call, instead of using CLI commands
;(async () => {
  const { savedImages, htmlMeta, manifestJsonContent } =
    await pwaAssetGenerator.generateImages(
      'public/icons/ciderlogo.svg',
      './temp',
      {
        // manifest: 'public/manifest.json',
        scrape: false,
        background:
          'linear-gradient(53deg, rgba(2,0,36,1) 0%, rgba(23,23,187,1) 39%, rgba(0,212,255,1) 100%)',
        splashOnly: false,
        portraitOnly: true,
        log: false
      }
    )
  console.log(htmlMeta)
  console.log(manifestJsonContent)
})()

// Access to static data for Apple Device specs that are used for generating launch images
const appleDeviceSpecsForLaunchImages =
  pwaAssetGenerator.appleDeviceSpecsForLaunchImages
