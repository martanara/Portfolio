import React, { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import Wrapper from "components/Wrapper";
import { StyledContact } from "./Contact.styles";

const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const emailjsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const adminEmail = process.env.REACT_APP_MY_EMAIL;

const Contact = () => {
    const [buttonState, setButtonState] = useState<string>("Send Message");

    const formik = useFormik({
        //we have created our initailValues object in a format EmailJS accepts
        initialValues: {
            from_name: "", //user name
            to_name: adminEmail, //email id of the admin
            subject: "", // subject of email
            reply_to: "", // user email
            message: "", // message of email
        },
        validationSchema: Yup.object({
            from_name: Yup.string().required("* Name field is required"),
            subject: Yup.string().required("* Subject field is required"),
            reply_to: Yup.string()
                .email("Invalid email address")
                .required("* Email field is required")
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Is not in correct format"),
            message: Yup.string().required("* Message field is required"),
        }),
        onSubmit: (values) => {
            if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
                emailjs.send(emailjsServiceId, emailjsTemplateId, values, emailjsPublicKey).then(
                    function (response) {
                        console.log("SUCCESS!", response.status, response.text);
                        setButtonState("Send Email");
                        formik.resetForm();
                    },
                    function (err) {
                        console.log("FAILED...", err);
                        setButtonState("Send Email");
                        formik.resetForm();
                    }
                );
            }
        },
    });

    return (
        <React.Fragment>
            <StyledContact>
                <Wrapper>
                    <h2>01. Contact</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <div className="col-12 col-md-4">
                                <label htmlFor="from_name" />
                                <input
                                    id="from_name"
                                    name="from_name"
                                    type="text"
                                    autoComplete="off"
                                    placeholder="YOUR NAME"
                                    onChange={formik.handleChange}
                                    value={formik.values.from_name}
                                />
                                <div className={`expandable ${formik.touched.from_name && formik.errors.from_name ? "show" : ""}`}>
                                    {formik.errors.from_name}
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <label htmlFor="subject" />
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    autoComplete="off"
                                    placeholder="SUBJECT"
                                    onChange={formik.handleChange}
                                    value={formik.values.subject}
                                />
                                <div className={`expandable ${formik.touched.subject && formik.errors.subject ? "show" : ""}`}>
                                    {formik.errors.subject}
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <label htmlFor="reply_to" />
                                <input
                                    id="reply_to"
                                    type="email"
                                    name="reply_to"
                                    placeholder="YOUR EMAIL"
                                    autoComplete="off"
                                    onChange={formik.handleChange}
                                    value={formik.values.reply_to}
                                />
                                <div className={`expandable ${formik.touched.reply_to && formik.errors.reply_to ? "show" : ""}`}>
                                    {formik.errors.reply_to}
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="message" />
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="YOUR MESSAGE"
                                    autoComplete="off"
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                />
                                <div className={`expandable ${formik.touched.message && formik.errors.message ? "show" : ""}`}>
                                    {formik.errors.message}
                                </div>
                            </div>
                            <div className="col-12">
                                <button disabled={formik.isSubmitting} type="submit" className="btn main-btn">
                                    <span>{buttonState}</span>
                                </button>
                            </div>
                            <div className="col-12 form-message">
                                <span id="output" className="output_message text-center text-uppercase" />
                            </div>
                        </div>
                    </form>
                </Wrapper>
            </StyledContact>
        </React.Fragment>
    );
};

export default Contact;
