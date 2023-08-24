import SearchBar from "@/components/SearchBar";
import { getClasses } from "@/libs/fetchData";
import ClassList from "./ClassList";

async function Classes() {
  const { data } = await getClasses();
  const classes = data;
  return (
    <>
      <SearchBar searchType="classes" />
      <section className="gray-simple">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10 col-md-12 col-sm-12 mb-1">
              <div className="sec-heading center">
                <div className="d-inline-flex px-4 py-1 rounded-5 text-info bg-light-info font--medium">
                  <span>Classes</span>
                </div>
                <h2>Learn a new sport and make new friends!</h2>
                <p>Find, Register and Excel in Top-notch Sports Events.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="row justify-content-center gy-xl-5 gy-lg-4 gy-5 gx-xl-5 gx-lg-4 gx-3">
              <ClassList classes={classes} />
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
}

export default Classes;
