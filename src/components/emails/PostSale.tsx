{
	/* <tr width="100%" height="60">
<td valign="top" align="left" style="border-top-left-radius:4px;border-top-right-radius:4px;background:#fff bottom left repeat-x;padding:10px 18px;text-align:center">
    <img src="${require("Assets/svg/logos/nestaPiros.svg").default}" title="Proyecto Nesta">
</td>
</tr> */
}
export const postSale = (params: any) => `
<table cellspacing="0" cellpadding="0" border="0" style="color:#333;background:#fff;padding:0;margin:0;width:100%;font:15px/1.25em 'Helvetica Neue',Arial,Helvetica">
    <tbody>
    <tr width="100%">
        <td valign="top" align="left" style="background:#eef0f1;font:15px/1.25em 'Helvetica Neue',Arial,Helvetica">
            <table style="border:none;padding:0 18px;margin:50px auto;width:500px">
                <tbody>
                <tr width="100%">
                    <td valign="top" align="left" style="background:#fff;padding:18px">
                        <h1 style="font-size:20px;margin:16px 0;color:#333;text-align:center">${params.txtname} ${params.txtlastname} quiere asistencia en Nesta</h1>
                        <p style="font:15px/1.25em 'Helvetica Neue',Arial,Helvetica;color:#333;text-align:center">La siguiente información proviene del formulario de <a href="https://nestacosapi.grupolar.pe/post-venta">Post Venta.</a></p>
                        <div style="background:#f6f7f8;border-radius:3px">
                            <p style="padding-top: 30px;text-align:center">
                                <a href="#" style="color:#606060;font:16px/1.25em 'Helvetica Neue',Arial,Helvetica;text-decoration:none;font-weight:bold" target="_blank">Nombre Completo: ${params.txtname} ${params.txtlastname}</a>
                            </p>
                            <p style="padding-top: 10px;text-align:center">
                                <a href="#" style="color:#606060;font:16px/1.25em 'Helvetica Neue',Arial,Helvetica;text-decoration:none;font-weight:bold" target="_blank">Tipo Doc: ${params.cbodoc}</a>
                            </p>
                            <p style="padding-top: 10px;text-align:center">
                                <a href="#" style="color:#606060;font:16px/1.25em 'Helvetica Neue',Arial,Helvetica;text-decoration:none;font-weight:bold" target="_blank">Nro Doc: ${params.txtdoc}</a>
                            </p>
                            <p style="padding-top: 10px;text-align:center">
                                <a href="mailto:${params.txtemail}" style="color:#606060;font:16px/1.25em 'Helvetica Neue',Arial,Helvetica;text-decoration:none;font-weight:bold" target="_blank">Correo Electrónico: ${params.txtemail}</a>
                            </p>
                            <p style="padding-top: 10px;text-align:center">
                                <a href="tel:${params.txtphone}" style="color:#606060;font:16px/1.25em 'Helvetica Neue',Arial,Helvetica;text-decoration:none;font-weight:bold" target="_blank">Teléfono: ${params.txttelephone}</a>
                            </p>
                            <p style="padding-top: 10px;text-align:center">
                                <a href="#" style="color:#606060;font:16px/1.25em 'Helvetica Neue',Arial,Helvetica;text-decoration:none;font-weight:bold" target="_blank">Departamento: ${params.txtdeps}</a>
                            </p>
                            <p style="padding-top: 10px;padding-bottom: 30px;text-align:center">
                                <a href="#" style="color:#606060;font:16px/1.25em 'Helvetica Neue',Arial,Helvetica;text-decoration:none;font-weight:bold" target="_blank">Mensaje: ${params.txtarea}</a>
                            </p>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
`;
