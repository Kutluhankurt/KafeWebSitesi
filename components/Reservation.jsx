import React from "react";
import Input from "@/components/Input";
import Title from "./ui/Title";
import { useFormik } from "formik";
import { reservationSchema } from "../schema/reservation";
{
}
function Reservation() {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
    };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        persons: "",
        date: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
    });


    const inputs = [
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "İsim Soyisim",
            value: values.fullName,
            errorMessage: errors.fullName,
            touched: touched.fullName,    
        },
        {
            id: 2,
            name: "phoneNumber",
            type: "number",
            placeholder: "Telefon Numaranız",
            value: values.phoneNumber,
            errorMessage: errors.phoneNumber,
            touched: touched.phoneNumber,
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "E-mail Adresiniz",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 4,
            name: "persons",
            type: "number",
            placeholder: "Kişi Sayısı",
            values: values.persons,
            errorMessage: errors.persons,
            touched: touched.persons,
        },
        {
            id: 5,
            name: "date",
            type: "datetime-local",
            values: values.date,
            errorMessage: errors.date,
            touched: touched.date,
        },
    ];

    return (
        <div className="container mx-auto py-12">
            <Title addClass="text-[40px] mb-10">Rezervasyon</Title>
            <div className="flex justify-between flex-wrap-reverse gap-10">
                <form className="lg:flex-1 w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-y-3">
                        {inputs.map((input) => (
                             <Input
                             key={input.id}
                             {...input}
                             onChange={handleChange}
                             onBlur={handleBlur}
                           />
                        ))}
                    </div>
                    <button className="btn-primary mt-4" type="submit">
                        REZERVE ET
                    </button>
                </form>
                <div className="lg:flex-1 w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.2130544660263!2d29.210754575834024!3d40.93299757136124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac5213fae3b87%3A0x7df1b1a07a423ce5!2sGlob%20Coffee!5e0!3m2!1str!2str!4v1681928927464!5m2!1str!2str"
                        width="450" height="450" allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Reservation;