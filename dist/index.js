import { getAddress } from "./getAddress.js";
import { map } from "./map.js";
import { setAddress } from "./setAddress.js";
document.addEventListener('DOMContentLoaded', () => {
    map(40.712776, -73.935242, 'Brooklyn', 'NY');
    const trackerInput = document.querySelector('#tracker--input');
    const trackerBtn = document.querySelector('#tracker--btn');
    const errorSpan = document.querySelector('#show--error');
    trackerBtn.addEventListener('click', async () => {
        if (trackerInput.value === '') {
            trackerInput.classList.add('error');
            errorSpan.classList.add('visible');
            errorSpan.textContent = 'Invalid IP';
            return;
        }
        else {
            trackerInput.classList.remove('error');
            errorSpan.classList.remove('visible');
            errorSpan.textContent = '';
        }
        const data = await getAddress(trackerInput.value);
        const ip = data.ip;
        const isp = data.isp;
        const city = data.location.city;
        const country = data.location.country;
        const region = data.location.region;
        const timezone = data.location.timezone;
        const lat = data.location.lat;
        const lng = data.location.lng;
        setAddress(ip, city, country, region, timezone, isp);
        map(lat, lng, region, country);
    });
});
