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
        
        document.getElementById("timer-title").innerHTML = "RANKING FINAL - FUGIDAS DA DOPAMINA";
        
        const timerBox = document.getElementById("timer-box");
        timerBox.innerHTML = `
            <h2 style="color: #e3000f; margin-top: 0; text-align: center;">RANKING DAS EQUIPES</h2>
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

            <div class="comments-container" id="giscus-container">
                <h3 style="color: #e3000f; text-align: center; text-transform: uppercase; margin-bottom: 15px;">Comentários dos Participantes</h3>
            </div>
        `;

        // Cria e insere o script do Giscus dinamicamente na página
        const giscusScript = document.createElement("script");
        giscusScript.src = "https://giscus.app/client.js";
        giscusScript.setAttribute("data-repo", "scaperoomsensorial/Scape-Room-Sensorial");
        giscusScript.setAttribute("data-repo-id", "R_kgDOUh8Swg");
        giscusScript.setAttribute("data-category", "Announcements");
        giscusScript.setAttribute("data-category-id", "DIC_kwDOUh8Sws4DGZCP");
        giscusScript.setAttribute("data-mapping", "pathname");
        giscusScript.setAttribute("data-strict", "0");
        giscusScript.setAttribute("data-reactions-enabled", "1");
        giscusScript.setAttribute("data-emit-metadata", "0");
        giscusScript.setAttribute("data-input-position", "bottom");
        giscusScript.setAttribute("data-theme", "transparent_dark");
        giscusScript.setAttribute("data-lang", "pt");
        giscusScript.crossOrigin = "anonymous";
        giscusScript.async = true;

        document.getElementById("giscus-container").appendChild(giscusScript);
    }
}, 1000);
