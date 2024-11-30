import { Language } from '@interfaces/language.interface';
import { createI18n } from 'vue-i18n';

export const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    en: {
      placeholder: {
        resumeButton: "Resume",
        presentation: "Hey, I'm Jhonatan. I'm a Frontend Developer",
        projectsTitle: "PROJECTS",
        experienceTitle: "EXPERIENCE",
        skillsTitle: "SKILLS",
        georExperience1: "Development of interfaces in Angular, Vue, and React for various projects, ensuring intuitive and efficient user experiences.",
        georExperience2: "Experience in project management, including organizing and tracking activities within established deadlines, as well as coordinating teams to ensure the quality of deliverables.",
        georExperience3: "Development of cross-platform applications with Ionic, optimizing performance and compatibility on different devices.",
        georExperience4: "Implementation of RESTful APIs to ensure smooth and secure communication between the front-end and back-end.",
        georExperience5: "Preparation of technical documentation and training for end users and team members on new features and best practices in development.",
        viewRepository: "View Repository",
        privateRepository: "Private Repository",
        english: "English",
        spanish: "Spanish",
      },
    },
    es: {
      placeholder: {
        resumeButton: "CV",
        presentation: "Hola, soy Jhonatan. Desarrollador Frontend.",
        projectsTitle: "PROYECTOS",
        experienceTitle: "EXPERIENCIA",
        skillsTitle: "HABILIDADES",
        georExperience1: "Desarrollo de interfaces en Angular, Vue, y React para diversos proyectos, asegurando experiencias de usuario intuitivas y eficientes.",
        georExperience2: "Experiencia en gestión de proyectos, incluyendo la organización y seguimiento de actividades dentro de plazos establecidos, así como la coordinación de equipos para asegurar la calidad de los entregables.",
        georExperience3: "Desarrollo de aplicaciones multiplataforma con Ionic, optimizando rendimiento y compatibilidad en diferentes dispositivos.",
        georExperience4: "Implementación de APIs RESTful para asegurar una comunicación fluida y segura entre el front-end y el back-end.",
        georExperience5: "Elaboración de documentación técnica y capacitación para usuarios finales y miembros del equipo sobre nuevas funcionalidades y mejores prácticas en desarrollo.",
        viewRepository: "Ver Repositorio",
        privateRepository: "Repositorio Privado",
        english: "Inglés",
        spanish: "Español",
      },
    }
  }
});

export const translate = (key: string) => {
  return i18n.global.t(key);
};



export const setLanguage = (language: Language) => {
  i18n.global.locale = language;
};