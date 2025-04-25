const contenido = {
    sobreMi: `
        <h4>Sobre mí</h4>
        <p>¡Hola! Soy Gonzalo Calvo Engelmo. Soy una persona responsable, competitiva y dedicada. Tengo una gran capacidad de liderazgo y oratoria, así como curiosidad, que me genera interés por aprender cosas nuevas.</p>
        <p>Me gusta mucho la tecnología y la programación, y tengo experiencia en el desarrollo de aplicaciones multiplataforma. Me encanta aprender cosas nuevas y mejorar mis habilidades constantemente.</p>
        <p>En mi tiempo libre, disfruto del deporte y la música.</p>
        <p>Si quieres saber más sobre mí, no dudes en contactarme. Estoy siempre abierto a nuevas oportunidades.</p>
    `,
    estudios: `
        <h4>Estudios</h4>
        <p>He completado un grado medio en Sistemas Microinformáticos y Redes (SMR) y actualmente estoy cursando un grado superior en Desarrollo de Aplicaciones Multiplataforma (DAM).</p>
        <p>Durante mi formación, he adquirido conocimientos en programación, bases de datos, redes, hardware, entre otros.</p>
        <p>Además, durante el grado medio, de forma complementaria, me certifiqué en CCNA (Cisco Certified Network Associate): Introduction to Networks. También participé en varios talleres SMA-CLICOLLEGUE de inglés, bolsas y mercados, marketing y ciberseguridad.</p>
    `,
    experiencia: `
        <h4>Experiencia</h4>
        <p><strong>Técnico de sistemas</strong></p>
        <p>UNED - Universidad Nacional de Educación a Distancia (Spain)</p>
        <p>Contrato de prácticas</p>
        <p>abr. 2024 - jun. 2024 · 3 meses · 370 horas</p>
        <p>Madrid, España · Presencial</p>
        <p>Durante este período, trabajé como técnico de sistemas, adquiriendo experiencia práctica en el mantenimiento y soporte de infraestructuras tecnológicas. Esta experiencia me permitió aplicar mis conocimientos en un entorno profesional, además de mejorar mis habilidades técnicas y de resolución de problemas.</p>
    `,
    contacto: `
        <h4>Contacto</h4>
        <p>Si deseas ponerte en contacto conmigo, puedes hacerlo a través de los siguientes medios:</p>
        <ul>
            <li>Email: <a href="mailto:engelmogonzalo@gmail.com">engelmogonzalo@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/gonzalo-calvo-engelmo-4a37121bb/" target="_blank">Gonzalo Calvo Engelmo</a></li>
            <li>GitHub: <a href="https://github.com/Gonzalo-Rew" target="_blank">Gonzalo-Rew</a></li>
        </ul>
    `
};

function mostrarContenido(seccion) {
    const contenidoDiv = document.getElementById('contenido');
    contenidoDiv.innerHTML = contenido[seccion];
}