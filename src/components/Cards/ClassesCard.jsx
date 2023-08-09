import React from 'react'

function ClassesCard() {
    return (
        <div className="priocs rounded-0 bg-white p-3 m-1" style={{ border: "3px solid #eee" }}>
            <div className="zoom-effect-wrapper">
                <div className="zoom-effect-img">
                    <img
                        src="https://guardian.ng/wp-content/uploads/2019/03/sport-equipment-e1555707764770.jpeg"
                        className="img-fluid rounded-4"
                        alt="Image"
                    />
                </div>
            </div>
            {/* <div className="col-xl-12 col-lg-12 col-md-12 col-xl-12 px-xl-12"> */}
            {/* Top Item */}
            <div className="d-flex align-items-center pt-3 py-2">
                <span className="label bg-light-orange font--medium text-orange me-3">
                    <i className='fa fa-map-pin' /> Delhi, India
                </span>
                {/* <span className="font--medium">V00273124</span> */}
            </div>
            {/* Item Title */}
            <h5 className="pb-1 mb-2 lh-base">Blue Headphones</h5>
            <p className="mb-2">
                The toppings you may chose for that TV dinner pizza slice when you forgot to
                shop for foods, the paint you may slap on your face.
            </p>
            {/* Item Rate & review */}
            <div className="d-flex align-items-center mb-4">
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center small">
                        <span className="fa-solid fa-star text-warning me-1" />
                        <span className="fa-solid fa-star text-warning me-1" />
                        <span className="fa-solid fa-star text-warning me-1" />
                        <span className="fa-solid fa-star text-warning me-1" />
                        <span className="fa-solid fa-star text-muted" />
                    </div>
                    <div className="edlois">
                        <strong className="fw-semibold ms-2">4.6</strong>
                    </div>
                </div>
            </div>
            {/* Item price */}

            {/* Color Selector */}
            <div className="h6">
                <i className='fa fa-user' /> Trainer: <span className="text-muted ms-1">Mr. Mahesh Kumar</span>
            </div>
            {/* <div className="d-flex"> */}
            <div className="d-flex align-items-center justify-content-between p-0" style={{ justifyContent: "between" }}>
                <div className="edlois">
                    <small className='text-success'>Monthly</small>
                    <div className="h3 fw-semibold text-dark">$79.00</div>
                </div>
                <button className="btn btn-primary btn-md me-2" type="button">
                    <i className="fa-solid fa-file me-2 ms-n1" />
                    Join Now
                </button>
            </div>
            {/* </div> */}

        </div>
    )
}

export default ClassesCard