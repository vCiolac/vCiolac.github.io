export const codeString = `// Página de Erro 404
import { error as _404Error } from 'servidor';

const NotFound = () => {
  return (
    <div>
      <h1>Erro 404 - Página não encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <p>Por favor, verifique o URL e tente novamente.</p>
    </div>
  );
};

export default NotFound;
`;
