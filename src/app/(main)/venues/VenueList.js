import SimpleCard from "@/components/Cards/SimpleCard";
import React from "react";

export const revalidate = 10;
function VenueList(props) {
  const venues = props && props.venues;
  return (
    <>
      {venues &&
        venues.map((item, index) => {
          return (
            <div className="col-sm-3 p-0" key={index}>
              <SimpleCard item={item} />
            </div>
          );
        })}
    </>
  );
}

export default VenueList;
