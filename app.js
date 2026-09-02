// ==========================================
// 1. SELECCIÓN DE MODELOS
// ==========================================

const vistaPrevia = document.getElementById('vista-previa');

const btnClasico = document.getElementById('modelo-clasico');
const btnModerno = document.getElementById('modelo-moderno');
const btnMinimalista = document.getElementById('modelo-minimalista');


// ---------- Modelo clásico ----------

btnClasico.addEventListener('click', () => {

    // Asignamos la clase al contenedor principal del CV
    vistaPrevia.className = 'modelo-clasico';

    // En celular desplazamos hacia la vista previa
    if (window.innerWidth <= 768) {
        vistaPrevia.scrollIntoView({ behavior: 'smooth' });
    }
});


// ---------- Modelo moderno ----------

btnModerno.addEventListener('click', () => {

    vistaPrevia.className = 'modelo-moderno';

    if (window.innerWidth <= 768) {
        vistaPrevia.scrollIntoView({ behavior: 'smooth' });
    }
});


// ---------- Modelo minimalista ----------

btnMinimalista.addEventListener('click', () => {

    vistaPrevia.className = 'modelo-minimalista';

    if (window.innerWidth <= 768) {
        vistaPrevia.scrollIntoView({ behavior: 'smooth' });
    }
});


// ==========================================
// 2. ACTUALIZACIÓN EN TIEMPO REAL
// ==========================================

// ---------- Elementos del formulario ----------

const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const inputProfesion = document.getElementById('profesion');
const inputEmail = document.getElementById('email');
const inputTelefono = document.getElementById('telefono');
const inputCiudad = document.getElementById('ciudad');
const inputPerfil = document.getElementById('perfil');


// ---------- Elementos de la vista previa ----------

const cvNombre = document.getElementById('cv-nombre');
const cvProfesion = document.getElementById('cv-profesion');
const cvEmail = document.getElementById('cv-email');
const cvTelefono = document.getElementById('cv-telefono');
const cvCiudad = document.getElementById('cv-ciudad');
const cvPerfil = document.querySelector('#cv-perfil p');


// ---------- Nombre y apellido ----------

function actualizarNombre() {

    const nombre = inputNombre.value || 'Tu nombre';
    const apellido = inputApellido.value || '';

    cvNombre.textContent = `${nombre} ${apellido}`.trim();
}

inputNombre.addEventListener('input', actualizarNombre);
inputApellido.addEventListener('input', actualizarNombre);


// ---------- Profesión ----------

inputProfesion.addEventListener('input', (e) => {

    cvProfesion.textContent = e.target.value || 'Tu profesión';
});


// ---------- Correo electrónico ----------

inputEmail.addEventListener('input', (e) => {

    cvEmail.textContent = e.target.value || 'Tu correo electrónico';
});


// ---------- Teléfono ----------

inputTelefono.addEventListener('input', (e) => {

    cvTelefono.textContent = e.target.value || 'Tu teléfono';
});


// ---------- Ciudad ----------

inputCiudad.addEventListener('input', (e) => {

    cvCiudad.textContent = e.target.value || 'Tu ciudad';
});


// ---------- Perfil ----------

inputPerfil.addEventListener('input', (e) => {

    cvPerfil.textContent =
        e.target.value || 'Tu descripción aparecerá aquí.';
});


// ==========================================
// 3. CARGA DE FOTO DE PERFIL
// ==========================================

const inputFoto = document.getElementById('foto');
const cvFotoPerfil = document.getElementById('cv-foto-perfil');

inputFoto.addEventListener('change', function (event) {

    const archivo = event.target.files[0];

    if (archivo) {

        const lector = new FileReader();

        lector.onload = function (e) {

            cvFotoPerfil.src = e.target.result;

            // Mostramos la imagen
            cvFotoPerfil.style.display = 'block';
        };

        lector.readAsDataURL(archivo);
    }
});


// ==========================================
// 4. BOTONES "AGREGAR"
// ==========================================


// ---------- Agregar experiencia ----------

document
    .getElementById('agregar-experiencia')
    .addEventListener('click', function () {

        const html = `
            <div style="border-top: 1px dashed #1f7679; margin-top: 20px; padding-top: 10px;">

                <label>Empresa:</label>

                <input
                    type="text"
                    name="empresa"
                    placeholder="Nombre de la empresa"
                >

                <label>Puesto:</label>

                <input
                    type="text"
                    name="puesto"
                    placeholder="Ej: Administrativo"
                >

                <label>Fecha de inicio:</label>

                <input
                    type="month"
                    name="fecha-inicio"
                >

                <label>Fecha de finalización:</label>

                <input
                    type="month"
                    name="fecha-fin"
                >

                <label>Descripción:</label>

                <textarea
                    name="descripcion-trabajo"
                    rows="4"
                    placeholder="Describí tus tareas y responsabilidades..."
                ></textarea>

            </div>
        `;

        this.insertAdjacentHTML('beforebegin', html);
    });


