document.addEventListener("DOMContentLoaded", () => {
    const faqData = [
      {
        question: "Quais são as formas de pagamento aceitas no seguro bike?",
        answer:
          "Até 6x sem juros por débito automático em conta corrente ou cartão de crédito de qualquer bandeira; Até 12x no Cartão de Crédito Porto Bank, com desconto especial de 5%",
      },
      {
        question: "A cobertura de roubo garante furto simples?",
        answer:
          "A cobertura de roubo garante a subtração da bicicleta e dos acessórios, mediante o emprego de violência ou o rompimento de obstáculos do local, desde que existam vestígios materiais. Não é o caso de amparos para simples desaparecimentos ou extravios.",
      },
      {
        question: "Qual é o valor da franquia do Seguro Bike da Porto?",
        answer:
          "O valor da franquia, ou seja, participação do segurado na hora de pagar pela reparação de um dano, pode variar de acordo com o preço da sua bike e essa informação está detalhada no documento do seguro (apólice). Este valor é o mesmo que foi definido junto ao corretor no momento da negociação do seguro e só ocorre quando há indenização por parte da seguradora.",
      },
      {
        question: "O seguro bike tem cobertura para terceiros?",
        answer:
          "Sim, de forma opcional. Chamamos de cobertura de Responsabilidade Civil, que oferece amparo para danos materiais ou corporais causados a terceiros durante o uso da bicicleta. Ex.: a bike atingiu uma pessoa ou veículo de alguém, a cobertura ampara essas situações, desde que a pessoa atingida não seja alguém da sua família.",
      },
      {
        question:
          "Qual é o valor mínimo da bicicleta para que eu possa contratar o Seguro Bike da Porto?",
        answer:
          "Você pode contratar o seguro para bicicletas com valores a partir de R$ 2.000,00",
      },
      {
        question: "Posso contratar o seguro de bike para bicicleta usada?",
        answer: `
          <p>Você pode contratar o seguro para: </p>
          <ul class="body-postion-faq">
            <li>Bicicleta tradicional nova;</li>
            <li>Bicicleta tradicional com até 8 anos de uso;</li>
            <li>Bicicleta elétrica com até 3 anos de uso;</li>
          </ul>
        `,
      },
    ];
  
    const faqContainer = document.getElementById("faq-container");
  
    faqData.forEach((faq, index) => {
      const faqItem = document.createElement("div");
      faqItem.className = `faq-${index}`;
  
      const question = document.createElement("h2");
      question.className = "faq-page";
      question.textContent = faq.question;
      question.addEventListener("click", () => toggleAccordion(index));
  
      const answer = document.createElement("div");
      answer.className = "faq-body";
      answer.innerHTML = faq.answer;
      answer.style.display = "none";
  
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
  