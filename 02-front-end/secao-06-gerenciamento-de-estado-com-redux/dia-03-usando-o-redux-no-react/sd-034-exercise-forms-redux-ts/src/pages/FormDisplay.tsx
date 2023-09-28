import { useSelector } from 'react-redux';
import { State } from '../redux/reducers';

function FormDisplay() {
  const { personalData, professionalData } = useSelector((state: State) => state);
  const { name, email, cpf, address, city, uf } = personalData;
  const { resume, role, description } = professionalData;
  // Recupere as informações do seu estado criado no Redux
  return (
    <section>
      <h1>Dados Enviados</h1>
      <div>
        Nome:
        {`Nome: ${name}`}
      </div>
      <div>
        Email:
        {`Email: ${email}`}
      </div>
      <div>
        CPF:
        {`CPF: ${cpf}`}
      </div>
      <div>
        Endereço:
        {`Endereço: ${address}`}
      </div>
      <div>
        Cidade:
        {`Cidade: ${city}`}
      </div>
      <div>
        Estado:
        {`Estado: ${uf}`}
      </div>
      <div>
        Currículo:
        {`Currículo: ${resume}`}
      </div>
      <div>
        Cargo:
        {`Cargo: ${role}`}
      </div>
      <div>
        Descrição do cargo:
        {`Descrição do cargo: ${description}`}
      </div>
    </section>
  );
}

export default FormDisplay;
