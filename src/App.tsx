import { Button } from './ui';

export const App = () => {
  const handleButtonWithoutArgs = () => {
    console.log('console log sin argumentos');
  };

  const handleButtonWithArgs = (name: string, age: number) => {
    console.log('console log con argumentos', name, age);
  };

  return (
    <div style={{ margin: 10 }}>
      <h1>Hola Mundo</h1>
      <Button label="Button" color="primary" onClick={handleButtonWithoutArgs} />
      <br /> <br />
      <Button label="Iniciar sesión" color="secondary" onClick={handleButtonWithoutArgs} />
      <br /> <br />
      <Button
        label="Cambiar contraseña"
        color="success"
        size="block"
        onClick={() => handleButtonWithArgs('matias', 30)}
      />
      <br /> <br />
      <Button
        label="Aceptar"
        color="warning"
        size="small"
        onClick={() => handleButtonWithArgs('matias', 30)}
      />
      <br /> <br />
      <Button label="Cerrar" color="danger" size="large" />
      <br /> <br />
      <Button label="Iniciar sesión" color="secondary" disabled />
      <Button label="Martin QLO" color="danger" size="small" />
    </div>
  );
};
