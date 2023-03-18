import React, { useState } from "react";

import { Formik, Form, Field, FieldInputProps, FormikProps, FieldMetaProps } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import Wrapper from "components/Wrapper";
import { StyledContact, Input, TextArea, FormDiv, ErrorMessage } from "./Contact.styles";
import Button from "components/Button";

const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const emailjsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const adminEmail = process.env.REACT_APP_MY_EMAIL;

const Contact = () => {
    const [buttonState, setButtonState] = useState<string>("Send Message");

    const validationSchema = Yup.object().shape({
        from_name: Yup.string().required("* Name field is required"),
        subject: Yup.string().required("* Subject field is required"),
        reply_to: Yup.string()
            .email("Invalid email address")
            .required("* Email field is required")
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Is not in correct format"),
        message: Yup.string().required("* Message field is required"),
    });

    const handleSubmit = (values: any) => {
        if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
            emailjs.send(emailjsServiceId, emailjsTemplateId, values, emailjsPublicKey).then(
                function (response) {
                    setButtonState("Send Message");

                    return response?.status;
                },
                function (err) {
                    setButtonState("Send Message");

                    return err?.status;
                }
            );
        }
    };

    interface FieldProps<V = any> {
        field: FieldInputProps<V>;
        form: FormikProps<V>; // if ppl want to restrict this for a given form, let them.
        meta: FieldMetaProps<V>;
    }

    const CustomInput = ({ field, form, ...props }: FieldProps) => {
        return <Input {...field} {...props} />;
    };

    const CustomTextArea = ({ field, form, ...props }: FieldProps) => {
        return <TextArea {...field} {...props} />;
    };

    return (
        <React.Fragment>
            <StyledContact>
                <Wrapper>
                    <h2>01. Contact</h2>
                    <Formik
                        initialValues={{
                            from_name: "", //user name
                            to_name: adminEmail, //email id of the admin
                            subject: "", // subject of email
                            reply_to: "", // user email
                            message: "", // message of email
                        }}
                        validationSchema={validationSchema}
                        validateOnChange={false}
                        validateOnBlur={false}
                        onSubmit={(values, { resetForm }) => {
                            setButtonState("Submitting...");
                            handleSubmit(values);

                            setTimeout(() => {
                                console.log("clean");
                                resetForm();
                            }, 3000);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <FormDiv>
                                    <Field name="from_name" placeholder="Name" component={CustomInput} />
                                    <ErrorMessage>
                                        {errors.from_name && touched.from_name ? <div>{errors.from_name}</div> : null}
                                    </ErrorMessage>
                                </FormDiv>
                                <FormDiv>
                                    <Field name="subject" placeholder="Subject" component={CustomInput} />
                                    {errors.subject && touched.subject ? <div>{errors.subject}</div> : null}
                                </FormDiv>
                                <FormDiv>
                                    <Field name="reply_to" placeholder="Email" component={CustomInput} />
                                    {errors.reply_to && touched.reply_to ? <div>{errors.reply_to}</div> : null}
                                </FormDiv>
                                <FormDiv>
                                    <Field name="message" placeholder="Message" component={CustomTextArea} />
                                    {errors.message && touched.message ? <div>{errors.message}</div> : null}
                                </FormDiv>
                                <FormDiv>
                                    <Button type="submit">{buttonState}</Button>
                                </FormDiv>
                            </Form>
                        )}
                    </Formik>
                </Wrapper>
            </StyledContact>
        </React.Fragment>
    );
};

export default Contact;
