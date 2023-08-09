import config from "@/config";
import axios from "axios";

const getEvents = async () => {
    try {
        const event = await axios.get(`${config.API_URL}/landing/events`);
        if (event) {
            return event.data;
        }
    }
    catch (err) {
        console.log(err)
    }
};
const getEventBySlug = async (slug) => {
    try {
        const event = await axios(`${config.API_URL}/landing/events/${slug}`);
        if (event) {
            return event && event.data;
        }
    }
    catch (err) {
        console.log(err)
    }
};

const getVenue = async () => {
    try {
        const venue = await axios(`${config.API_URL}/landing/venues`);
        if (venue) {
            return venue && venue.data;
        }
    }
    catch (err) {
        console.log(err)
    }
}
const getVenuesBySlug = async (slug) => {
    try {
        const venue = await axios(`${config.API_URL}/landing/venues/${slug}`);
        if (venue) {
            return venue && venue.data;
        }
    }
    catch (err) {
        console.log(err)
    }
};

export { getEvents, getEventBySlug, getVenue, getVenuesBySlug }