import React from "react";
import { Alert } from "react-bootstrap";

const CustomAlert = ({ data, setData }) => {
  const emptyData = {
    show: false,
    heading: "",
    content: "",
    variant: "primary",
  };

  const handleConfirm = () => {
    if (data.reload) {
      window.location.reload();
    } else {
      setData(emptyData);
    }
  };

  return !data.show ? null : (
    <div
      className="position-fixed w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 9999 }}
    >
      <div className="position-absolute" style={{ zIndex: 10000 }}>
        <Alert variant={data?.variant} className="alert-lg">
          <Alert.Heading>{data?.heading}</Alert.Heading>
          <p>{data.content}</p>
          <button
            className={`btn w-100 btn-${data?.variant}`}
            onClick={handleConfirm}
          >
            Confirmar
          </button>
        </Alert>
      </div>
    </div>
  );
};

export default CustomAlert;
