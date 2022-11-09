import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { getUsers } from "../../api/UserCollection";
import { FlowRouter } from "meteor/kadira:flow-router";

export const Task = () => {
    const users = useTracker(() => {
        return getUsers();
    });
    if (users.length !== 0) {
        return (
            <div>
                <a className="btn btn-success" href={FlowRouter.path("/add")}>Agregar Usuario</a>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Cedula</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => (
                                <tr key={user._id}>
                                    <td>{user.nombre}</td>
                                    <td>{user.apellido}</td>
                                    <td>{user.email}</td>
                                    <td>{user.telefono}</td>
                                    <td>{user.cedula}</td>
                                    <td>
                                        <a className="btn btn-success btn-sm mx-2" href={FlowRouter.path(`update/${user._id}`)}>Editar</a>
                                        <a className="btn btn-danger btn-sm" href={FlowRouter.path(`update/${user._id}`)}>Eliminar</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (<p>No element</p>);
    }
};