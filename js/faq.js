document.addEventListener("DOMContentLoaded", () => {
  const faqData = [
    {
      question: "Como funciona o programa de benefícios?",
      answer:
        "Nosso programa recompensa ações sustentáveis! Quando você realiza práticas ecológicas, como instalar energia solar, reduzir o consumo de eletricidade ou participar de eventos educativos, acumula pontos que podem ser trocados por descontos, produtos sustentáveis ou doações para causas ambientais.",
    },
    {
      question: "Quem pode participar do programa?",
      answer:
        "O programa é aberto para qualquer pessoa interessada em promover a sustentabilidade e adotar práticas que contribuam para a preservação do meio ambiente. Empresas também podem participar como parceiras, oferecendo recompensas e ampliando sua visibilidade no mercado sustentável.",
    },
    {
      question: "Quais tipos de recompensas estão disponíveis?",
      answer:
        "As recompensas incluem descontos em produtos e serviços de parceiros, itens ecológicos como garrafas reutilizáveis e sacolas sustentáveis, consultorias especializadas em energia limpa, e até mesmo a conversão de pontos em doações para projetos ambientais.",
    },
    {
      question: "Como as empresas podem se tornar parceiras?",
      answer:
        "Empresas interessadas em ser parceiras podem entrar em contato conosco para cadastrar suas ofertas no programa. Como parceiras, elas ganham visibilidade na plataforma, acesso a consumidores conscientes e recebem o Selo de Empresa Sustentável para exibir em seus canais digitais.",
    },
    {
      question: "Como posso acumular pontos?",
      answer: `
          <p>Você pode acumular pontos de várias formas:</p>
          <ul class="body-postion-faq">
            <li>Realizando ações sustentáveis, como instalação de painéis solares ou compra de aparelhos eficientes.</li>
            <li>Participando de workshops e eventos sobre energia renovável.</li>
            <li>Divulgando práticas ecológicas nas redes sociais e indicando amigos para o programa.</li>
          </ul>
        `,
    },
    {
      question: "O que é o Selo de Empresa Sustentável?",
      answer:
        "O Selo de Empresa Sustentável é um símbolo exclusivo concedido às empresas parceiras do programa. Ele certifica que a empresa está engajada em práticas e iniciativas voltadas para a sustentabilidade. O selo pode ser exibido no footer do site da empresa, reforçando seu compromisso com o meio ambiente e destacando-a como líder no mercado sustentável.",
    },
  ];

  const faqContainer = document.getElementById("faq-container");

  faqData.forEach((faq, index) => {
    const faqItem = document.createElement("div");
    faqItem.className = `faq-${index}`;

    const question = document.createElement("h2");
    question.className = "faq-page";
    question.textContent = faq.question;

    const answer = document.createElement("div");
    answer.className = "faq-body";
    answer.innerHTML = faq.answer;

    // Deixar a primeira pergunta aberta
    if (index === 0) {
      answer.style.display = "block"; // Exibir a resposta
      question.classList.add("active"); // Marcar o título como ativo
    } else {
      answer.style.display = "none"; // Manter os outros fechados
    }

    question.addEventListener("click", () => toggleAccordion(index));

    faqItem.appendChild(question);
    faqItem.appendChild(answer);
    faqContainer.appendChild(faqItem);

    const separator = document.createElement("hr");
    faqItem.appendChild(separator);
  });

  function toggleAccordion(index) {
    const faqItems = faqContainer.querySelectorAll(".faq-body");
    const questionItems = faqContainer.querySelectorAll(".faq-page");
    faqItems[index].style.display =
      faqItems[index].style.display === "block" ? "none" : "block";
    questionItems[index].classList.toggle("active");
  }
});
