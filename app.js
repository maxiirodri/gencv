// ==========================================
// 1. SELECCIÓN DE MODELOS
// ==========================================
const vistaPrevia = document.getElementById('vista-previa');
const formElemento = document.getElementById('formulario');

const btnClasico = document.getElementById('modelo-clasico');
const btnModerno = document.getElementById('modelo-moderno');
const btnMinimalista = document.getElementById('modelo-minimalista');

function seleccionarModelo(clase) {
    vistaPrevia.className = clase;

    // En celular hace scroll directo al formulario para empezar a escribir
    if (window.innerWidth <= 768) {
        formElemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

btnClasico.addEventListener('click', () => seleccionarModelo('modelo-clasico'));
btnModerno.addEventListener('click', () => seleccionarModelo('modelo-moderno'));
btnMinimalista.addEventListener('click', () => seleccionarModelo('modelo-minimalista'));

btnClasico.addEventListener('click', () => seleccionarModelo('modelo-clasico'));
btnModerno.addEventListener('click', () => seleccionarModelo('modelo-moderno'));
btnMinimalista.addEventListener('click', () => seleccionarModelo('modelo-minimalista'));

btnClasico.addEventListener('click', () => cambiarModelo('modelo-clasico'));
btnModerno.addEventListener('click', () => cambiarModelo('modelo-moderno'));
btnMinimalista.addEventListener('click', () => cambiarModelo('modelo-minimalista'));

// ==========================================
// 2. ACTUALIZACIÓN EN TIEMPO REAL (DATOS BÁSICOS)
// ==========================================
const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const inputProfesion = document.getElementById('profesion');
const inputEmail = document.getElementById('email');
const inputTelefono = document.getElementById('telefono');
const inputCiudad = document.getElementById('ciudad');
const inputPerfil = document.getElementById('perfil');

const cvNombre = document.getElementById('cv-nombre');
const cvProfesion = document.getElementById('cv-profesion');
const cvEmail = document.getElementById('cv-email');
const cvTelefono = document.getElementById('cv-telefono');
const cvCiudad = document.getElementById('cv-ciudad');
const cvPerfil = document.querySelector('#cv-perfil p');

function actualizarNombre() {
    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();
    cvNombre.textContent = (nombre || apellido) ? `${nombre} ${apellido}`.trim() : 'Tu nombre aparecerá aquí';
}

inputNombre.addEventListener('input', actualizarNombre);
inputApellido.addEventListener('input', actualizarNombre);

inputProfesion.addEventListener('input', (e) => {
    cvProfesion.textContent = e.target.value.trim() || 'Tu profesión';
});

inputEmail.addEventListener('input', (e) => {
    cvEmail.textContent = e.target.value.trim() || 'Tu correo electrónico';
});

inputTelefono.addEventListener('input', (e) => {
    cvTelefono.textContent = e.target.value.trim() || 'Tu teléfono';
});

inputCiudad.addEventListener('input', (e) => {
    cvCiudad.textContent = e.target.value.trim() || 'Tu ciudad';
});

inputPerfil.addEventListener('input', (e) => {
    cvPerfil.textContent = e.target.value.trim() || 'Tu descripción aparecerá aquí.';
});

// ==========================================
// 3. FOTO DE PERFIL
// ==========================================
const inputFoto = document.getElementById('foto');
const cvFotoPerfil = document.getElementById('cv-foto-perfil');

inputFoto.addEventListener('change', function (event) {
    const archivo = event.target.files[0];
    if (archivo) {
        const lector = new FileReader();
        lector.onload = function (e) {
            cvFotoPerfil.src = e.target.result;
            cvFotoPerfil.style.display = 'block';
        };
        lector.readAsDataURL(archivo);
    }
});

// ==========================================
// 4. AGREGAR / ELIMINAR CAMPOS DINÁMICOS
// ==========================================
const formulario = document.getElementById('formulario');

// Delegación de eventos para eliminar bloques dinámicos
formulario.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-eliminar-item')) {
        e.target.closest('.item-dinamico').remove();
        renderDinamico();
    }
});

