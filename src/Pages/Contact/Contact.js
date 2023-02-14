import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../../Utils/AxiosInstance";
import Spinner from "../../Components/Loading-Spinner/Spinner";
const Contact = () => {
    const history = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });
    const InputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputValue({ ...inputValue, [name]: value });
    };
    //axios data send to backend
    const sendData = async () => {
        try {
            const { data } = await AxiosInstance.post("/user", {
                ...inputValue,
            });
            if (data.status === "ok") {
                toast.success(data.message, {
                    position: "top-center",
                    theme: "dark",
                    autoClose: 8000,
                });
                setIsLoading(false);

                return history("/");
            }
            if (data.status === "error") {
                toast.error(data.message, {
                    position: "top-center",
                    theme: "dark",
                    autoClose: 8000,
                });
                setIsLoading(false);
            }
        } catch (error) {
            toast.error(error.message, {
                position: "top-center",
                theme: "dark",
                autoClose: 8000,
            });
            setIsLoading(false);
        }
    };
    //submit handle
    const SubmitHandler = (e) => {
        e.preventDefault();
        //Form Validation
        const { firstName, email, message } = inputValue;
        if (!firstName || !email || !message) {
            return toast.error("Fill all the Fields.", {
                position: "top-center",
                theme: "dark",
                autoClose: 5000,
            });
        }
        if (
            !email.match(
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            )
        ) {
            return toast.error("E-mail is Invalid.", {
                position: "top-center",
                theme: "dark",
                autoClose: 3000,
            });
        }
        setIsLoading(true);

        //send data to backend - axios call
        sendData();
    };

    return (
        <section className="contact-container">
            <motion.div
                className="contact-section container flex"
                initial={{
                    opacity: 0,
                }}
                transition={{
                    delay: 0,
                    type: "tween",
                    stiffness: 100,
                    duration: "1",
                }}
                whileInView={{ opacity: 1 }}
            >
                <motion.form
                    onSubmit={SubmitHandler}
                    initial={{ x: -50, opacity: 0 }}
                    transition={{
                        delay: 0.3,
                        type: "tween",
                        stiffness: 100,
                        duration: ".6",
                    }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    <div className="form-title flex">
                        <h2>Contact Us</h2>
                        <p>Let's Start a Conversation !!</p>
                    </div>
                    <div className="input-wrapper flex first-name">
                        <label htmlFor="firstName" className="required">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            onChange={InputHandler}
                            id="firstName"
                            value={inputValue.firstName}
                        />
                    </div>
                    <div className="input-wrapper flex last-name">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            onChange={InputHandler}
                            id="lastName"
                            value={inputValue.lastName}
                        />
                    </div>
                    <div className="input-wrapper flex email">
                        <label htmlFor="email" className="required">
                            E-mail
                        </label>
                        <input
                            type="email"
                            name="email"
                            onChange={InputHandler}
                            id="email"
                            placeholder="example@exaple.com"
                            value={inputValue.email}
                        />
                    </div>
                    <div className="input-wrapper flex phone">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="number"
                            name="phone"
                            onChange={InputHandler}
                            id="phone"
                            placeholder="123-456-7890"
                            value={inputValue.phone}
                        />
                    </div>
                    <div className="input-wrapper flex message">
                        <label htmlFor="message" className="required">
                            Message
                        </label>

                        <textarea
                            name="message"
                            onChange={InputHandler}
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Type a Message..."
                            value={inputValue.message}
                        ></textarea>
                    </div>
                    <div className="submit-btn flex">
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <button type="submit">Submit</button>
                        )}
                    </div>
                </motion.form>
            </motion.div>
        </section>
    );
};

export default Contact;
