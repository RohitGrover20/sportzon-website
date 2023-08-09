const handleOpenRazorpay = (data) => {
    var options = {
        "key": "rzp_test_UX09CkpYTnoeB5", // Enter the Key ID generated from the Dashboard
        "amount": Number(data.amount * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": data.currency,
        "name": "Sportzon",
        "description": "Description of the purchase item shown on the Checkout form. It should start with an alphanumeric character.",
        "image": "http://localhost:8080/assets/img/logo/fav-color.png",
        "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        // "callback_url": "",
        "prefill": {
            "name": data.values && data.values.fullName,
            "email": data.values && data.values.email,
            "contact": data.values && data.values.mobile,
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#ff611a"
        },
        handler: function (response) {
            axios.post(`${config.API_URL}/landing/payments/verify`, { response: response, data: data.values }, { withCredentials: true })
                .then(res => {
                    toast.success(res.data && res.data && res.data.message, {
                        position: "top-right",
                        autoClose: 2000,
                        onClose: () => {
                            setLoader(false)
                            // setSubmitting(false);
                            // resetForm(true);
                            const closeBtn = document && document.getElementById("registrationClose")
                            closeBtn.click()
                        },
                    })
                })
                .catch(err => {
                    setLoader(false)
                    console.log(err, "sdfsd")
                })
        }
    };
    var rzp = new window.Razorpay(options);
    // rzp.on('payment.failed', function (response) {
    //     toast.error(response.error.reason, {
    //         position: "top-right",
    //         autoClose: 2000,
    //         onClose: () => {
    //             setLoader(false)
    //             setSubmitting(false);
    //             resetForm(true);
    //             // const closeBtn = document && document.getElementById("registrationClose")
    //             // closeBtn.click()
    //         },
    //     })
    //     // alert(response.error.code);
    //     // alert(response.error.description);
    //     // alert(response.error.source);
    //     // alert(response.error.step);
    //     // alert(response.error.reason);
    //     // alert(response.error.metadata.order_id);
    //     // alert(response.error.metadata.payment_id);
    // });
    rzp.open()

}

export { handleOpenRazorpay }