// Agregar Experiencia
document.getElementById('agregar-experiencia').addEventListener('click', function () {
    const html = `
        <div class="item-dinamico" style="border-top: 1px dashed #1f7679; margin-top: 20px; padding-top: 10px; position: relative;">
            <button type="button" class="btn-eliminar-item" style="background:#c62828; color:#fff; border:none; border-radius:5px; padding:3px 8px; cursor:pointer; float:right;">✕ Quitar</button>
            <label>Empresa:</label>
            <input type="text" name="empresa" placeholder="Nombre de la empresa">
            <label>Puesto:</label>
            <input type="text" name="puesto" placeholder="Ej: Administrativo">
            <label>Fecha de inicio:</label>
            <input type="month" name="fecha-inicio">
            <label>Fecha de finalización:</label>
            <input type="month" name="fecha-fin">
            <label>Descripción:</label>
            <textarea name="descripcion-trabajo" rows="3" placeholder="Describí tus tareas y responsabilidades..."></textarea>
        </div>
    `;
    this.insertAdjacentHTML('beforebegin', html);
});

// Agregar Educación
document.getElementById('agregar-estudio').addEventListener('click', function () {
    const html = `
        <div class="item-dinamico" style="border-top: 1px dashed #1f7679; margin-top: 20px; padding-top: 10px; position: relative;">
            <button type="button" class="btn-eliminar-item" style="background:#c62828; color:#fff; border:none; border-radius:5px; padding:3px 8px; cursor:pointer; float:right;">✕ Quitar</button>
            <label>Institución:</label>
            <input type="text" name="institucion" placeholder="Ej: Instituto / Universidad">
            <label>Título o carrera:</label>
            <input type="text" name="titulo" placeholder="Ej: Tecnicatura Superior...">
            <label>Año:</label>
            <input type="number" name="anio" placeholder="Ej: 2026">
        </div>
    `;
    this.insertAdjacentHTML('beforebegin', html);
});

// Agregar Habilidad
document.getElementById('agregar-habilidad').addEventListener('click', function () {
    const html = `
        <div class="item-dinamico" style="display:flex; gap:10px; margin-top:10px; align-items:center;">
            <input type="text" name="habilidad" placeholder="Ej: Trabajo en equipo" style="margin:0; flex:1;">
            <button type="button" class="btn-eliminar-item" style="background:#c62828; color:#fff; border:none; border-radius:8px; padding:10px; cursor:pointer;">✕</button>
        </div>
    `;
    this.insertAdjacentHTML('beforebegin', html);
});

