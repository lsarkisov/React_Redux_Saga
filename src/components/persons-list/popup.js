import React from "react";
import { ModalBody } from "reactstrap";

const PersonPopUp = ({ person }) => (
  <>
    <ModalBody>
      <dl className="persons__list--popup">
        <dt className="persons__list--popup-name">{person.name}</dt>
        <dd className="persons__list--popup-phone">
          {person.phone && person.phone[0].value}
        </dd>
        <dd className="persons__list--popup-image">
          <img src="/img/avatar.png" alt="" />
        </dd>
      </dl>
      <ul className="persons__list--popup-ul">
        <li className="persons__list--popup-email">
          <strong>Email:</strong>
          <span>{person.email && person.email[0].value}</span>
        </li>
        <li className="persons__list--popup-org">
          <strong>Organization:</strong>
          <span>{person.org_name}</span>
        </li>
      </ul>
    </ModalBody>
  </>
);

export default PersonPopUp;