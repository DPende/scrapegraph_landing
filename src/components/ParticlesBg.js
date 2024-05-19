import { useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Particle = () => {

    const init = initParticlesEngine(async (engine) => {
        await loadSlim(engine);
    })

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#282a36",
                },
            },
            fullScreen: { enable: true },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 1,
                    },
                },
            },
            particles: {
                color: {
                    value: "#bd93f9",
                },
                links: {
                    color: "#bd93f9",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 2,
                },
                collisions: {
                    enable: false,
                },
                move: {
                    enable: true,
                    direction: "top",
                    outModes: {
                        default: "out",
                    },
                    random: true,
                    straight: false,
                    speed: 1,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 150,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    return (
        <Particles
            init={init}
            id="tsparticles"
            options={options}
        />
    );

};

export default Particle;