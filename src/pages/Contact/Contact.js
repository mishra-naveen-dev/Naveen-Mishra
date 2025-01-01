import React, { useState, useCallback, useMemo } from "react";
import "./Contact.css";
import img1 from "../../images/contactme.webp";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import debounce from "lodash.debounce";

const Contact = React.memo(() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    msg: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const debouncedHandleChange = useMemo(() => debounce(handleChange, 300), []);

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    }

    if (!formData.msg.trim()) {
      newErrors.msg = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (validateForm()) {
        try {
          const response = await fetch(
            "https://portfolio-mern-backend-5gi7.onrender.com/api/contact",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );

          const data = await response.json();

          if (response.ok) {
            setFormData({
              name: "",
              email: "",
              mobile: "",
              msg: "",
            });

            setErrors({});

            setSuccessMessage(true);
            setTimeout(() => {
              setSuccessMessage(false);
              window.location.reload();
            }, 35000); // 35 seconds
          } else {
            console.error("Error response:", data);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    },
    [formData, validateForm]
  );

  const memoizedFormData = useMemo(() => formData, [formData]);

  return (
    <>
      <div id="contact" className="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src={img1}
                    alt="contact"
                    className="image"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h5>
                      Contact With{" "}
                      <FaLinkedin color="blue" size={33} className="ms-2" />
                      <FaGithub color="black" size={33} className="ms-2" />
                      <BsInstagram color="red" size={33} className="ms-2" />
                    </h5>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your Name"
                          className={`form-control ${
                            errors.name ? "is-invalid" : ""
                          }`}
                          value={memoizedFormData.name}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">{errors.name}</div>
                        )}
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your Email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          value={memoizedFormData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                      <div className="mb-3">
                        <input
                          type="mobile"
                          name="mobile"
                          placeholder="Enter your Contact no."
                          className={`form-control ${
                            errors.mobile ? "is-invalid" : ""
                          }`}
                          value={memoizedFormData.mobile}
                          onChange={handleChange}
                        />
                        {errors.mobile && (
                          <div className="invalid-feedback">
                            {errors.mobile}
                          </div>
                        )}
                      </div>
                      <div className="mb-3">
                        <textarea
                          type="text"
                          name="msg"
                          placeholder="Enter your Message"
                          className={`form-control ${
                            errors.msg ? "is-invalid" : ""
                          }`}
                          value={memoizedFormData.msg}
                          onChange={handleChange}
                        />
                        {errors.msg && (
                          <div className="invalid-feedback">{errors.msg}</div>
                        )}
                      </div>
                      <div className="row px-3">
                        <button className="button" type="submit">
                          SEND
                        </button>
                      </div>
                    </form>
                    {successMessage && (
                      <div className="alert alert-success mt-3 success-alert">
                        Message sent successfully!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Contact;
