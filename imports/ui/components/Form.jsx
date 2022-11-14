import React, { useState, useEffect } from "react";
import { FlowRouter } from "meteor/kadira:flow-router";

import { insert } from "../../api/UserCollection";
import { getUser } from "../../api/UserCollection";
import { updateUser } from "../../api/UserCollection";

import Swal from 'sweetalert2'

export const Form = ({ _id }) => {
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    telefono: "",
    cedula: ""
  });
  const [isInitialRender, setIsInitialRender] = useState(true);

  if (_id) {
    const user = getUser(_id);
    delete user[0]._id;
    useEffect(() => {
        if (isInitialRender) {
            setIsInitialRender(false);
            setValues({
                nombre: user[0].nombre,
                apellido: user[0].apellido,
                email: user[0].email,
                password: user[0].password,
                telefono: user[0].telefono,
                cedula: user[0].cedula
            });
        }
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({...values, [name]: value});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const keys = Object.keys(values);
    for (const key of keys) {
        if (!values[key]) {
            Swal.fire({
                icon: 'error',
                title: 'Todos los campos son obligatorios',
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
    }
    if (!_id) {
        insert(values);
    } else if (_id) {
        updateUser({_id, user: values});
    }
    FlowRouter.go("/");
  }
  return (
    <form onSubmit={handleFormSubmit}>
        <div className="row">
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" name="nombre" onChange={handleChange} value={values.nombre} className="form-control" id="nombre" placeholder="Felipito" required/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" name="apellido" onChange={handleChange}  value={values.apellido} className="form-control" id="apellido" placeholder="julio" required/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" onChange={handleChange} value={values.email} className="form-control" id="email" placeholder="mariapacheca@casquito.com" required/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Pasword</label>
                    <input type="password" name="password" onChange={handleChange} value={values.password} className="form-control" id="password" placeholder="******************" required/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Telefono</label>
                    <input type="number" min="0" name="telefono" onChange={handleChange} value={values.telefono} className="form-control" id="telefono" placeholder="1234567890" required/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="cedula" className="form-label">Cedula</label>
                    <input type="number" min="0" name="cedula" onChange={handleChange} value={values.cedula} className="form-control" id="cedula" placeholder="1234567890" required/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <input type="submit" value={!_id ? "Guardar": "Actualizar"} className="btn btn-success"/>
            </div>
        </div>
    </form>
  );
};
