import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { editProfile } from "../../../api/FirestoreAPI";
import "./index.scss";

export default function ProfileEdit({ onEdit, currentUser }) {
  const [editInputs, setEditInputs] = useState(currentUser);
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfileData = async () => {
    await editProfile(currentUser?.id, editInputs);
    await onEdit();
  };

  return (
    <div className="profile-card">
      <div className="edit-btn">
        <AiOutlineClose className="close-icon" onClick={onEdit} size={25} />
      </div>

      <div className="profile-edit-inputs">
        <label>Name</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Name"
          name="name"
          value={editInputs.name}
        />
        <label>Headline</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Headline"
          value={editInputs.headline}
          name="headline"
        />
        <label>Country</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Country"
          name="country"
          value={editInputs.country}
        />
        <label>City</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="City"
          name="city"
          value={editInputs.city}
        />
        <label>Company</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Company"
          value={editInputs.company}
          name="company"
        />
        <label>Expertise Area </label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Expertise Area"
          name="industry"
          value={editInputs.industry}
        />
        <label>Qualifications</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Qualifications"
          name="college"
          value={editInputs.college}
        />
        <label>Contact Information</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Contact Information"
          name="website"
          value={editInputs.website}
        />
        <label>Experience</label>
        <textarea
          placeholder="Experience"
          className="common-textArea"
          onChange={getInput}
          rows={5}
          name="aboutMe"
          value={editInputs.aboutMe}
        />
        <label>Services Offered</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Services Offered"
          name="skills"
          value={editInputs.skills}
        />
        <label>Skills</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Skill"
          name="skills"
          value={editInputs.skills}
        />
      </div>
      <div className="save-container">
        <button className="save-btn" onClick={updateProfileData}>
          Save
        </button>
      </div>
    </div>
  );
}
