import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">  Ofrezco servicios de desarrollo de software con experiencia en diversas áreas, incluyendo:
    <ul className="list-disc list-inside mt-4">
        <li>Administración de máquinas virtuales en Google Cloud y Azure para optimización y seguridad.</li>
        <li>Desarrollo web con PHP, Laravel, y MySQL para crear sitios web dinámicos y robustos.</li>
        <li>Creación de aplicaciones con React.js para interfaces de usuario interactivas y modernas.</li>
        <li>Desarrollo de aplicaciones de escritorio y web utilizando .NET con C# y Visual Studio 2022.</li>
        <li>Desarrollo de aplicaciones con Java y Java Web Servlet para soluciones empresariales completas.</li>
        <li>Implementación de CRUD en PHP con bases de datos MySQL para gestión eficiente de datos.</li>
    </ul>
    Utilizo las últimas tecnologías y mejores prácticas para asegurar que cada proyecto sea exitoso y cumpla con las expectativas del cliente.</p>
                   <a href="/contact" className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</a>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;