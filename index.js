// Dados simulados do Salesforce
const casoServiceCloud = {
    casoId: "CASO-88421",
    cliente: "Monalisa",
    telefone: "+55 (41) 99999-9999",
    status: "Fechado"
};

console.log("--------------------------------------------------");
console.log(" [Salesforce Service Cloud] Evento Detectado:");
console.log(` O Caso ${casoServiceCloud.casoId} do cliente ${casoServiceCloud.cliente} foi atualizado para: ${casoServiceCloud.status}`);
console.log("--------------------------------------------------");

// Função que simula o disparo da Notificação
function enviarNotificacao(canal) {
    let mensagem = "";

    if (casoServiceCloud.status === "Fechado") {
        mensagem = `Olá ${casoServiceCloud.cliente}, seu chamado (${casoServiceCloud.casoId}) foi resolvido com sucesso!`;
    } else {
        mensagem = `Olá ${casoServiceCloud.cliente}, seu chamado (${casoServiceCloud.casoId}) está em atendimento e nossa equipe já está analisando!`;
    }

    console.log(`\n Disparando ${canal} para o número ${casoServiceCloud.telefone}...`);
    console.log(` Mensagem: "${mensagem}"`);
    console.log(` Status: [ENTREGUE COM SUCESSO] 🚀\n`);
}

// Testa os dois canais
enviarNotificacao("SMS");
enviarNotificacao("WhatsApp");