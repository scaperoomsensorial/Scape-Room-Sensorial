// Data do evento
const countDownDate = new Date("Oct 22, 2026 15:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h " 
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        
        // Substitui o conteúdo da caixa do timer pelo Ranking das Equipes
        document.getElementById("timer-title").innerHTML = "RANKING FINAL - FUGIDAS DA DOPAMINA";
        document.getElementById("timer-box").innerHTML = `
            <h2 id="timer-title" style="color: #e3000f; margin-top: 0;">RANKING DAS EQUIPES</h2>
            <table class="ranking-table">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Nome da Equipe</th>
                        <th>Tempo de Fuga</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1º</td>
                        <td>CyberMente</td>
                        <td>11 min 45 seg</td>
                    </tr>
                    <tr>
                        <td>2º</td>
                        <td>Os Desconectados</td>
                        <td>13 min 20 seg</td>
                    </tr>
                    <tr>
                        <td>3º</td>
                        <td>Sinapse Rápida</td>
                        <td>14 min 10 seg</td>
                    </tr>
                </tbody>
            </table>
        `;
    }
}, 1000);