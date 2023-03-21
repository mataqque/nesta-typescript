export const ComplaintMail = (vars: any) => ` <table cellspacing="0" cellpadding="0" style="background:#eef0f1;width:100%;">
<tbody>
    <tr width="100%">
        <td>
            <table cellspacing="15"
                style="padding:2%;margin:50px auto;width:50vw;background-color: #fff;color:#4C4C4C;font-family: Arial, Helvetica, sans-serif;">
                <tbody>
                    <tr width="100%" height="60">
                        <td valign="top" align="center" colspan="2"
                            style="border-top-left-radius:4px;border-top-right-radius:4px; bottom left repeat-x;padding:10px 18px;text-align:center">
                            <img src="https://nestacosapi.grupolar.pe/logo-nesta.png"
                                title="Nesta" style="width:17em;padding: 2%;">
                        </td>
                    </tr>
                    <tr width="100%">
                        <th colspan="2" style="fint-size: 1.5vw;">LIBRO DE RECLAMACIONES</th>
                    </tr>
                    <tr width="100%">
                        <th colspan="2">DATOS DEL CLIENTE</th>
                    </tr>
                    <tr width="100%">
                        <th align="left">Nombres y Apellidos</th>
                        <td>${vars.fname} ${vars.flname} ${vars.mlname}</td>
                    </tr>
                    <tr width="100%">
                        <th align="left">Email</th>
                        <td>${vars.email}</td>
                    </tr>
                    <tr width="100%">
                        <th align="left">Teléfono</th>
                        <td>${vars.telephone}</td>
                    </tr>
                    <tr width="100%">
                        <th align="left">${vars.id_type}</th>
                        <td>${vars.id_number}</td>
                    </tr>
                    <tr width="100%">
                        <th align="left">Departamento</th>
                        <td>${vars.region}</td>
                    </tr>
                    <tr width="100%">
                        <th align="left">Provincia</th>
                        <td>${vars.province}</td>
                    </tr>
                    <tr width="100%">
                        <th align="left">Distrito</th>
                        <td>${vars.district}</td>
                    </tr>
                    <tr width="100%">
                        <th align="left">Dirección</th>
                        <td>${vars.address}</td>
                    </tr>
                    <tr width="100%">
                        <th colspan="2">IDENTIFICACIÓN DEL BIEN CONTRATADO</th>
                    </tr>
                    <tr width="100%">
                        <th align="left">Tipo Bien Contratado</th>
                        <td>${vars.contracted_good_type}</td>
                    </tr>
                    <tr width="100%">
                        <th align="left">N° de Pedido</th>
                        <td>${vars.order_number}</td>
                    </tr>
                    <tr width="100%">
                        <th align="left">Monto</th>
                        <td>${vars.amount}</td>
                    </tr>
                    <tr width="100%">
                        <th align="left">Descripción</th>
                        <td>
                            <p>${vars.good_desc}</p>
                        </td>
                    </tr>
                    <tr width="100%">
                        <th colspan="2">DETALLE DE LA RECLAMACIÓN</th>
                    </tr>
                    <tr width="100%">
                        <th align="left">Tipo de reclamo</th>
                        <td>${vars.complaint_type}</td>
                    </tr>
                    <tr width="100%">
                        <th align="left">Descripción</th>
                        <td>${vars.complaint_desc}</td>
                    </tr>
                    <tr width="100%">
                        <th align="left">Pedido del consumidor</th>
                        <td>${vars.consumer_petiton}</td>
                    </tr>
                    <tr width="100%">
                        <th colspan="2">ACCIONES ADOPTADAS POR EL VENDEDOR</th>
                    </tr>
                    <tr width="100%">
                        <th align="left">Descripción</th>
                        <td>${vars.seller_action}</td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</tbody>
</table>`;
