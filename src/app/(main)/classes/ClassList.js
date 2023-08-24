import ClassesCard from "@/components/Cards/ClassesCard";
import React from "react";

function ClassList(props) {
  const classes = props && props.classes;
  return (
    <>
      {classes &&
        classes.map((item, index) => {
          return (
            <div className="col-sm-4 p-0" key={index}>
              <ClassesCard class={item} />
            </div>
          );
        })}
    </>
  );
}

export default ClassList;
