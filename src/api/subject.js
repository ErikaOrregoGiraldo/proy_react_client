import { basePath, apiVersion } from "./config";

export function getSubjects() {
  const url = `${basePath}/${apiVersion}/subjects`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log("error");
      return err.message;
    });
}

export function updateSubject(subject, subjectId) {
  const url = `${basePath}/${apiVersion}/updatesubject/${subjectId}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(subject),
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}

export function deleteSubject(subjectId) {
  console.log(subjectId);
  const url = `${basePath}/${apiVersion}/deleteSubject/${subjectId}`;

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result.message;
    })
    .catch((err) => {
      return err.message;
    });
}

export function addSubjectData(data) {
  const url = `${basePath}/${apiVersion}/subject`;
  /*  http://localhost:3977/api/v1/signup  */
  console.log(url);
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  /* Cuando se crea el usuario se devuelve un objeto user_creado */
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result.message;
    })
    .catch((err) => {
      return {
        subject_creado: false,
        message: err.message,
      };
    });
}
