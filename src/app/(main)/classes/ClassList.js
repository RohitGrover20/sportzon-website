import React from "react";
import ClassesCard from "@/components/Cards/ClassesCard";

function ClassList(props) {
  const classes = props && props.classes;

  return (
    <div>
      <ul
        className="nav nav-tabs"
        id="myTab"
        role="tablist"
        style={{ margin: "20px" }}
      >
        <li
          className="nav-item fs-2"
          role="presentation"
          style={{ fontSize: "200px" }}
        >
          <button
            className="nav-link active"
            id="inSchool-tab"
            data-bs-toggle="tab"
            data-bs-target="#inSchool"
            type="button"
            role="tab"
            aria-controls="inSchool"
            aria-selected="true"
            style={{ fontSize: "15px" }}
          >
            <i className="fa-solid fa-school"></i> In School Classes
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="afterSchool-tab"
            data-bs-toggle="tab"
            data-bs-target="#afterSchool"
            type="button"
            role="tab"
            aria-controls="afterSchool"
            aria-selected="false"
            style={{ fontSize: "15px" }}
          >
            <i className="fa fa-clock-o"></i> After School Classes
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="inSchool"
          role="tabpanel"
          aria-labelledby="inSchool-tab"
        >
          <div className="row">
            {classes &&
              classes?.map((item, index) => {
                if (item.classType === "inSchool") {
                  return (
                    <div className="col-sm-4" key={index}>
                      <ClassesCard class={item} />
                    </div>
                  );
                }
                return null;
              })}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="afterSchool"
          role="tabpanel"
          aria-labelledby="afterSchool-tab"
        >
          <div className="row">
            {classes &&
              classes?.map((item, index) => {
                if (item.classType === "afterSchool") {
                  return (
                    <div className="col-sm-4" key={index}>
                      <ClassesCard class={item} />
                    </div>
                  );
                }
                return null;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassList;
