import React, { useState, useEffect } from "react";
import "./Subject.scss";

import ListSubject from "../../../components/AdminComponents/Subjects/ListSubject/ListSubject";
import { getSubjects } from "../../../api/subject";

export default function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [reloadSubjects, setReloadSubjects] = useState(false);

  useEffect(() => {
    getSubjects().then((response) => {
      console.log(response);
      setSubjects(response.subjects);
    });

    setReloadSubjects(false);
  }, [reloadSubjects]);

  return (
    <div>
      <ListSubject subjects={subjects} setReloadSubjects={setReloadSubjects} />
    </div>
  );
}
