import ClassesCard from "@/components/Cards/ClassesCard";
import { getClassesByCoach } from "@/libs/fetchData";
import React from "react";

export const revalidate = 10;
async function ClassesByCoaches(props) {
  const coachId = props && props.id;
  const getClasses = await getClassesByCoach(coachId);
  const data = getClasses?.data;
  return (
    <>
      <section className="pt-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-7 col-md-11 mb-3">
              <div className="sec-heading text-center">
                <div className="label text-success bg-light-success d-inline-flex rounded-4 mb-2 font--medium">
                  <span>Classes by Coach</span>
                </div>
                <h2 className="mb-1">
                  Learn from the Best: Train with Our Experienced Coaches!
                </h2>
                <p className="test-muted fs-6">
                  Our coaches are experts in their field and have a passion for
                  teaching. They will help you reach your full potential and
                  achieve your goals.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-xl-3 g-lg-3 g-4 justify-content-center">
            {data &&
              data.map((item, index) => {
                return (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-6"
                    key={index}
                  >
                    <ClassesCard class={item} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ClassesByCoaches;
