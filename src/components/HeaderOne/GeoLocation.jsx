import { useEffect, useState } from 'react'
import Link from 'next/link';

const GeoLocation = () => {
    const [region, setRegion] = useState();
    const [location, setLocation] = useState({ latitude: "", longitude: "" });

    const fetchApiData = async ({ latitude, longitude }) => {
        var res = await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + latitude + '&longitude=' + longitude + '& localityLanguage=en');
        // var res = await fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + '%2C' + longitude + '&key=AIzaSyA-W7tIj7uPoxd9yZ7OrkIod_6hOM2L3Bc&sensor=false');
        const data = await res.json();
        console.log(data)
        setRegion(data);
    };

    useEffect(() => {
        if ('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                console.log(latitude)
                setLocation({ latitude: latitude, longitude: longitude });
            })
        }
    }, []);

    useEffect(() => {
        if (location) {
            fetchApiData(location);
        }
    }, [location]);

    return (
        <>
            {region ? <li className='text-white me-5'><i className='fa fa-map-marker me-1' />{region && region.locality}, {region && region.city}</li> : null}
        </>
    );
};

export default GeoLocation