import React, { useState } from "react";
import { Button, Form, Input, Select, Row, Col, notification } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { signInApi } from "../../../api/user";
import { getAccessToken } from "../../../api/auth";
import "./AddUser.scss";

export default function AddUser(props) {
  const { setVisibleModal, setReloadUser } = props;
  const [userData, setUserData] = useState({});
  const accessToken = getAccessToken();
  const addUser = (event) => {
    // Validar si el usuario no existe para poderlo crear
    !userData.name_user ||
    !userData.last_name ||
    !userData.email ||
    !userData.password ||
    !userData.repeatPassword ||
    !userData.role
      ? notification["error"]({
          message: "Todos los campos deben ser diligenciados",
        })
      : userData.password !== userData.repeatPassword
      ? //   validamos contraseñas
        notification["error"]({
          message: "Las contraseñas no coinciden",
        })
      : // Si las contraseñas coinciden debemos consultar al accesToken y el payLoad
        signInApi(accessToken, userData)
          .then((result) => {
            notification["success"]({
              message: result,
            });
            setVisibleModal(false);
            setReloadUser(true);
            setUserData({});
          })
          .catch((err) => {
            notification["error"]({
              message: err,
            });
          });
  };
  return (
    <div>
      <AddForm>
        userData = {userData}
        setUserData = {setUserData}
        addUser = {addUser}
      </AddForm>
    </div>
  );
}

const AddForm = (props) => {
  const { userData, setUserData, addUser } = props;
  // Trabajar con una lista desplegable
  const { Option } = Select;
  // Formulario completo
  return <Form>{/* crear formulario */}</Form>;
};
