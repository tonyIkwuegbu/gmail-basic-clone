import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Login from "./Login";

function Persondetail() {
  const [isLogged, setLogged] = useState(false);

  const personaldetail = useSelector((store) => store.personalDetail);

  const {
    id_picture,
    enrollment_id,
    full_name,
    gender,
    date_of_birth,
    blood_group,
    genotype,
    marital_status,
    ward,
    lga,
    phone_number,
    occupation,
    emergency_contact,
    emergency_contact_phone_number,
    relationship_with_emergency_contact,
    category,
  } = personaldetail || {};

  const login = () => {
      setLogged(true);
  }

const url =
"https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-avatar-icon-png-image_313572.jpg";

  return (
    <Wrapper>

{!isLogged? <Login title="Sign In"
      login = {login} /> : 
      
 <>
      <h3>BHCPF Beneficiary Details : </h3>

      {id_picture && (
        <div>
          <img
            src={id_picture}
            alt={full_name}
            onError={(e) => ((e.target.onerror = null), (e.target.src = url))}
          />
        </div>
      )}
      <table cellPadding="5">
        <thead>
          <td></td>
          <td></td>
        </thead>
        <tbody>
          {enrollment_id && (
            <tr>
              <th>Enrollment_id: </th>
              <td>
                {" "}
                <b>{enrollment_id}</b>
              </td>
            </tr>
          )}

          {full_name && (
            <tr>
              <th>Name:</th>
              <td>
                <b>{full_name}</b>
              </td>
            </tr>
          )}

          {gender && (
            <tr>
              <th>Gender:</th>
              <td>
                <b>{gender}</b>
              </td>
            </tr>
          )}

          {date_of_birth && (
            <tr>
              <th>Date_of_birth:</th>
              <td>
                <b>{date_of_birth}</b>
              </td>
            </tr>
          )}

          {blood_group && (
            <tr>
              <th>Blood_group:</th>
              <td>
                {" "}
                <b>{blood_group}</b>
              </td>
            </tr>
          )}

          {genotype && (
            <tr>
              <th>Genotype:</th>
              <td>
                {" "}
                <b>{genotype}</b>
              </td>
            </tr>
          )}

          {marital_status && (
            <tr>
              <th>Marital_status:</th>
              <td>
                {" "}
                <b>{marital_status}</b>
              </td>
            </tr>
          )}

          {ward && (
            <tr>
              <th>Ward:</th>
              <td>
                {" "}
                <b>{ward}</b>
              </td>
            </tr>
          )}

          {lga && (
            <tr>
              <th>LGA:</th>
              <td>
                {" "}
                <b>{lga}</b>
              </td>
            </tr>
          )}

          {phone_number && (
            <tr>
              <th>Phone_number:</th>
              <td>
                {" "}
                <b>{phone_number}</b>
              </td>
            </tr>
          )}

          {occupation && (
            <tr>
              <th>Occupation:</th>
              <td>
                {" "}
                <b>{occupation}</b>
              </td>
            </tr>
          )}

          {emergency_contact && (
            <tr>
              <th>Emergency_contact:</th>
              <td>
                {" "}
                <b>{emergency_contact}</b>
              </td>
            </tr>
          )}

          {emergency_contact_phone_number && (
            <tr>
              <th>Emergency_contact_phone_number:</th>
              <td>
                {" "}
                <b>{emergency_contact_phone_number}</b>
              </td>
            </tr>
          )}

          {relationship_with_emergency_contact && (
            <tr>
              <th>Relationship_with_emergency_contact: </th>
              <td>
                {" "}
                <b>{relationship_with_emergency_contact}</b>
              </td>
            </tr>
          )}

          {category && (
            <tr>
              <th>BHCPF Category:</th>
              <td>
                <b>{category}</b>
              </td>
            </tr>
          )}
        </tbody>
        <tfoot></tfoot>
      </table>
      </>}
    </Wrapper>
    
  );
}

export default Persondetail;

const Wrapper = styled.div`
  padding: 20px;
  border-top: 2px solid whitesmoke;
  overflow-y: auto;
  height: 100px;
  width: 160%;
  height: 80vh;
  h3 {
    font-size: 1.3rem;
    margin: 1.5rem;
    padding-top: 2rem;
    text-align: left;
    padding-left: 4rem;
    font-weight: bold;
    font-family: "Ubuntu";
  }
  span {
    padding-right: 2rem;
  }
  td b {
    color: green;
  }

  img {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    border-radius: 50%;
    display: block;
    margin: 1rem auto 1rem auto;
  }
`;
