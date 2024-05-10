import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Particle = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
    };

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
                    resize: true,
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
                        enable: false,
                        area: 800,
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

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};

export default Particle;