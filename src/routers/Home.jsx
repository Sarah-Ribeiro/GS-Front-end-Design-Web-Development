import imagemSystem from "../assets/clinic-scheduler.png";

export function Home() {
  return (
    <div className="home">
      <div>
        <img
          className="home--img"
          src={imagemSystem}
          alt="Imagem do protótipo"
        />
        <div className="home--solucao">
          <h1>Clinic Scheduler</h1>
          <p className="home--text">
            O Clinic Scheduler desenvolve um sistema para agendamento de
            consultas, tornando o processo mais fácil para pacientes e
            oferecendo eficiência para clínicas, hospitais e farmácias.
          </p>
        </div>
        <button className="home--button">Mais Informações</button>
      </div>
      <div>
        <div className="home--solution">
          <h2>O que é a solução</h2>
          <p>
            Espera-se que o Clinic Scheduler proporcione um sistema facilitador
            com uma excelente experiência do usuário, atendendo às necessidades
            de hospitais e clínicas. Apesar de sua simplicidade, o produto
            desempenha um papel crucial na área da saúde, especialmente para
            pacientes que enfrentam dificuldades na marcação de consultas. A
            agilidade no processo de agendamento representa um diferencial
            importante, considerando a escassez de produtos similares no mercado
            de saúde.
          </p>
        </div>
        <div className="home--results">
          <h2>O que ela fará</h2>
          <p>
            O Clinic Scheduler apresenta um sistema de agendamento de consultas
            com um formulário intuitivo, permitindo que os clientes acessem
            consultas médicas de acordo com suas necessidades clínicas.
          </p>
        </div>
        <div className="home--work">
          <h2>Como funcionará</h2>
          <p>
            O principal objetivo é simplificar a vida dos pacientes na marcação
            de consultas, eliminando preocupações e longos períodos de espera
            pelo telefone. O agendamento pode ser realizado de forma rápida e
            prática, seja por meio do celular ou da web.
          </p>
        </div>
      </div>
    </div>
  );
}
