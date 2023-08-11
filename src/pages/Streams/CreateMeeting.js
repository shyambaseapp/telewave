import React from "react";
import { v1 as uuid } from "uuid";
import { Link } from "react-router-dom";

const CreateMeeting = (props) => {
  const id = uuid();

  return (
    <div className="mt-5">
      <Link className="btn btn-outline-primary btn-lg" to={`/room/${id}`}>
          Create Meeting
      </Link>
    </div>
  );
};

export default CreateMeeting;
