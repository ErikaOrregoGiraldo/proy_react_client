import React from "react";
import { Card } from "antd";
import "./cards.scss";
import { getAccessToken } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

export default function Admin() {
  const user = getAccessToken();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate("/admin");
    }
  });

  return (
    <div className="container">
      <div className="cards">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="modelo1"
              src="https://images.pexels.com/photos/248533/pexels-photo-248533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              style={{ height: 180 }}
            />
          }
        >
          <Meta title="Europe Street beat" description="Perfil de instagram" />
          <a href="./admin/modelo1">www.instagram.com</a>
        </Card>
      </div>

      <div className="cards">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="modelo2"
              src="https://images.pexels.com/photos/2733663/pexels-photo-2733663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              style={{ height: 180 }}
            />
          }
        >
          <Meta title="Europe Street beat" description="Perfil de facebook" />
          <a href="./admin/modelo2">www.facebook.com</a>
        </Card>
      </div>

      <div className="cards">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="modelo3"
              src="https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              style={{ height: 180 }}
            />
          }
        >
          <Meta title="Europe Street beat" description="Perfil de twitter" />
          <a href="./admin/modelo3">www.twitter.com</a>
        </Card>
      </div>
    </div>
  );
}
