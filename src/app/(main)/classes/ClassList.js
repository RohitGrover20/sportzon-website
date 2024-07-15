import React from "react";
import ClassesCard from "@/components/Cards/ClassesCard";

function ClassList(props) {
  const classes = props && props.classes;

  return (
    <div>
      <div className="row">
            {classes &&
              classes?.map((item, index) => {
                  return (
                    <div className="col-sm-4" key={index}>
                      <ClassesCard class={item} />
                    </div>
                  );
              })}
          </div>
    </div>
  );
}

export default ClassList;
