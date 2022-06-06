/* eslint-disable no-undef */
import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signInApi } from "../../../api/user.js";
import { useNavigate } from "react-router-dom";

import "./LogIn.scss";
import {
  emailValidation,
  minLenghtValidation,
} from "../../../validations/FormValidations";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../api/constants.js";

export default function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
  });
  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const inputValidation = (e) => {
    const { type, name } = e.target;
    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target) });
    }
    if (type === "password") {
      setFormValid({ ...formValid, [name]: minLenghtValidation(e.target, 6) });
    }
  };

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/admin");
  };

  const login = async (e) => {
    e.preventDefault();
    const emailVal = inputs.email;
    const passwordVal = inputs.password;

    if (!emailVal || !passwordVal) {
      notification["error"]({
        message: "Todos los campos son obligatorios",
      });
    } else {
      const result = await signInApi(inputs);
      if (!result.accessToken) {
        notification["error"]({
          message: result.message,
        });
      } else {
        notification["success"]({
          message: result.message,
        });
        const { accessToken, refreshToken } = result;
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);

        redirect();
      }
    }
  };

  return (
    <Form className="login-form" onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.email}
        ></Input>
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.password}
        ></Input>
      </Form.Item>
      <Button
        type="primary"
        shape="round"
        onClick={login}
        className="login-form__button"
      >
        LogIn
      </Button>
    </Form>
  );
}