// ---------- Agregar educación ----------

document
    .getElementById('agregar-estudio')
    .addEventListener('click', function () {

        const html = `
            <div style="border-top: 1px dashed #1f7679; margin-top: 20px; padding-top: 10px;">

                <label>Institución:</label>

                <input
                    type="text"
                    name="institucion"
                    placeholder="Ej: Instituto / Universidad"
                >

                <label>Título o carrera:</label>

                <input
                    type="text"
                    name="titulo"
                    placeholder="Ej: Tecnicatura Superior..."
                >

                <label>Año:</label>

                <input
                    type="number"
                    name="anio"
                    placeholder="Ej: 2026"
                >

            </div>
        `;

        this.insertAdjacentHTML('beforebegin', html);
    });


// ---------- Agregar habilidad ----------

document
    .getElementById('agregar-habilidad')
    .addEventListener('click', function () {

        const html = `
            <input
                type="text"
                name="habilidad"
                placeholder="Ej: Trabajo en equipo"
                style="margin-top: 10px;"
            >
        `;

        this.insertAdjacentHTML('beforebegin', html);
    });


// ---------- Agregar idioma ----------

document
    .getElementById('agregar-idioma')
    .addEventListener('click', function () {

        const html = `
            <div style="border-top: 1px dashed #1f7679; margin-top: 20px; padding-top: 10px;">

                <label>Idioma:</label>

                <input
                    type="text"
                    name="idioma"
                    placeholder="Ej: Portugués"
                >

                <label>Nivel:</label>

                <select
                    name="nivel-idioma"
                    style="width: 250px; max-width: 100%; height: 35px; border-radius: 10px; border: 1px solid #1f7679; padding: 5px; margin-bottom: 10px;"
                >
                    <option value="">Seleccionar nivel</option>
                    <option value="basico">Básico</option>
                    <option value="intermedio">Intermedio</option>
                    <option value="avanzado">Avanzado</option>
                    <option value="nativo">Nativo</option>
                </select>

            </div>
        `;

        this.insertAdjacentHTML('beforebegin', html);
    });


// ---------- Agregar red ----------

document
    .getElementById('agregar-red')
    .addEventListener('click', function () {

        const html = `
            <div style="border-top: 1px dashed #1f7679; margin-top: 20px; padding-top: 10px;">

                <label>Nombre de la red o sitio:</label>

                <input
                    type="text"
                    name="nombre-red"
                    placeholder="Ej: Portfolio"
                >

                <label>Enlace:</label>

                <input
                    type="url"
                    name="url-red"
                    placeholder="https://..."
                >

            </div>
        `;

        this.insertAdjacentHTML('beforebegin', html);
    });


// ==========================================
// 5. ACTUALIZACIÓN DE SECCIONES DINÁMICAS
// ==========================================

const formulario = document.getElementById('formulario');


// Escuchamos los cambios en todo el formulario

formulario.addEventListener('input', renderDinamico);
formulario.addEventListener('change', renderDinamico);


// ---------- Función principal ----------

