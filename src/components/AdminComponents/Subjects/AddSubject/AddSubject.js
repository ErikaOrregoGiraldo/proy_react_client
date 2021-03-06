import React, { useState } from "react";
import { Form, Input, Button, Row, Col, notification } from "antd";
import { BookOutlined } from "@ant-design/icons";
import "./AddSubject.scss";
import { addSubjectData } from "../../../../api/subject";

export default function EditSubject(props) {
  const { setIsVisibleModal, setReloadSubjects } = props;
  const [subjectData, setSubjectData] = useState({});

  const addSubject = (event) => {
    event.preventDefault();

    if (
      !subjectData.department ||
      !subjectData.academic_activity ||
      !subjectData.activity_code ||
      !subjectData.number_credits ||
      !subjectData.piaa_version ||
      !subjectData.theory_hours ||
      !subjectData.offsite_hours ||
      !subjectData.hoursnon_attendance_reprovals ||
      !subjectData.last_chance ||
      !subjectData.duration_semester ||
      !subjectData.practical_hours ||
      !subjectData.presential_teacher_hours ||
      !subjectData.passing_score
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      addSubjectData(subjectData)
        .then((response) => {
          notification["success"]({
            message: response,
          });
          console.log(subjectData);
          setIsVisibleModal(false);
          setReloadSubjects(true);
          setSubjectData({});
        })
        .catch((err) => {
          notification["error"]({
            message: err,
          });
        });
    }
  };

  return (
    <div className="add-subject-form">
      <AddForm
        subjectData={subjectData}
        setSubjectData={setSubjectData}
        addSubject={addSubject}
      />
    </div>
  );
}

const AddForm = (props) => {
  const { subjectData, setSubjectData, addSubject } = props;

  return (
    <Form className="form-add">
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<BookOutlined />}
              placeholder="Departamento"
              value={subjectData.department}
              onChange={(e) =>
                setSubjectData({ ...subjectData, department: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<BookOutlined />}
              placeholder="Nombre"
              value={subjectData.academic_activity}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  academic_activity: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<BookOutlined />}
              placeholder="C??digo"
              value={subjectData.activity_code}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  activity_code: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<BookOutlined />}
              placeholder="Cr??ditos"
              value={subjectData.number_credits}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  number_credits: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<BookOutlined />}
              placeholder="PIAA"
              value={subjectData.piaa_version}
              onChange={(e) =>
                setSubjectData({ ...subjectData, piaa_version: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<BookOutlined />}
              placeholder="Horas te??ricas"
              value={subjectData.theory_hours}
              onChange={(e) =>
                setSubjectData({ ...subjectData, theory_hours: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<BookOutlined />}
              placeholder="Horas no presenciales"
              value={subjectData.offsite_hours}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  offsite_hours: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<BookOutlined />}
              placeholder="Inasistencias"
              value={subjectData.hoursnon_attendance_reprovals}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  hoursnon_attendance_reprovals: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<BookOutlined />}
              placeholder="Validaci??n"
              value={subjectData.last_chance}
              onChange={(e) =>
                setSubjectData({ ...subjectData, last_chance: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<BookOutlined />}
              placeholder="Duraci??n"
              value={subjectData.duration_semester}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  duration_semester: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<BookOutlined />}
              placeholder="Horas practicas"
              value={subjectData.practical_hours}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  practical_hours: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<BookOutlined />}
              placeholder="Horas presenciales"
              value={subjectData.presential_teacher_hours}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  presential_teacher_hours: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<BookOutlined />}
              placeholder="Nota aprobatoria"
              value={subjectData.passing_score}
              onChange={(e) =>
                setSubjectData({
                  ...subjectData,
                  passing_score: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="btn-submit"
          onClick={addSubject}
        >
          Crear asignatura
        </Button>
      </Form.Item>
    </Form>
  );
};
