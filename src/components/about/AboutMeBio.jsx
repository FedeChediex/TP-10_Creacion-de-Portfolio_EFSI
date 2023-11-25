import profileImage from '../../images/profile.jpeg';


const AboutMeBio = () => {


	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">

				<div className="font-general-regular w-full sm:w-3/4 text-left">

					<div className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
						<p>
							¡Hola! Soy Federico Chediex, un entusiasta estudiante de informática nacido en 2005. Actualmente, estoy culminando mi educación secundaria en el área informática en la Escuela Secundaria Ort Yatay, donde he construido una sólida base de conocimientos en tecnologías como React, Node.js, React Native, y más.
						</p>

						<p>
							Educación:
						</p>
						<ul>
							<li>Escuela Primaria Scholem Aleijem</li>
							<li>Escuela Secundaria Ort Yatay (Área Informática)</li>
						</ul>

						<p>
							Habilidades Destacadas:
						</p>
						<p>
							Mi capacidad para aprender rápidamente y abordar problemas con un enfoque lógico me ha permitido explorar y dominar diversas tecnologías, desde React y Node.js hasta conceptos de programación orientada a objetos (POO). Mi fascinación por la economía complementa mi visión estratégica y mi orientación hacia el futuro.
						</p>

						<p>
							Experiencia Personal:
						</p>
						<p>
							Aunque mi experiencia laboral formal está en desarrollo, mi pasión por la resolución de problemas y mi dedicacion a aprender cosas nuevas me han preparado para enfrentar desafíos en un entorno profesional.
						</p>

						<p>
							Habilidades Personales:
						</p>
						<p>
							Más allá de la tecnología, me destaco por entender a las personas, lo que facilita la colaboración efectiva en equipos multidisciplinarios. Soy un pensador a futuro, siempre buscando oportunidades para crecer y contribuir.
						</p>

						<p>
							Intereses y Pasiones:
						</p>
						<p>
							Cuando no estoy inmerso en el mundo digital, disfruto jugando al fútbol, una actividad que no solo me brinda un escape físico, sino que también refleja mi amor por el trabajo en equipo y la competencia saludable.
						</p>
					</div>

				</div>


			</div>
		</div>
				);
};

				export default AboutMeBio;
