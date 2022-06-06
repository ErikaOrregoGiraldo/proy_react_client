import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signUpApi } from "../../../api/user.js";
import "./Register.scss";
import {
  emailValidation,
  minLenghtValidation,
} from "../../../validations/FormValidations";

export default function RegisterForm() {
  const [inputs, setInputs] = useState({
    name_user: "",
    last_name: "",
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });
  const [formValid, setFormValid] = useState({
    name_user: false,
    last_name: false,
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  });

  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    }
  };

  const inputValidation = (e) => {
    const { type, name } = e.target;

    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target) });
    }
    if (type === "password") {
      setFormValid({ ...formValid, [name]: minLenghtValidation(e.target, 6) });
    }
    if (type === "name_user") {
      setFormValid({ ...formValid, [name]: minLenghtValidation(e.target, 3) });
    }
    if (type === "last_name") {
      setFormValid({ ...formValid, [name]: minLenghtValidation(e.target, 3) });
    }
    if (type === "checkbox") {
      setFormValid({ ...formValid, [name]: e.target.checked });
    }
  };

  const register = async (e) => {
    e.preventDefault();
    const nameUserVal = inputs.name_user;
    const lastNameVal = inputs.last_name;
    const emailVal = inputs.email;
    const passwordVal = inputs.password;
    const repeatPasswordVal = inputs.repeatPassword;
    const privacyPolicyVal = inputs.privacyPolicy;

    if (
      !emailVal ||
      !passwordVal ||
      !repeatPasswordVal ||
      !privacyPolicyVal ||
      !nameUserVal ||
      !lastNameVal
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios",
      });
    } else {
      if (passwordVal !== repeatPasswordVal) {
        notification["error"]({
          message: "Las contraseñas tienen que ser iguales.",
        });
      } else {
        const result = await signUpApi(inputs);
        console.log(result);
        if (!result.user_creado) {
          notification["error"]({
            message: result.message,
          });
        } else {
          notification["success"]({
            message: result.message,
          });
          resetForm();
        }
      }
    }
  };

  const resetForm = () => {
    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error");
    }

    setInputs({
      name_user: "",
      last_name: "",
      email: "",
      password: "",
      repeatPassword: "",
      privacyPolicy: false,
    });

    setFormValid({
      name_user: false,
      last_name: false,
      email: false,
      password: false,
      repeatPassword: false,
      privacyPolicy: false,
    });
  };

  return (
    <Form className="register-form" onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="text"
          name="name_user"
          placeholder="Nombre"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.name_user}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="text"
          name="last_name"
          placeholder="Apellidos"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.last_name}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.email}
        />
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
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Repetir contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox
          name="privacyPolicy"
          onChange={inputValidation}
          checked={inputs.privacyPolicy}
        >
          He leído y acepto la política de privacidad.
        </Checkbox>
      </Form.Item>
      <Button
        type="primary"
        shape="round"
        onClick={register}
        className="register-form__button"
      >
        Crear cuenta
      </Button>
    </Form>
  );
}
