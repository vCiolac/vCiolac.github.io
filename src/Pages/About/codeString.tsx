export const codeString = `// Página "Sobre Mim"
import { VictorCiolac } from 'my-profile';

// Quem sou eu?
const AboutMe = () => {
  const name = 'Victor Ciolac';
  const age = 28;
  const city = 'Rio de Janeiro';
  const experience = 'Desenvolvedor Front-end';

  // Links profissionais
  const linkedIn = 'https://linkedin.com/in/vciolac';
  const GitHub = 'https://github.com/vciolac';

  return (
    <div>
      <h1>Olá, eu sou {name}</h1>
      <p>
        Tenho {age} anos e moro em {city}.
        Sou um {experience} apaixonado por tecnologia, programação e inovação.
      </p>
    </div>
  );
};

export default AboutMe;
`;
