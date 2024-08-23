import config from "@/config";
import axios from "axios";
import { cache } from "react";

const getEvents = cache(async () => {
  try {
    const event = await axios.get(`${config.API_URL}/landing/events`);
    if (event) {
      return event.data;
    }
  } catch (err) {
    console.log(err);
  }
});

const getEventBySlug = cache(async (slug) => {
  try {
    const event = await axios.get(`${config.API_URL}/landing/events/${slug}`);
    if (event) {
      return event && event.data;
    }
  } catch (err) {
    console.log(err);
  }
});
const getClassBySlug = cache(async (slug) => {
  try {
    const classes = await axios.get(
      `${config.API_URL}/landing/classes/${slug}`
    );
    if (classes) {
      return classes && classes.data;
    }
  } catch (err) {
    console.log(err);
  }
});

const getVenue = cache(async () => {
  try {
    const venue = await axios.get(`${config.API_URL}/landing/venues`);
    if (venue) {
      return venue && venue.data;
    }
  } catch (err) {
    console.log(err);
  }
});

const getVenuesBySlug = cache(async (slug) => {
  try {
    const venue = await axios.get(`${config.API_URL}/landing/venues/${slug}`);
    if (venue) {
      return venue && venue.data;
    }
  } catch (err) {
    console.log(err);
  }
});
const getCoachById = cache(async (id) => {
  try {
    const coach = await axios.get(`${config.API_URL}/landing/coaches/${id}`);
    if (coach) {
      return coach && coach.data;
    }
  } catch (err) {
    console.log(err);
  }
});
const getClassesByCoach = cache(async (id) => {
  try {
    const classes = await axios.get(
      `${config.API_URL}/landing/classes/coach/${id}`
    );
    if (classes) {
      return classes && classes.data;
    }
  } catch (err) {
    console.log(err);
  }
});

const getHomeBanner = cache(async () => {
  try {
    const banners = await axios.get(`${config.API_URL}/landing/banners`, {
      withCredentials: true,
    });
    if (banners) {
      return banners && banners.data;
    }
  } catch (err) {
    console.log(err);
  }
});
const getClasses = cache(async () => {
  try {
    const classes = await axios.get(`${config.API_URL}/landing/classes`, {
      withCredentials: true,
    });
    if (classes) {
      return classes && classes.data;
    }
  } catch (err) {
    console.log(err);
  }
});

const getSubscriptionPlan = cache(async () => {
  try {
    const subscription = await axios.get(`${config.API_URL}/landing/subscription`);
    if (subscription) {
      return subscription && subscription?.data;
    }
  } catch (err) {
    console.log(err);
  }
});

const getTestimonials = cache(async () => {
  try {
    const testimonials = await axios.get(
      `${config.API_URL}/landing/testimonials`,
      {
        withCredentials: true,
      }
    );
    if (testimonials) {
      return testimonials && testimonials.data;
    }
  } catch (err) {
    console.log(err);
  }
});

const getArenaRating = cache(async (values) => {
  const arena = values?.arena;
  try {
    const rating = await axios.post(`${config.API_URL}/landing/rating/get`, {
      type: "Arena",
      arena: arena,
    });
    if (rating) {
      return rating && rating.data;
    }
  } catch (err) {
    console.log(err);
  }
});

export {
  getEvents,
  getEventBySlug,
  getVenue,
  getVenuesBySlug,
  getHomeBanner,
  getClasses,
  getClassBySlug,
  getCoachById,
  getClassesByCoach,
  getTestimonials,
  getArenaRating,
  getSubscriptionPlan,
};
