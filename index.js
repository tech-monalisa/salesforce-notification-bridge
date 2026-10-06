// Simulação de um evento do Salesforce Service Cloud (Ex: Caso fechado)
const casoServiceCloud = {
    casoId: "CASO-88421",
    cliente: "Monalisa",
    telefone: "+55 (41) 99999-9999",
    status: "Fechado",
    assunto: "Dúvida sobre integração e canais de atendimento"
};

console.log("----------------------------------------------------");
console.log(" [Salesforce Service Cloud] Evento Detectado:");
console.log(` O Caso ${casoServiceCloud.casoId} do cliente ${casoServiceCloud.cliente} foi atualizado para: ${casoServiceCloud.status}`);
console.log("----------------------------------------------------");

// Função que simula o disparo da Notificação / SMS / Push
function enviarNotificacao(canal, mensagem) {
    console.log(`\n Disparando ${canal} para o número ${casoServiceCloud.telefone}...`);
    console.log(` Mensagem: "${mensagem}"`);
    console.log(` Status: [ENTREGUE COM SUCESSO] 🚀\n`);
}

// Simulando o envio de um SMS de pós-atendimento
enviarNotificacao(
    "SMS", 
    `Olá ${casoServiceCloud.cliente}, seu chamado (${casoServiceCloud.casoId}) foi resolvido. Avalie nosso atendimento!`
);