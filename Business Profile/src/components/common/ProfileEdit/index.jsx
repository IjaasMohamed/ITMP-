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
        <label> Business Name</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Name"
          name="name"
          value={editInputs.name}
        />
        <label>Business Headline</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Headline"
          value={editInputs.headline}
          name="headline"
        />
        <label>Business Location</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="12/c Battaramulla Colombo Sri Lanka"
          name="country"
          value={editInputs.country}
        />
        <label>City</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Colombo"
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
        <label>Industry </label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Industry"
          name="industry"
          value={editInputs.industry}
        />
        
        <label>Website</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Website"
          name="website"
          value={editInputs.website}
        />
        <label>Company Description</label>
        <textarea
          placeholder="Company Description"
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
          placeholder="Cloud ERP"
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
