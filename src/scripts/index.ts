import { getAddress } from "./getAddress.js"
import { setAddress } from "./setAddress.js"
getAddress('')

const trackerInput = document.querySelector<HTMLInputElement>('#tracker--input')
const trackerBtn = document.querySelector<HTMLInputElement>('#tracker--btn')
trackerBtn.addEventListener('click', async () => {
    const data = await getAddress(trackerInput.value)

    const ip = data.ip
    const isp = data.isp
    const city = data.location.city
    const country = data.location.country 
    const region = data.location.region 
    const timezone = data.location.timezone

    setAddress(ip, city, country, region, timezone, isp)

    console.log(data)
    console.log(`IP: ${ip}\nISP: ${isp}\nCountry:${country}\nRegion: ${region}\nTimezone: ${timezone}\n`)
})
