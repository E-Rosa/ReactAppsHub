import Post from "../Post/Post.js";
import "./MainPage.css";

export default function MainPage(props) {
  return (
    <>
      <div className="MainPage">
        <div className="Posts-container">
          <div className="Post">
            <h2 className="post-title">
              Como transferir arquivos para diferentes dispositivos através da
              nuvem
            </h2>
            <h5 className="post-subtitle">Com o Google Drive</h5>
            <p className="post-text">
              <b>PC de origem:</b> dispositivo que possui os dados a serem
              transferidos.<br></br><b>PC destino:</b> dispositivo que receberá os
              dados.
            </p>
            <p>
              1. <b>No PC de origem</b>, acesse drive.google.com, e caso ainda
              não tenha feito o login, faça-o com uma conta Google. Você será
              redirecionado pra esta página:
            </p>
            <img
              src="https://i.imgur.com/EDrFHpv.png"
              alt="google drives initial page"
            ></img>

            <p>
              2. Vamos <b>criar uma pasta</b> para colocar todos os arquivos a
              serem transferidos. Vamos clicar em
              <img
                src="https://i.imgur.com/WkpYYux.png"
                alt="botao novo do google drive"
              ></img>
              , no canto superior esquerdo da tela.
            </p>
            <img
              src="https://i.imgur.com/ai1NOwa.gif"
              className="center-image"
              alt="how to create a folder in google drive"
            ></img>
            <p>
              Depois clique em pasta e nomeie-a arquivos-a-transferir Você
              deverá vê-la entre seus arquivos em Meu Drive.
            </p>
            <p>
              3. Agora precisamos escolher quais arquivos vão ser transferidos.
              Vá até sua Area de Trabalho, clique com o botão direito, novo,
              nova pasta. Nomeie-a <b>arquivos-a-transferir</b>, assim:
            </p>
            <img
              src="https://i.imgur.com/TISB0T2.gif"
              alt="criando uma pasta no windows"
            ></img>
            <p>
              4. <b>Abra a pasta arquivos-a-transferir</b>, use as bordas pra
              redimensionar a janela do explorador de tarefas de modo que cubra
              apenas metade da tela verticalmente. Após, clique no explorador de
              arquivos com o botão direito e abra uma nova janela, e posicione-a
              no outro lado da tela
            </p>
            <img
              src="https://i.imgur.com/SRx4NIx.gif"
              alt="como redimensionar janelas no windows"
            ></img>
            <p>
              5. <b>Selecione os arquivos a serem transferidos</b> e os arraste
              para a pasta
              <i>arquivos-a-transferir</i>
            </p>
            <p>
              6. <b>Dentro da pasta arquivos-a-transferir do Google Drive</b>,
              arraste todos os items dentro da pasta{" "}
              <i>arquivos-a-transferir</i>
              do seu computador para a pasta do google drive, assim:
            </p>
            <img
              src="https://i.imgur.com/9rpErP1.gif"
              alt="como adicionar arquivos ao google drive"
            ></img>
            <p>
              7. <b>No PC destino</b>, acesse{" "}
              <a href="drive.google.com">drive.google.com</a>
              acesse <i>Meu Drive</i>, depois <i>arquivos-a-transferir</i> e{" "}
              <b>
                faça download dos arquivos em qualquer dispositivo que possa
                acessar o Google Drive
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