// Agregar Idioma
document.getElementById('agregar-idioma').addEventListener('click', function () {
    const html = `
        <div class="item-dinamico" style="border-top: 1px dashed #1f7679; margin-top: 20px; padding-top: 10px;">
            <button type="button" class="btn-eliminar-item" style="background:#c62828; color:#fff; border:none; border-radius:5px; padding:3px 8px; cursor:pointer; float:right;">✕ Quitar</button>
            <label>Idioma:</label>
            <input type="text" name="idioma" placeholder="Ej: Portugués">
            <label>Nivel:</label>
            <select name="nivel-idioma" style="width: 250px; max-width: 100%; height: 35px; border-radius: 10px; border: 1px solid #1f7679; padding: 5px; margin-bottom: 10px;">
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

// Agregar Red
document.getElementById('agregar-red').addEventListener('click', function () {
    const html = `
        <div class="item-dinamico" style="border-top: 1px dashed #1f7679; margin-top: 20px; padding-top: 10px;">
            <button type="button" class="btn-eliminar-item" style="background:#c62828; color:#fff; border:none; border-radius:5px; padding:3px 8px; cursor:pointer; float:right;">✕ Quitar</button>
            <label>Nombre de la red o sitio:</label>
            <input type="text" name="nombre-red" placeholder="Ej: GitHub">
            <label>Enlace:</label>
            <input type="url" name="url-red" placeholder="https://...">
        </div>
    `;
    this.insertAdjacentHTML('beforebegin', html);
});

// ==========================================
// 5. RENDER DINÁMICO
// ==========================================
formulario.addEventListener('input', renderDinamico);
formulario.addEventListener('change', renderDinamico);

function renderDinamico() {
    const formData = new FormData(formulario);

    // Experiencia
    const empresas = formData.getAll('empresa');
    const puestos = formData.getAll('puesto');
    const inicios = formData.getAll('fecha-inicio');
    const fines = formData.getAll('fecha-fin');
    const descripciones = formData.getAll('descripcion-trabajo');
    const cvExp = document.getElementById('cv-experiencia');

    let expHtml = '';
    for (let i = 0; i < empresas.length; i++) {
        if (empresas[i].trim() || puestos[i].trim()) {
            const fechaStr = (inicios[i] || fines[i]) 
                ? ` | ${inicios[i] || ''} ${inicios[i] && fines[i] ? '–' : ''} ${fines[i] || 'Presente'}` 
                : '';
            
            expHtml += `
                <div style="margin-bottom: 15px;">
                    <h4 style="margin: 0; color: inherit; font-size: 16px;">${puestos[i] || 'Puesto'}</h4>
                    <p style="margin: 5px 0; font-size: 14px;">
                        <strong>${empresas[i] || 'Empresa'}</strong>${fechaStr}
                    </p>
                    ${descripciones[i] ? `<p style="margin: 0; font-size: 14px;">${descripciones[i]}</p>` : ''}
                </div>
            `;
        }
    }
    cvExp.innerHTML = expHtml || '<p>Tu experiencia laboral aparecerá aquí.</p>';

    // Educación
    const instituciones = formData.getAll('institucion');
    const titulos = formData.getAll('titulo');
    const anios = formData.getAll('anio');
    const cvEdu = document.getElementById('cv-educacion');

    let eduHtml = '';
    for (let i = 0; i < instituciones.length; i++) {
        if (instituciones[i].trim() || titulos[i].trim()) {
            eduHtml += `
                <div style="margin-bottom: 15px;">
                    <h4 style="margin: 0; color: inherit; font-size: 16px;">${titulos[i] || 'Título'}</h4>
                    <p style="margin: 5px 0; font-size: 14px;">
                        <strong>${instituciones[i] || 'Institución'}</strong> ${anios[i] ? `| ${anios[i]}` : ''}
                    </p>
                </div>
            `;
        }
    }
    cvEdu.innerHTML = eduHtml || '<p>Tu formación académica aparecerá aquí.</p>';

    // Habilidades
    const habilidades = formData.getAll('habilidad');
    const cvHab = document.getElementById('cv-habilidades');
    const habValidas = habilidades.filter(h => h.trim() !== '');

    if (habValidas.length > 0) {
        cvHab.innerHTML = `<ul style="padding-left: 20px; margin: 10px 0;">${habValidas.map(h => `<li>${h}</li>`).join('')}</ul>`;
    } else {
        cvHab.innerHTML = '<p>Tus habilidades aparecerán aquí.</p>';
    }

    // Idiomas
    const idiomas = formData.getAll('idioma');
    const niveles = formData.getAll('nivel-idioma');
    const cvIdiomas = document.getElementById('cv-idiomas');

    let idiomasHtml = '';
    for (let i = 0; i < idiomas.length; i++) {
        if (idiomas[i].trim() !== '') {
            const nivelTxt = niveles[i] ? ` - ${niveles[i].charAt(0).toUpperCase() + niveles[i].slice(1)}` : '';
            idiomasHtml += `<li><strong>${idiomas[i]}</strong>${nivelTxt}</li>`;
        }
    }
    cvIdiomas.innerHTML = idiomasHtml ? `<ul style="padding-left: 20px; margin: 10px 0;">${idiomasHtml}</ul>` : '<p>Tus idiomas aparecerán aquí.</p>';

    // Redes
    const redes = formData.getAll('nombre-red');
    const urls = formData.getAll('url-red');
    const cvRedes = document.getElementById('cv-redes');

    let redesHtml = '';
    for (let i = 0; i < redes.length; i++) {
        if (redes[i].trim() !== '') {
            const urlFinal = urls[i].trim() ? urls[i] : '#';
            redesHtml += `
                <li>
                    <a href="${urlFinal}" target="_blank" style="color: inherit; text-decoration: none; border-bottom: 1px solid currentColor;">
                        ${redes[i]}
                    </a>
                </li>
            `;
        }
    }
    cvRedes.innerHTML = redesHtml ? `<ul style="padding-left: 20px; margin: 10px 0;">${redesHtml}</ul>` : '<p>Tus redes y enlaces aparecerán aquí.</p>';
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