function renderDinamico() {

    // FormData obtiene todos los campos agrupados
    // por su atributo "name"
    const formData = new FormData(formulario);


    // ======================================
    // EXPERIENCIA LABORAL
    // ======================================

    const empresas = formData.getAll('empresa');
    const puestos = formData.getAll('puesto');
    const inicios = formData.getAll('fecha-inicio');
    const fines = formData.getAll('fecha-fin');
    const descripciones = formData.getAll('descripcion-trabajo');

    const cvExp = document.getElementById('cv-experiencia');

    cvExp.innerHTML = '';

    let hayExp = false;


    for (let i = 0; i < empresas.length; i++) {

        if (empresas[i] || puestos[i]) {

            hayExp = true;

            cvExp.innerHTML += `
                <div style="margin-bottom: 15px;">

                    <h4 style="margin: 0; color: inherit; font-size: 16px;">
                        ${puestos[i] || 'Puesto'}
                    </h4>

                    <p style="margin: 5px 0; font-size: 14px;">
                        <strong>${empresas[i] || 'Empresa'}</strong>
                        | ${inicios[i]} - ${fines[i]}
                    </p>

                    <p style="margin: 0; font-size: 14px;">
                        ${descripciones[i]}
                    </p>

                </div>
            `;
        }
    }


    if (!hayExp) {

        cvExp.innerHTML =
            '<p>Tu experiencia laboral aparecerá aquí.</p>';
    }


    // ======================================
    // EDUCACIÓN
    // ======================================

    const instituciones = formData.getAll('institucion');
    const titulos = formData.getAll('titulo');
    const anios = formData.getAll('anio');

    const cvEdu = document.getElementById('cv-educacion');

    cvEdu.innerHTML = '';

    let hayEdu = false;


    for (let i = 0; i < instituciones.length; i++) {

        if (instituciones[i] || titulos[i]) {

            hayEdu = true;

            cvEdu.innerHTML += `
                <div style="margin-bottom: 15px;">

                    <h4 style="margin: 0; color: inherit; font-size: 16px;">
                        ${titulos[i] || 'Título'}
                    </h4>

                    <p style="margin: 5px 0; font-size: 14px;">
                        <strong>${instituciones[i] || 'Institución'}</strong>
                        | ${anios[i]}
                    </p>

                </div>
            `;
        }
    }


    if (!hayEdu) {

        cvEdu.innerHTML =
            '<p>Tu formación académica aparecerá aquí.</p>';
    }


    // ======================================
    // HABILIDADES
    // ======================================

    const habilidades = formData.getAll('habilidad');

    const cvHab = document.getElementById('cv-habilidades');

    cvHab.innerHTML = '';

    let hayHab = false;

    let htmlHab =
        '<ul style="padding-left: 20px; margin: 10px 0;">';


    for (let i = 0; i < habilidades.length; i++) {

        if (habilidades[i].trim() !== '') {

            hayHab = true;

            htmlHab += `
                <li>
                    ${habilidades[i]}
                </li>
            `;
        }
    }


    htmlHab += '</ul>';


    if (hayHab) {

        cvHab.innerHTML = htmlHab;

    } else {

        cvHab.innerHTML =
            '<p>Tus habilidades aparecerán aquí.</p>';
    }


    // ======================================
    // IDIOMAS
    // ======================================

    const idiomas = formData.getAll('idioma');
    const niveles = formData.getAll('nivel-idioma');

    const cvIdiomas = document.getElementById('cv-idiomas');

    cvIdiomas.innerHTML = '';

    let hayIdiomas = false;

    let htmlIdiomas =
        '<ul style="padding-left: 20px; margin: 10px 0;">';


    for (let i = 0; i < idiomas.length; i++) {

        if (idiomas[i].trim() !== '') {

            hayIdiomas = true;

            let nivelTxt = niveles[i]
                ? ` - ${niveles[i].charAt(0).toUpperCase() + niveles[i].slice(1)}`
                : '';

            htmlIdiomas += `
                <li>
                    <strong>${idiomas[i]}</strong>${nivelTxt}
                </li>
            `;
        }
    }


    htmlIdiomas += '</ul>';


    if (hayIdiomas) {

        cvIdiomas.innerHTML = htmlIdiomas;

    } else {

        cvIdiomas.innerHTML =
            '<p>Tus idiomas aparecerán aquí.</p>';
    }


    // ======================================
    // REDES Y ENLACES
    // ======================================

    const redes = formData.getAll('nombre-red');
    const urls = formData.getAll('url-red');

    const cvRedes = document.getElementById('cv-redes');

    cvRedes.innerHTML = '';

    let hayRedes = false;

    let htmlRedes =
        '<ul style="padding-left: 20px; margin: 10px 0;">';


    for (let i = 0; i < redes.length; i++) {

        if (redes[i].trim() !== '') {

            hayRedes = true;

            htmlRedes += `
                <li>
                    <a
                        href="${urls[i]}"
                        target="_blank"
                        style="color: inherit; text-decoration: none; border-bottom: 1px solid currentColor;"
                    >
                        ${redes[i]}
                    </a>
                </li>
            `;
        }
    }


    htmlRedes += '</ul>';


    if (hayRedes) {

        cvRedes.innerHTML = htmlRedes;

    } else {

        cvRedes.innerHTML =
            '<p>Tus redes y enlaces aparecerán aquí.</p>';
    }
}


// ==========================================
// 6. DESCARGAR CV COMO PDF
// ==========================================

const btnDescargarPdf =
    document.getElementById('btn-descargar-pdf');


btnDescargarPdf.addEventListener('click', () => {

    const elementoCV =
        document.getElementById('vista-previa');


    // ---------- Configuración del PDF ----------

    const opciones = {

        margin: 10,

        filename: 'Mi_Curriculum.pdf',

        image: {
            type: 'jpeg',
            quality: 0.98
        },

        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollY: 0
        },

        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };


    // ---------- Feedback del botón ----------

    const textoOriginal =
        btnDescargarPdf.innerHTML;

    btnDescargarPdf.innerHTML =
        '⏳ Generando PDF...';


    // ---------- Generación del PDF ----------

    html2pdf()
        .set(opciones)
        .from(elementoCV)
        .save()
        .then(() => {

            // Restauramos el botón
            btnDescargarPdf.innerHTML = textoOriginal;
        });
});